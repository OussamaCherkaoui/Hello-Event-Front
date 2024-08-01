import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  public saveTicket(ticket:Ticket): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`,ticket);
  }

  public getAllTicketById(id:number):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllByIdUser/${id}`);
  }

  public getAllTickets():Observable<any> {
    return this.http.get<any>(`${this.apiUrlAdmin}/getAllTickets`);
  }

}
