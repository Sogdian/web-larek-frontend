import {Api, ApiListResponse} from './base/api';
import {ICard} from '../types';

export interface ILarekAPI {
    getProduct: (id: string) => Promise<ICard>;
    getProductList: () => Promise<ICard[]>;
}

export class LarekAPI extends Api implements ILarekAPI {
    //API_ORIGIN
    readonly cdn: string;

    constructor(cdn: string, baseUrl: string, options?: RequestInit) {
        super(baseUrl, options);
        this.cdn = cdn;
    }

    //получение товара
    getProduct(id: string): Promise<ICard> {
        return this.get(`/product/${id}`)
            .then((item: ICard) => ({
            ...item,
            image: this.cdn + item.image,
        }));
    }

    //получение списка товаров
    getProductList(): Promise<ICard[]> {
        return this.get('/product')
            .then((data: ApiListResponse<ICard>) =>
            data.items.map((item) => ({
                ...item,
                image: this.cdn + item.image,
            }))
        );
    }
}
