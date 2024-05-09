import './scss/styles.scss';
import {EventEmitter} from "./components/base/events";
import {AppData} from "./components/AppData";
import {Card} from "./components/Card";
import {cloneTemplate, ensureElement} from "./utils/utils";
import {Page} from "./components/Page";
import {LarekAPI} from "./components/LarekApi";
import {API_URL, CDN_URL} from "./utils/constants";

const appData = new AppData({}, events);
const events = new EventEmitter();
const page = new Page(document.body, events);
const api = new LarekAPI(CDN_URL, API_URL);

const cardCatalogTemplate = ensureElement<HTMLTemplateElement>('#card-catalog');

//Получение товаров с сервера
api.getProductList()
   .then(appData.setCatalog.bind(appData))
   .catch((err) => {
        console.error(err);
   });

events.on('items:render', () => {
    page.list = appData.catalog.map((item) => {
        const cardCatalog = new Card(cloneTemplate(cardCatalogTemplate), {
            onClick: () => events.emit('card:selected', item),
        });
        return cardCatalog.render({
        });
    });
});