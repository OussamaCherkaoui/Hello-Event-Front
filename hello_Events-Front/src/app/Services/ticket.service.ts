import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contact} from "../models/Contact";
import {Observable} from "rxjs";
import {Ticket} from "../models/Ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiUrl: string;
  private apiUrlAdmin: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:8081/api/user/ticket';
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


  public saveTicket(ticket:Ticket): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`,ticket, { headers: this.getHeaders() });
  }

  public getAllTicketById(id:number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllByIdUser/${id}`, { headers: this.getHeaders() });
  }

  public getAllTickets():Observable<any> {
    return this.http.get<any>(`${this.apiUrlAdmin}/getAllTickets`, { headers: this.getHeaders() });
  }

}
