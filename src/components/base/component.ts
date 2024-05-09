/**
 * Класс обеспечивает методами для работы с DOM.
 * Его функции: устанавливать данные в компонентах, а также отрисовывать их
 */
export abstract class Component<T> {
    protected constructor(protected readonly container: HTMLElement) {}

    //переключить класс
    toggleClass(element: HTMLElement, className: string, force?: boolean) {
        element.classList.toggle(className, force);
    }

    //установить текстовое содержимое
    protected setText(element: HTMLElement, value: string) {
        if (element) {
            element.textContent = value;
        }
    }

    //сменить статус блокировки
    setDisabled(element: HTMLElement, state: boolean) {
        if (element) {
            if (state) element.setAttribute('disabled', 'disabled');
            else element.removeAttribute('disabled');
        }
    }

    //скрыть компонент
    protected setHidden(element: HTMLElement) {
        element.style.display = 'none';
    }

    //показать компонент
    protected setVisible(element: HTMLElement) {
        element.style.removeProperty('display');
    }

    //установить изображение с альтернативным текстом
    protected setImage(element: HTMLImageElement, src: string, alt?: string) {
        if (element) {
            element.src = src;
            if (alt) {
                element.alt = alt;
            }
        }
    }

    //вернуть корневой DOM-элемент
    render(data?: Partial<T>): HTMLElement {
        Object.assign(this as object, data ?? {});

        return this.container;
    }
}
