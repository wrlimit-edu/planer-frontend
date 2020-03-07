import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:8889/api/category');
  }

  create(category: Category):Observable<Category>{
    return this.http.post<Category>('http://localhost:8889/api/category', category);
  }

  get(id: number): Observable<Category> {
    return this.http.get<Category>('http://localhost:8889/api/category/' + id);
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>('http://localhost:8889/api/category', category);
  }

  delete(id: number): Observable<Category> {
    return this.http.delete<Category>('http://localhost:8889/api/category/' + id);
  }
}
