import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-confirm-delete',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './confirm-delete.component.html',
  styleUrl: './confirm-delete.component.css'
})
export class ConfirmDeleteComponent implements OnInit{
  raison: string = '';
  numeroCompte: string = '';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  confirmerSuppression() {
    this.activeModal.close({ raison: this.raison, numeroCompte: this.numeroCompte });
  }
}
