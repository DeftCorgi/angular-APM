import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private productUrl:string = 'api/products/products.json';

    constructor(private httpClient: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data)),
            catchError(this.handleError))

        );
    }

    handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent){
        errorMessage = 'An error occured ${erro.error.message}'
      } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }

      console.error(errorMessage);
      return throwError(errorMessage);
    }
}