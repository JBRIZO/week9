import { Pagination } from './pagination.interface';
import { Product } from './product.interface';

export interface ProductList {
  data: Product[];
  meta?: Pagination;
}
