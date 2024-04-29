import { Component } from './base/Component';
import { EventEmitter } from './base/events';
import { IBasket } from '../types';

export class Basket extends Component<IBasket> {
    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
    }

    set items(items: HTMLElement[]): void

    set price(value: number): void

    disableButton(value: boolean): void
}
