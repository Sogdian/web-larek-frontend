import {Component} from "../base/component";
import {IEvents} from "../base/events";
import {IForm} from "../../types";

/**
 * Класс для работы с формами, наследуется от класса Component (реализация слоя View).
 * Класс используется для установки значения валидности и передачу ошибок в компонент, а также для отображения компонента (render) формы заполнения данных
 */
export class Form<T> extends Component<IForm> {
    protected submit: HTMLButtonElement;
    protected errors: HTMLElement;

    constructor(protected container: HTMLFormElement, protected events: IEvents) {
        super(container);
    }

    //изменение поля в заказе
    protected onInputChange(field: keyof T, value: string){
        this.events.emit(`order:change`, {
            field,
            value,
        });
    }

    //установка значения валидности
    set valid(value: boolean){
        this.submit.disabled = !value;
    }

    //передача ошибок в форме
    set errors(value: string){
        this.setText(this.errors, value);
    }

    //отображение формы
    render(state: Partial<T> & IForm){
        const { valid, errors, ...inputs } = state;
        super.render({ valid, errors });
        Object.assign(this, inputs);

        return this.container;
    }
}
