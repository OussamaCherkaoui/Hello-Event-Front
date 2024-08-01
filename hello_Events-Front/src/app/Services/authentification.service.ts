import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";
import {AuthenticationRequest} from "../models/AuthenticationRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private apiUrl: string;
  private apiUrlAdmin: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081/api/user/ticket';
    this.apiUrlAdmin = 'http://localhost:8081/api/admin';
  }

  public register(user:User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`,user);
  }
  public login(authRequest: AuthenticationRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, authRequest, { headers, responseType: 'text' as 'json' }) as Observable<any>;
  }

  public getAllUsers():Observable<any> {
    return this.http.get<any>(`${this.apiUrlAdmin}/getAllUsers`);
  }

}
