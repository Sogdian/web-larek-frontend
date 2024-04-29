import { Component } from '../base/component';
import { EventEmitter } from '../base/events';
import { IBasket } from '../../types';

export class Basket extends Component<IBasket> {
    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
    }

    //установка списка товаров
    set items(items: HTMLElement[]): void

    //установка цены
    set price(value: number): void

    //блокировка кнопки
    disableButton(value: boolean): void
}
