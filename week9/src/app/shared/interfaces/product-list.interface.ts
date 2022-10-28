import { Product } from "./product.interface";

export interface ProductList {
    data : Product[];
    meta? : {
        current_page: number,
        from: number | null,
        last_page: number,
        per_page: number,
        to: number,
        total: number
    } 
}