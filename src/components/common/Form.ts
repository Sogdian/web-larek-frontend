import {Component} from "../base/component";
import {IEvents} from "../base/events";
import {IForm} from "../../types";

//Класс для работы с формами
export class Form<T> extends Component<IForm> {
    constructor(protected container: HTMLFormElement, protected events: IEvents) {
        super(container);
    }

    //изменение поля в заказе
    protected onInputChange(field: keyof T, value: string): void

    //установка значения валидности
    set valid(value: boolean): void

    //передача ошибок в форме
    set errors(value: string): void

    //отображение формы
    render(state: Partial<T> & IForm): void
}
