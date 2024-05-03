import {Component} from './base/Component';
import {IPage} from '../types';
import {IEvents} from './base/events';

/**
 * Класс для управления элементами главной страницы, наследуется от класса Component (реализация слоя View).
 * Класс используется для управления состоянием страницы и отображением товаров на странице
 */
export class Page extends Component<IPage> {
    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
    }

    //установка списка товаров на странице
    set list(items: HTMLElement[]): void

    //установка блокировки на странице
    set blocked(value: boolean): void
}
