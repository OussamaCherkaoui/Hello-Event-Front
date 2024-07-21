import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Compte} from "../models/Compte";
import {Observable} from "rxjs";
import {Carte} from "../models/Carte";
import {CarteBloque} from "../models/CarteBloque";

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081/compte/cart';
  }
  public creerCart(numeroCompte: string, typeCarteAdd: string): Observable<Carte> {
    return this.http.post<Carte>(`${this.apiUrl}/creerCart/${numeroCompte}/${typeCarteAdd}`,{});
  }
  public activerCart(numeroCarte: string|undefined): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/activerCart/${numeroCarte}`,{});
  }
  public desactiverCart(numeroCarte: string | undefined): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/desactiverCart/${numeroCarte}`,{});
  }
  public bloqueCart(numeroCarte: string,raison: string): Observable<CarteBloque> {
    return this.http.post<CarteBloque>(`${this.apiUrl}/bloqueCart/${numeroCarte}/${raison}`,{});
  }
  public getPinCart(numeroCarte: string | undefined): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/getPin/${numeroCarte}`,{});
  }
  public connectCart(numeroCarte: string,codePin: number): Observable<Carte> {
    return this.http.get<Carte>(`${this.apiUrl}/connectCart/${numeroCarte}/${codePin}`);
  }

  public getCartes(numeroCompte:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllCarte/${numeroCompte}`,{});
  }
}
