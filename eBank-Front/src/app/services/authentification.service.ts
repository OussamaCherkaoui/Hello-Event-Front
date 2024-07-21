import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Carte} from "../models/Carte";
import {User} from "../models/User";
import {AuthenticationRequest} from "../models/AuthenticationRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081/authentification';
  }

  public register(user:User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`,user);
  }
  public login(authRequest: AuthenticationRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, authRequest, { headers, responseType: 'text' as 'json' }) as Observable<any>;
  }
}
