import {Component} from "../base/component";
import {IModal} from "../../types";
import {IEvents} from "../base/events";

/**
 * Класс для работы с модальными окнами, наследуется от класса Component (реализация слоя View).
 * Класс используется для управления состоянием (открыт, закрыт) и отображением компонента (render) модального окна
 */
export class Modal extends Component<IModal> {
    protected content: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
    }

    //установка значения в модальном окне
    set content(value: HTMLElement) {
        this.content.replaceChildren(value);
    }

    //открытие модального окна
    open() {
        this.container.classList.add('modal_active');
        this.events.emit('modal:open');
    }

    //закрытие модального окна
    close(){
        this.container.classList.remove('modal_active');
        this.content = null;
        this.events.emit('modal:close');
    }

    //отображение модального окна
    render(data: IModal) {
        super.render(data);
        this.open();

        return this.container;
    }
}
