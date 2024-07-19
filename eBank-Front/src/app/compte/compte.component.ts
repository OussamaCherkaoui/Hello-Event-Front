import {Component, OnInit} from '@angular/core';
import {Compte} from "../models/Compte";
import {CompteService} from "../services/compte.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmDeleteComponent} from "../confirm-delete/confirm-delete.component";

@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent implements OnInit  {

  constructor(
    private modalService: NgbModal,
    private compteService: CompteService,
    private router: Router
  ) {}
  ngOnInit(): void {
  }
  ajouterBeneficiaire():void{

  }
  supprimerBeneficiaire():void{

  }

  openConfirmDelete() {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.numeroCompte = '788705919902723247629585';

    modalRef.result.then((result) => {
      if (result) {
        console.log('Raison:', result.raison);
        console.log('Numéro de compte:', result.numeroCompte);
        this.compteService.fermeCompte(result.numeroCompte,result.numeroCompte).subscribe(() => {});
        }
    }).catch((error) => {
      console.error('Erreur lors de la suppression', error);
    });
  }
}
