export abstract class Component<T> {
    protected constructor(protected readonly container: HTMLElement) {}

    //переключить класс
    toggleClass(element: HTMLElement, className: string, force?: boolean)

    //установить текстовое содержимое
    protected setText(element: HTMLElement, value: string)

    //сменить статус блокировки
    setDisabled(element: HTMLElement, state: boolean)

    //скрыть компонент
    protected setHidden(element: HTMLElement)

    //показать компонент
    protected setVisible(element: HTMLElement)

    //установить изображение с альтернативным текстом
    protected setImage(element: HTMLImageElement, src: string, alt?: string)

    //вернуть корневой DOM-элемент
    render(data?: Partial<T>): HTMLElement
}
