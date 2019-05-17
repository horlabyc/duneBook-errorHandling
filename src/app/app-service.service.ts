import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  base_Url = 'https://api.chucknorris.io/jokes';

  constructor(private  http: HttpClient) { }

  getJokes(): Observable<any> {
    return this.http.get(`${this.base_Url}/random`);
  }

  extractJokes() {
    this.getJokes().subscribe(res => {
      console.log(res);
    });
  }

  handleError(err) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${err.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
