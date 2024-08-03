import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {Contact} from "../models/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrlUser: string;
  private apiUrlAdmin: string;
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

  constructor(private http: HttpClient) {
    this.apiUrlUser = 'http://localhost:8081/api/user/contact';
    this.apiUrlAdmin = 'http://localhost:8081/api/admin';
  }

  public getAllContact():Observable<any> {
    return this.http.get<any>(`${this.apiUrlAdmin}/getAll-contact`, { headers: this.getHeaders() });
  }

  public saveContact(contact:Contact): Observable<any> {
    return this.http.post<any>(`${this.apiUrlUser}`,contact, { headers: this.getHeaders() });
  }

}
