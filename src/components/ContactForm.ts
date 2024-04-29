import {IContactForm } from '../types';
import {IEvents} from './base/events';
import {Form} from "./common/Form";

export class ContactForm extends Form<IContactForm> {
    constructor(container: HTMLFormElement, events: IEvents) {
        super(container, events);
    }

    //установка номера телефона
    set phone(value: string): void

    //установка почты
    set email(value: string): void
}
