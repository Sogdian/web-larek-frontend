// import './scss/styles.scss';
// import { API_URL, CDN_URL } from './utils/constants';
// import * as events from "events";
// import {EventEmitter} from "./components/base/events";
// import {data} from "autoprefixer";
//
// interface IBasketModel {
//     items: Map<string, number>;
//     add(id: string): void;
//     remove(id: string): void;
// }
//
// interface IEventEmitter {
//     emit: (events: string, data: unknown) => void
// }
//
// class BasketModel implements IBasketModel {
//     constructor(protected events: IEventEmitter) {}
//
//     add(id: string): void {
//         //
//         this._changed();
//     }
//
//     remove(id: string) {
//         //
//         this._changed();
//     }
//
//     protected _changed() {
//         this.events.emit('basket: change', { items: Array.from((this.items.key()))});
//     }
// }
//
// const events = new EventEmitter();
//
// const basket = new BasketModel(events);
//
// events.on('basket: change', (data: { items: string[]}) => {
//     //
// })
//
//
// interface IProduct {
//     id: string;
//     title: string;
// }
//
// interface CatalogModel {
//     items: IProduct[];
//     setItems(items: IProduct[]): void; //чтобы установить после загрузки из апи
//     getItems(items: string): IProduct; //чтобы получить при рендере списка
// }
//
// interface IViewConstructor {
//     new (container: HTMLElement, events?: IEventEmitter): IView; //на входе контейнер, в него будем выводить
// }
//
// interface IView {
//     render(data?: object): HTMLElement; //устанавливаем данные, возвращаем контейнер
// }
//
//
// class BasketItemView implements IView {
//     //элементы внутри контейнера
//     protected title: HTMLSpanElement;
//     protected addButton: HTMLButtonElement;
//     protected removeButton: HTMLButtonElement;
//
//     //данные, которые хотим сохранить на будущее
//     protected id: string | null = null;
//
//     constructor(protected container: HTMLElement, protected events: IEventEmitter) {
//         //инициализировать, чтобы не искать повторно
//         this.title = container.querySelector('.basket-item__title') as HTMLSpanElement;
//         this.addButton = container.querySelector('.basket-item__add') as HTMLButtonElement;
//         this.removeButton = container.querySelector('.basket-item__remove') as HTMLButtonElement;
//
//         //устанавливаем события
//         this.addButton.addEventListener('click', () => {
//             //генерируем событие в нашем брокере
//             this.events.emit('ui:basket-add', {id: this.id});
//         });
//
//         this.removeButton.addEventListener('click', () => {
//             //генерируем событие в нашем брокере
//             this.events.emit('ui:basket-remove', {id: this.id});
//         });
//     }
//
//     render(data: {id: string, title: string}) {
//         if(data) {
//             //если есть новые данные, то запомним их
//             this.id = data.id;
//             //и выведем в интерфейс
//             this.title.textContent = data.title;
//         }
//         return this.container;
//     }
// }
//
// class BasketView implements IView {
//     constructor(protected container: HTMLElement) {}
//     render(data: {items: HTMLElement[]}) {
//         if(data) {
//             this.container.replaceChildren(...data.items)
//         }
//         return this.container;
//     }
// }
//
// //инициализация
// const api = new ShopAPI();
// const events = new EventEmitter();
// const basketView = new BasketView(document.querySelector('.basket'));
// const basketModel = new BasketModel(events);
// const catalogModel = new CatalogModel(events);
//
// //можно собрать в функцию или классы отдельные экраны с логикой их формирования
// function renderBasket(item: string[]) {
//     basketView.render(
//         item.map(id => {
//             const itemView = new BasketItemView(events);
//             return itemView.render(catalogModel.getProduct(id));
//         })
//     );
// }
//
// //при изменении рендерим
// events.on('basket:change', (event: { items: string[]}) => {
//     renderBasket(event.items);
// });
//
// //при действиях изменяем модель, а после этого случится рендер
// events.on('ui:basket-add', (event: {id: string }) => {
//     basketModel.add(event.id);
// });
//
// events.on('ui:basket-remove', (event: {id: string }) => {
//     basketModel.remove(event.id);
// });
//
// //подгружаем начальные данные и запускаем процессы
// api.getCatalog()
//     .then(catalogModel.setItems.bind(catalogModel))
//     .catch(err => console.error((err)));
