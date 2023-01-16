import { ICategory } from "./category.model";

export interface IProduct {
    title: string;
    price: number;
    description: string;
    images: string [];
    category: ICategory;
    categoryId: number;
}