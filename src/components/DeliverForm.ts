import {IDeliverForm} from '../types';
import {IEvents} from './base/events';
import {Form} from "./common/Form";

export class DeliverForm extends Form<IDeliverForm> {
    constructor(container: HTMLFormElement, events: IEvents) {
        super(container, events);
    }

    //установка адреса заказа
    set address(value: string): void
}
