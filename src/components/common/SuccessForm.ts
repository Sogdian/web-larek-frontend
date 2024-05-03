import {IOrderSuccess} from "../../types";
import {Component} from '../base/component';

/**
 * Класс для работы с окном успешного оформления заказа, наследуется от класса Component (реализация слоя View).
 * Класс используется для управления отображением данных (стоимость товара) в компоненте модального окна успешного оформления заказа
 */
export class SuccessForm extends Component<IOrderSuccess> {
    constructor(container: HTMLElement) {
        super(container);
    }

    //установка количества списанных синапсов
    set count(value: number): void
}
