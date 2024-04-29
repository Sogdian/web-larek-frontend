import {Component} from './base/Component';
import {Category, ICard} from "../types";

const CategoryTypes: Record<string, string> = {
    'софт-скил': 'soft',
    'другое': 'other',
    'дополнительное': 'additional',
    'хард-скил': 'hard',
};

//Класс для управления отображения информации о продукте
export class Card extends Component<ICard> {
    constructor(container: HTMLElement) {
        super(container);
    }

    //установка текста в карточку
    set title(value: string): void

    //получение текста в карточке
    get title(): string

    //установка изображения в карточку
    set image(value: string): void

    //установка описания в карточку
    set description(value: string)

    //получение описания в карточке
    get description(): string

    //установка категории товара
    set category(value: Category): void
}
