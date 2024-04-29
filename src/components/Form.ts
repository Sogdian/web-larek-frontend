import {Component} from "./base/component";
import {IEvents} from "./base/events";
import {IForm} from "../types";

export class Form<T> extends Component<IForm> {
    constructor(protected container: HTMLFormElement, protected events: IEvents) {
        super(container);
    }

    //изменение поля в заказе
    protected onInputChange(field: keyof T, value: string): void

    //установить значение валидности
    set valid(value: boolean): void

    //установить ошибки в форме
    set errors(value: string): void

    //отображение формы
    render(state: Partial<T> & IForm): void
}
