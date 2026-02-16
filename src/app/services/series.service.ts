import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {  
  private http = inject(HttpClient);
  private url = 'https://peticiones.online/api/series';

  getAll(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  create(payload: any): Observable<any> {
    return this.http.post<any>(this.url, payload);
  }
}