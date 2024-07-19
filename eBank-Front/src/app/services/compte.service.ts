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
    return this.http.get<any>(`${this.apiUrl}/logInCompte/${numeroCompte}/${mot_de_pass}`).pipe(
      catchError(this.gererErreur)
    );
  }

  private gererErreur(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur inconnue s\'est produite';
    if (error.status === 404) {
      errorMessage = 'Compte non trouvé';
    } else if (error.status === 401) {
      errorMessage = 'Mot de passe incorrect';
    }
    return throwError(() => new Error(errorMessage));
  }

  public fermeCompte(numeroCompte: string | undefined, raison: string | undefined): Observable<CompteFerme> {
    return this.http.post<CompteFerme>(`${this.apiUrl}/fermeCompte/${numeroCompte}/${raison}`,{});
  }
  public ajouterBeneficiaire(numeroCompte: string,numeroCompteBeneficiaire: string): Observable<Beneficiaire> {
    return this.http.post<Beneficiaire>(`${this.apiUrl}/ajouterBeneficiaire/${numeroCompte}/${numeroCompteBeneficiaire}`,{});
  }
  public supprimerBeneficiaire(numeroCompte: string,numeroCompteBeneficiaire: string): Observable<Beneficiaire> {
    return this.http.delete<Beneficiaire>(`${this.apiUrl}/supprimerBeneficiaire/${numeroCompte}/${numeroCompteBeneficiaire}`,{});
  }

}
