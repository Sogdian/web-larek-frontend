export class Product extends Model<IProduct> {
    id: string;
    category: Category;
    title: string;
    description: string;
    image: string;
    price: number | null;
    selected: boolean;
}