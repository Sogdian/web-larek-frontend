import {Component} from "./base/component";
import {IModal} from "../types";
import {IEvents} from "./base/events";

export class Modal extends Component<IModal> {
    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
    }

    set content(value: HTMLElement): void

    //открытие модального окна
    open(): void

    //закрытие модального окна
    close(): void

    //отображение модального окна
    render(data: IModal): HTMLElement
}
