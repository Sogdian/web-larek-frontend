import {IProduct} from "../types";
import {Category} from "../types";
import {Model} from './base/Model';

//Класс описывающий свойства товара
export class Product extends Model<IProduct> {
    id: string;
    category: Category;
    title: string;
    description: string;
    image: string;
    price: number | null;
    selected: boolean;
}