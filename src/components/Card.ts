import {Component} from './base/Component';
import {Category, ICard, ICardAction} from "../types";
import {ensureElement} from "../utils/utils";

const CategoryTypes: Record<string, string> = {
    'софт-скил': 'soft',
    'другое': 'other',
    'дополнительное': 'additional',
    'хард-скил': 'hard',
};

/**
 * Класс для управления отображением информации о продукте, наследуется от класса Component (реализация слоя View).
 * Класс используется для управления отображением данных (название, картинка) в компоненте карточки товара
 */
export class Card extends Component<ICard> {
    protected title: HTMLElement;
    protected image?: HTMLImageElement;
    protected text?: HTMLElement | null;
    protected category?: HTMLElement | null;
    protected button?: HTMLButtonElement | null;

    constructor(container: HTMLElement, actions?: ICardAction) {
        super(container);

        this.title = ensureElement<HTMLElement>(`.card__title`, container);
        this.image = container.querySelector(`.card__image`);
        this.text = container.querySelector(`.card__text`);
        this.category = container.querySelector(`.card__category`);
        this.button = container.querySelector(`.card__button`);

        if (actions?.onClick) {
            if (this.button) {
                this.button.addEventListener('click', actions.onClick);
            } else {
                container.addEventListener('click', actions.onClick);
            }
        }
    }

    //установка текста в карточку
    set title(value: string) {
        this.setText(this.title, value);
    }

    //получение текста в карточке
    get title(): string {
        return this.title.textContent || '';
    }

    //установка изображения в карточку
    set image(value: string){
        this.setImage(this.image, value, this.title);
    }

    //установка описания в карточку
    set description(value: string) {
        this.setText(this.text, value);
    }

    //получение описания в карточке
    get description(): string {
        return this.text.textContent || '';
    }

    //установка категории товара
    set category(value: Category){
        this.setText(this.category, value);
        this.category.classList.add(`card__category_${CategoryTypes[value]}`);
    }
}
