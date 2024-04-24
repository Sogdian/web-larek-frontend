export abstract class Component<T> {
    protected constructor(protected readonly container: HTMLElement) {}

    //Установить текстовое содержимое
    protected setText(element: HTMLElement, value: string) {
        if (element) {
            element.textContent = value;
        }
    }

    //Установить изображение с альтернативным текстом
    protected setImage(element: HTMLImageElement, src: string, alt?: string) {
        if (element) {
            element.src = src;
            if (alt) {
                element.alt = alt;
            }
        }
    }

    //Вернуть корневой DOM-элемент
    render(data?: Partial<T>): HTMLElement {
        Object.assign(this as object, data ?? {});
        return this.container;
    }
}
