import {IEvents} from './events';

export abstract class Model<T> {
    protected constructor(data: Partial<T>, protected events: IEvents)

    //сообщить всем что модель поменялась
    emitChanges(event: string, payload?: object)
}
