import { Component } from '../base/component';
import { EventEmitter } from '../base/events';
import { IBasket } from '../../types';

/**
 * Класс для работы с корзиной, наследуется от класса Component (реализация слоя View).
 * Класс используется для управления отображением данных (товаров, цены) в компоненте корзины
 */
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
