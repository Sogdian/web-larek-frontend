import {IOrderSuccess, ISuccessActions} from "../../types";
import {Component} from '../base/component';
import {ensureElement} from "../../utils/utils";

/**
 * Класс для работы с окном успешного оформления заказа, наследуется от класса Component (реализация слоя View).
 * Класс используется для управления отображением данных (стоимость товара) в компоненте модального окна успешного оформления заказа
 */
export class SuccessForm extends Component<IOrderSuccess> {
    protected count: HTMLElement;

    constructor(container: HTMLElement, actions?: ISuccessActions) {
        super(container);

        this.count = ensureElement<HTMLElement>('.order-success__description', this.container);
    }

    //установка количества списанных синапсов
    set count(value: number) {
        this.count.textContent = '!Списано ' + String(value) + ' синапсов';
    }
}