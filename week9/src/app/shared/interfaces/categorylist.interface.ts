import { Category } from './category.interface';
import { Pagination } from './pagination.interface';

export interface CategoryList {
  data: Category[];
  meta?: Pagination;
}
