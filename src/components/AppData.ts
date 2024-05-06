import {Model} from './base/Model';
import {IAppData, IOrder, IProduct} from "../types";
import {Product} from "./Product";

/**
 * Класс для управления состоянием приложения, т.е. для хранения данных (реализация слоя Model), наследуется от класса Model.
 * Класс получает, передает, хранит и удаляет данные, которые используются Presenter'ом (данные приходят и отправляются в Presenter).
 * Например, в Presenter (index.ts) вызывается экземпляр класса AppData и происходит передача данных, например товара (Product) используя метод (add) класса AppData
 */
export class AppData extends Model<IAppData> {
    catalog: IProduct[];
    basket: IProduct[] = [];
    order: IOrder = {
        address: '',
        payment: null,
        email: '',
        phone: '',
        items: [],
        total: null,
    };

    //получение списка товаров
    setCatalog(items: IProduct[]) {
        this.catalog = items.map((item) => new Product(item, this.events));
        this.emitChanges('items:render', { catalog: this.catalog });
    }

    //добавление товара в корзину
    add(value: Product): void

    //удаление товара из корзины
    remove(id: string): void

    //получение значения подсчета количества товаров
    get count(): void

    //получение итоговой суммы заказа в корзине
    get totalPrice(): void

    //добавление данных покупателя
    setDataBuyer(): void

    //очистка корзины
    resetBasket(): void

    //очистка данных покупателя
    resetOrder(): void
}
