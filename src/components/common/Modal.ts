import {Component} from "../base/component";
import {IModal} from "../../types";
import {IEvents} from "../base/events";
import {ensureElement} from "../../utils/utils";

/**
 * Класс для работы с модальными окнами, наследуется от класса Component (реализация слоя View).
 * Класс используется для управления состоянием (открыт, закрыт) и отображением компонента (render) модального окна
 */
export class Modal extends Component<IModal> {
    protected modalContent: HTMLElement;
    protected closeButton: HTMLButtonElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);

        this.closeButton = ensureElement<HTMLButtonElement>('.modal__close', container);
        this.modalContent = ensureElement<HTMLElement>('.modal__content', container);

        this.closeButton.addEventListener('click', this.close.bind(this));
        this.container.addEventListener('click', this.close.bind(this));
        this.modalContent.addEventListener('click', (event) => event.stopPropagation());
    }

    //установка значения в модальном окне
    set content(value: HTMLElement) {
        this.modalContent.replaceChildren(value);
    }

    //открытие модального окна
    open() {
        this.container.classList.add('modal_active');
        this.events.emit('modal:open');
    }

    //закрытие модального окна
    close() {
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
