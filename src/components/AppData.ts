import {Model} from './base/Model';
import {IAppData, IOrder, IProduct} from "../types";
import {Product} from "./Product";

//Класс для хранение данных
export class AppData extends Model<IAppData> {
    catalog: IProduct[];
    basket: IProduct[] = [];
    order: IOrder;

    //получение списка товаров
    setCatalog(items: IProduct[]): void

    //добавление товара в корзину
    add(value: Product): void

    //удаление товара из корзины
    remove(id: string): void

    //подсчет количества товаров
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
