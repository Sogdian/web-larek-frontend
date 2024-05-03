import {IDeliverForm} from '../types';
import {IEvents} from './base/events';
import {Form} from "./common/Form";

/**
 * Класс для управления отображением формы оформления доставки, наследуется от класса Form (реализация слоя View).
 * Класс используется для управления отображением данных (адрес) в компоненте формы заполнения данных пользователя
 */
export class DeliverForm extends Form<IDeliverForm> {
    constructor(container: HTMLFormElement, events: IEvents) {
        super(container, events);
    }

    //установка адреса заказа
    set address(value: string): void
}
