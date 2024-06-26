import {IEvents} from './events';

/**
 * Абстрактный класс для слоя данных. Его функции: получить данные и события, чтобы уведомлять что данные поменялись
 */
export abstract class Model<T> {
    constructor(data: Partial<T>, protected events: IEvents) {
        Object.assign(this, data);
    }

    //сообщить всем что модель поменялась
    emitChanges(event: string, payload?: object) {
        this.events.emit(event, payload ?? {});
    }
}
