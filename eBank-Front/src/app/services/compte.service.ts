import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Compte} from "../models/Compte";
import {catchError, Observable, throwError} from "rxjs";
import {CompteFerme} from "../models/CompteFerme";
import {Beneficiaire} from "../models/Beneficiaire";

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081/compte';
  }
  public ouvrirCompte(compte: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signUpCompte`,compte);
  }
  public logInCompte(numeroCompte: string, mot_de_pass: number | undefined): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/logInCompte/${numeroCompte}/${mot_de_pass}`);
  }

  public fermeCompte(numeroCompte: string | undefined, raison: string | undefined): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/fermeCompte/${numeroCompte}/${raison}`,{});
  }
  public ajouterBeneficiaire(numeroCompte: string,numeroCompteBeneficiaire: string|undefined): Observable<Beneficiaire> {
    return this.http.post<Beneficiaire>(`${this.apiUrl}/ajouterBeneficiaire/${numeroCompte}/${numeroCompteBeneficiaire}`,{});
  }
  public supprimerBeneficiaire(numeroCompte: string, numeroCompteBeneficiaire: string | undefined): Observable<Beneficiaire> {
    return this.http.delete<Beneficiaire>(`${this.apiUrl}/supprimerBeneficiaire/${numeroCompte}/${numeroCompteBeneficiaire}`,{});
  }
  public getAllBeneficiairesByNumeroCompte(numeroCompte: string): Observable<any>
  {
    return this.http.get<any>(`${this.apiUrl}/getAllBeneficiaire/${numeroCompte}`);
  }
}
