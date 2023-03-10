import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

const endpoint = 'https://localhost:7280/api/Wallets/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GetWalletsServiceDashboard {

  constructor(private http: HttpClient) { }

  getWallets():Observable<any>{
    return this.http.get(endpoint+"getAllWalletsToDashboard",httpOptions)
    .pipe(catchError(this.handleError));
  }

  handleError(error:HttpErrorResponse) {
    return throwError(() => {
        return error;
    });
  }
}
