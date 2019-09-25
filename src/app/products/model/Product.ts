import { Category } from 'src/app/categories/model/Category';

export class Product {
    productID: number;
    productName: string;
    categoryID: number;
    quantityPerUnit: string;
    unitsInStock: number;
    unitPrice: number;
    categories: Category[];
}
