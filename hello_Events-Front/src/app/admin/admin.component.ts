import {Component, OnInit} from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {
  MatCardContent,
  MatCardHeader,
  MatCardModule,
} from "@angular/material/card";
import {NgForOf, NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule} from "@angular/forms";
import {MatNativeDateModule} from "@angular/material/core";
import {Event} from "../models/Event";
import {EventService} from "../Services/event.service";
import {TicketService} from "../Services/ticket.service";
import {AuthentificationService} from "../Services/authentification.service";
import {ContactService} from "../Services/contact.service";
import {User} from "../models/User";
import {Contact} from "../models/Contact";
import {Ticket} from "../models/Ticket";

@Component({
  selector: 'app-admin',
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
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  events: Event[]=[];
  users: User[]=[];
  contacts: Contact[]=[];
  tickets: Ticket[]=[];

  constructor(
    private eventService: EventService,
    private ticketService: TicketService,
    private userService: AuthentificationService,
    private contactService:ContactService
  ) {}

  ngOnInit(): void {
    this.GetEvents();
    this.GetUsers();
  }

  GetEvents(){
    this.eventService.getAllEventsAdmin().subscribe(data => {
      this.events = data;
    });
  }
  GetTickets(){
    this.ticketService.getAllTickets().subscribe(data => {
      this.tickets = data;
    });
  }
  GetUsers(){
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
    GetContacts(){
    this.contactService.getAllContact().subscribe(data => {
      this.contacts = data;
    });
  }

  updateEvent(event: Event) {

  }

  deleteEvent(id: number | undefined) {

  }

  deleteUser(idUser: number | undefined) {

  }
}
