import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  /**
   * Call to search by one param
   * @param {string} param Param to search
   * @param {string} value Value from search
   * @returns {Promise} Return the promise of call
   */
  searchByParam(param: string, value: string): Promise<any> {
    const params = new HttpParams().set(param, value);
    return this.http.get(this.apiUrl, { params }).pipe(
      map((response: any) => response),
      catchError((error: any) => Promise.reject(error))
    ).toPromise();
  }
}