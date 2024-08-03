import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrlUser: string;
  private apiUrlAdmin: string;

  constructor(private http: HttpClient) {
    this.apiUrlUser = 'http://localhost:8081/api/user/event';
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

  public getAllEventsUser():Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/getAll`, { headers: this.getHeaders() });
  }
  public getAllEventsAdmin():Observable<any> {
    return this.http.get<any>(`${this.apiUrlAdmin}/getAllEvents`, { headers: this.getHeaders() });
  }

  public saveEvent(event:Event): Observable<any> {
    return this.http.post<any>(`${this.apiUrlAdmin}/addEvent`,event, { headers: this.getHeaders() });
  }

  public updateEvent(event:Event): Observable<any> {
    return this.http.put<any>(`${this.apiUrlAdmin}/update`,event, { headers: this.getHeaders() });
  }

  public deleteEvent(id: number | undefined): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlAdmin}/delete/${id}`, { headers: this.getHeaders() });
  }

  public searchByDate(date:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/searchByDate/${date}`, { headers: this.getHeaders() });
  }

  public searchByLocation(location:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/searchByLocation/${location}`, { headers: this.getHeaders() });
  }

  public searchByCategory(category:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/searchByCategory/${category}`, { headers: this.getHeaders() });
  }

}
