import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouletteService {
  private apiUrl = 'http://localhost:3000'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  spinWheel(): Observable<{ result: number }> {
    return this.http.post<{ result: number }>(`${this.apiUrl}/spin`, {});
  }
}
