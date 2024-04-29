import {IOrderSuccess} from "../types";
import {Component} from './base/Component';

export class SuccessForm extends Component<IOrderSuccess> {
    constructor(container: HTMLElement) {
        super(container);
    }

    //установка количества списанных синапсов
    set count(value: number): void
}
