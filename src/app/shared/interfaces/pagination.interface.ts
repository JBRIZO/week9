export interface Pagination {
  currentPage: number;
  from: number | null;
  lastPage: number;
  perPage: number;
  to: number;
  total: number;
}
