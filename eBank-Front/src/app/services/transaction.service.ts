import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Compte} from "../models/Compte";
import {Observable} from "rxjs";
import {Transaction} from "../models/Transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081/compte/cart/transaction';
  }
  public effectuerTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}`,transaction);
  }
  public getAllTransactionByNumeroCompte(numeroCompte: string): Observable<Transaction[]> {
    return this.http.post<Transaction[]>(`${this.apiUrl}/getAllByNumeroCompte/${numeroCompte}`, {});
  }
}
