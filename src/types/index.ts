export type Category =  'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';

//интерфейс данных приложения
export interface IAppData {
    catalog: IProduct[]; //список товаров
    basket: IProduct[]; //информация из корзины
    order: IOrder | null; //информация для заказа
}

//интерфейс главной страницы
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
    index?: number;
}

//интерфейс модального окна для оформления доставки
export interface IDeliverForm {
    address: string; //адрес доставки
    payment: string; //способ оплаты
}

//интерфейс модального окна Контакты
export interface IContactForm {
    email: string; //email
    phone: string; //телефон
}

//интерфейс корзины
export interface IBasket {
    items: HTMLElement[]; //список товаров
    price: number; //стоимость заказа
}

//интерфейс заказа
export interface IOrder extends IDeliverForm, IContactForm {
    items: string[]; //список id товаров
    total: number; //общая сумма заказа
}

//интерфейс формы заказа
export interface IOrderForm extends IDeliverForm, IContactForm {}

//интерфейс валидации формы
export type FormErrors = Partial<Record<keyof IOrder, string>>;

//интерфейс успешное оформление заказа
export interface IOrderSuccess {
    id: string; //id заказа
    count: number; //количество списанных синапсов
}

//интерфейс действий окна успешного оформления заказа
export interface ISuccessActions {
    onClick: () => void; //по клику
}

//интерфейс модального окна
export interface IModal {
    //содержимое
    content: HTMLElement;
}

//интерфейс окна формы
export interface IForm {
    valid: boolean; //валидность формы
    errors: string[]; //ошибки в форме
}

//интерфейс действий над карточкой
export interface ICardAction {
    onClick: (event: MouseEvent) => void; //по клику
}