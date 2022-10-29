import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryList } from '../interfaces/categorylist.interface';

@Injectable()
export class CategoryService {
  private readonly url =
    'https://trainee-program-api-staging.applaudostudios.com/api/v1/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<CategoryList> {
    return this.http.get<CategoryList>(`${this.url}`);
  }
}
