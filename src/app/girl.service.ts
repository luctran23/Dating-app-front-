import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Girl } from '../models/girl';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GirlService {
  private girlUrl = "http://localhost:3000/girls";

  constructor(private http: HttpClient) { }

  getAllGirls(): Observable<Girl[]> {
    return this.http.get<Girl[]>(this.girlUrl).pipe(
      tap(results => console.log(`results: = ${JSON.stringify(results)}`)),
      
    );
  }
}
