import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/Contact";
import {TeamInfo} from "../models/TeamInfo";

@Injectable({
  providedIn: 'root'
})
export class TeamInfoService {

  private apiUrlUser: string;
  private apiUrlAdmin: string;

  constructor(private http: HttpClient) {
    this.apiUrlUser = 'http://localhost:8081/api/user/teamInfo';
    this.apiUrlAdmin = 'http://localhost:8081/api/admin';
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error('No auth token found');
      return new HttpHeaders();
    }
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  public getAllTeam():Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/getAll`, { headers: this.getHeaders() });
  }

  public saveMembreOfTeam(teamInfo:TeamInfo): Observable<any> {
    return this.http.post<any>(`${this.apiUrlAdmin}/saveMembreOfTeam`,teamInfo, { headers: this.getHeaders() });
  }

}
