import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Event} from "../models/Event";
import {EventService} from "../Services/event.service";
import {MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {
  MatDatepicker,
  matDatepickerAnimations,
  MatDatepickerInput, MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {FormsModule, NgModel} from "@angular/forms";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {TicketService} from "../Services/ticket.service";
import {Ticket} from "../models/Ticket";
import {Router} from "@angular/router";
import {routes} from "../app.routes";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatCardHeader,
    MatCardContent,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  events: Event[]=[];
  idUser:number=6;
  ticket : Ticket={
    event_id: 0, id: 0, purchaseDate: undefined, user_id: this.idUser
  };
  searchDate: Date | null=null;
  searchCategory: string = '';
  searchLocation: string = '';

  constructor(
    private eventService: EventService,
    private ticketService: TicketService,
    private route:Router
  ) {}

  ngOnInit(): void {
    this.GetEvents();
  }

  reserveTicket(id: number | undefined) {
    const token = localStorage.getItem("jwt");
    if (token)
    {
      this.ticket.event_id=id;
      this.ticketService.saveTicket(this.ticket).subscribe(data=>{
        console.log(data);
      });
    }
    else{
      this.route.navigateByUrl("/logIn");
    }
  }

  GetEvents(){
    this.eventService.getAllEventsUser().subscribe(data => {
      if (data)
      {
        console.log("succes")
      }
      else {
        console.log("erreur")
      }
      this.events = data;
    });
  }

  filterEvents() {
      if(this.searchDate!=null&&this.searchCategory==''&&this.searchLocation=='')
      {
        const year = this.searchDate.getFullYear();
        const month = String(this.searchDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
        const day = String(this.searchDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`; // Form

        this.eventService.searchByDate(formattedDate).subscribe(data => {
          this.events = data;
        });
      }
      else if (this.searchCategory!=''&&this.searchDate==null&&this.searchLocation=='')
      {
        this.eventService.searchByCategory(this.searchCategory).subscribe(data => {
          this.events = data;
        });
      }
      else if(this.searchLocation!=''&&this.searchCategory==''&&this.searchDate==null){
        this.eventService.searchByLocation(this.searchLocation).subscribe(data => {
          this.events = data;
        });
      }
  }
}
