//типы категорий товаров
export type Category =  'софт-скил' | 'другое' | 'дополнительное' | 'кнопка' | 'хард-скил';

//интерфейс товара с сервера
export interface IProduct {
    id: string; //id с сервера
    category: Category; //категория товара - используется на главной странице Page и при просмотре карточки
    title: string; //наименование товара - используется на главной странице Page, при просмотре карточки и в корзине
    description: string; //описание товара - используется на при просмотре карточки
    image: string; //картинка товара - используется на главной странице Page и при просмотре карточки
    price: number | null; //цена товара - используется на главной странице Page, при просмотре карточки и в корзине
    selected?: boolean; //находится ли товар в корзине
}

//интерфейс карточки товара
export interface ICard extends IProduct {
    //находится ли товар в корзине
    selected: boolean;
    index?: number;
}

//состояние приложения
export interface IAppState {
    //список товаров
    catalog: IProduct[];
    //корзина
    basket: IProduct[];
    //заказ
    order: IOrder | null;
}

//модальное окно для оформления доставки
export interface IDeliveryForm {
    //адрес
    address: string;
    //способ оплаты
    payment: string;
}

//модальное окно "контакты"
export interface IContactsForm {
    //электронная почта
    email: string;
    //телефон
    phone: string;
}

//поля заказа
export interface IOrderForm extends IDeliveryForm, IContactsForm {}

//заказ
export interface IOrder extends IDeliveryForm, IContactsForm {
    //cписок id
    items: string[];
    //общая сумма заказа
    total: number;
}

//любое модальное окно
export interface IModal {
    //содержимое
    content: HTMLElement;
}

export interface IForm {
    //валидность формы для форм ввода
    valid: boolean;
    //ошибки для форм ввода
    errors: string[];
}

//главная страница с каталогом товаров
export interface IPage {
    //массив карточек товаров
    list: HTMLElement[];
    //количество товаров в корзине
    count: number;
    //отмена прокрутки страницы
    blocked: boolean;
}

//корзина
export interface IBasket {
    items: HTMLElement[]; //массив карточек товаров
    price: number; //стоимость заказа
}

//валидация форм
export type FormErrors = Partial<Record<keyof IOrder, string>>;

//успешное оформление заказа
export interface ISuccess {
    id: string; //id с сервера
    count: number; //кол-во списанных синапсов
}

export interface ISuccessActions {
    onClick: () => void; //клик
}

export interface ICardActions {
    onClick: (event: MouseEvent) => void; //клик
}
