import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../model/task";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private task: Task;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:8889/api/task');
  }

  create(task: Task): Observable<Task>{
    return this.http.post<Task>('http://localhost:8889/api/task', task);
  }

  get(id: string): Observable<Task> {
    return this.http.get<Task>('http://localhost:8889/api/task/' + id);
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>('http://localhost:8889/api/task', task);
  }

  delete(id: string): Observable<Task> {
    return this.http.delete<Task>('http://localhost:8889/api/task/' + id);
  }

  getAllByCategory(category: Category): Observable<Task[]> {
    return this.http.post<Task[]>('http://localhost:8889/api/task/category', category);
  }

}
