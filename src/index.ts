import './scss/styles.scss';
import {EventEmitter} from "./components/base/events";
import {AppData} from "./components/AppData";
import {Card} from "./components/Card";
import {cloneTemplate, ensureElement} from "./utils/utils";
import {Page} from "./components/Page";
import {LarekAPI} from "./components/LarekApi";
import {API_URL, CDN_URL} from "./utils/constants";
import {Product} from "./components/Product";
import {Modal} from "./components/common/Modal";
import {Basket} from "./components/common/Basket";
import {DeliverForm} from "./components/DeliverForm";
import {ContactForm} from "./components/ContactForm";

const events = new EventEmitter();
const api = new LarekAPI(CDN_URL, API_URL);

const cardCatalog = ensureElement<HTMLTemplateElement>('#card-catalog');
const cardPreview = ensureElement<HTMLTemplateElement>('#card-preview');
const cardBasket = ensureElement<HTMLTemplateElement>('#card-basket');
const basketTemplate = ensureElement<HTMLTemplateElement>('#basket');
const orderTemplate = ensureElement<HTMLTemplateElement>('#order');
const contactsTemplate = ensureElement<HTMLTemplateElement>('#contacts');

const appData = new AppData({}, events);
const basket = new Basket(cloneTemplate(basketTemplate), events);
const page = new Page(document.body, events);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);
const order = new DeliverForm(cloneTemplate(orderTemplate), events);
const contacts = new ContactForm(cloneTemplate(contactsTemplate), events);

//Получение товаров с сервера
api.getProductList()
  .then(appData.setCatalog.bind(appData))
  .catch((err) => {
       console.error(err);
  });

//Отображение товаров на странице
events.on('items:render', () => {
    page.list = appData.catalog.map((item) => {
        const cardTemplate = new Card(cloneTemplate(cardCatalog), {
            onClick: () => events.emit('card:selected', item),
        });

        return cardTemplate.render({
            id: item.id,
            category: item.category,
            title: item.title,
            price: item.price,
            image: item.image,
            description: item.description,
        });
    });
});

//Открыть карточку товара
events.on('card:selected', (item: Product) => {
    events.emit('modal:open');

    const cardTemplate = new Card(cloneTemplate(cardPreview), {
        onClick: () => {
            events.emit('item:addInBasket', item);
        },
    });

    modal.render({
        content: cardTemplate.render({
            id: item.id,
            title: item.title,
            image: item.image,
            category: item.category,
            description: item.description,
            price: item.price,
            selected: item.selected,
        }),
    });
});

//Добавить товар в корзину
events.on('item:addInBasket', (item: Product) => {
    item.selected = true;
    appData.add(item);
    appData.setCustomerData();
    modal.close();
});

//Открыть корзину
events.on('basket:open', () => {
    events.emit('modal:open');

    const cardsBasket = appData.basket.map((item) => {
        const cardTemplate = new Card(cloneTemplate(cardBasket), {
            onClick: () => {
                events.emit('item:remove', item);
            },
        });

        return cardTemplate.render({
            title: item.title,
            price: item.price,
        });
    });

    modal.render({
        content: basket.render({
            items: cardsBasket,
            price: appData.totalPrice,
        }),
    });

    basket.disableButton(!appData.basket.length);
});

//Удалить товар из корзины
events.on('item:remove', (item: Product) => {
    item.selected = false;
    appData.remove(item.id);
    basket.price = appData.totalPrice;
    events.emit('basket:open');
});

//Оформить заказ
events.on('order:open', () => {
    modal.render({
        content: order.render({
            address: '',
            valid: false,
            errors: [],
        }),
    });
});

//Отобразить форму заказ оформлен
events.on('order:submit', () => {
    appData.order.total = appData.totalPrice;

    modal.render({
        content: contacts.render({
            phone: '',
            email: '',
            valid: false,
            errors: [],
        }),
    });
});

//Отправка заказа на сервер
events.on('contacts:submit', () => {
    api.post('/order', appData.order)
       .then((result) => {
           modal.close();
           events.emit('order:success', result);
           page.updateCount = 0;
           appData.resetBasket();
           appData.resetOrder();
       })
       .catch((err) => {
           console.error(err);
       });
});
