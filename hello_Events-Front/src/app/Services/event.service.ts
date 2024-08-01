import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  public getAllEvents():Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/getAll`);
  }

  public saveEvent(event:Event): Observable<any> {
    return this.http.post<any>(`${this.apiUrlAdmin}/addEvent`,event);
  }

  public updateEvent(event:Event): Observable<any> {
    return this.http.put<any>(`${this.apiUrlAdmin}/update`,event);
  }

  public deleteEvent(id:number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrlAdmin}/delete/${id}`);
  }

  public searchByDate(date:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/searchByDate/${date}`);
  }

  public searchByLocation(location:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/searchByLocation/${location}`);
  }

  public searchByCategory(category:string):Observable<any> {
    return this.http.get<any>(`${this.apiUrlUser}/searchByCategory/${category}`);
  }

}
