import {IDeliverForm} from '../types';
import {IEvents} from './base/events';
import {Form} from "./common/Form";

/**
 * Класс для управления отображением формы оформления доставки, наследуется от класса Form (реализация слоя View).
 * Класс используется для управления отображением данных (адрес) в компоненте формы заполнения данных пользователя
 */
export class DeliverForm extends Form<IDeliverForm> {
    protected card: HTMLButtonElement;
    protected cash: HTMLButtonElement;
    protected button: HTMLElement;

    constructor(container: HTMLFormElement, events: IEvents) {
        super(container, events);

        this.card = this.container.elements.namedItem('card') as HTMLButtonElement;
        this.cash = this.container.elements.namedItem('cash') as HTMLButtonElement;
        this.button = this.container.querySelector('.order__button');

        if (this.card) {
            this.card.addEventListener('click', () => {
                this.card.classList.add('button_alt-active');
                this.cash.classList.remove('button_alt-active');
                this.onInputChange('payment', 'card');
            });
        }

        if (this.cash) {
            this.cash.addEventListener('click', () => {
                this.cash.classList.add('button_alt-active');
                this.card.classList.remove('button_alt-active');
                this.onInputChange('payment', 'cash');
            });
        }
    }

    //установка адреса заказа
    set address(value: string) {
        const address = this.container.elements.namedItem('address') as HTMLInputElement;
        address.value = value;
    }
}
