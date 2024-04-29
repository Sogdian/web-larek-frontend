export type Category =  'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';

//данные приложения
export interface IAppData {
    catalog: IProduct[]; //список товаров
    basket: IProduct[]; //информация из корзины
    order: IOrder | null; //информация для заказа
}

//главная страница
export interface IPage {
    list: HTMLElement[]; //список товаров
}

//интерфейс товара
export interface IProduct {
    id: string; //id товара
    category: Category; //категория товара
    title: string; //наименование товара
    description: string; //описание товара
    image: string; //изображение товара
    price: number | null; //цена товара
    selected?: boolean; //выбран ли товар
}

//интерфейс карточки товара
export interface ICard extends IProduct {
    selected: boolean; //в корзине ли товар
}

//модальное окно для оформления доставки
export interface IDeliverForm {
    address: string; //адрес доставки
    payment: string; //способ оплаты
}

//модальное окно Контакты
export interface IContactForm {
    email: string; //email
    phone: string; //телефон
}

//корзина
export interface IBasket {
    items: HTMLElement[]; //список товаров
    price: number; //стоимость заказа
}

//заказ
export interface IOrder extends IDeliverForm, IContactForm {
    items: string[]; //список id товаров
    total: number; //общая сумма заказа
}

//успешное оформление заказа
export interface IOrderSuccess {
    id: string; //id заказа
    count: number; //количество списанных синапсов
}

//любое модальное окно
export interface IModal {
    //содержимое
    content: HTMLElement;
}

//окно формы
export interface IForm {
    valid: boolean; //валидность формы
    errors: string[]; //ошибки в форме
}