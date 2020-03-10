import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Priority} from "../model/priority";

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Priority[]> {
    return this.http.get<Priority[]>('http://localhost:8889/api/priority');
  }

  create(priority: Priority):Observable<Priority>{
    return this.http.post<Priority>('http://localhost:8889/api/priority', priority);
  }

  get(id: string): Observable<Priority> {
    return this.http.get<Priority>('http://localhost:8889/api/priority/' + id);
  }

  update(priority: Priority): Observable<Priority> {
    return this.http.put<Priority>('http://localhost:8889/api/priority', priority);
  }

  delete(id: string): Observable<Priority> {
    return this.http.delete<Priority>('http://localhost:8889/api/priority/' + id);
  }
}
