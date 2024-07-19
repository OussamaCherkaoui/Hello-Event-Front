import {Compte} from "../models/Compte";
import {CompteService} from "../services/compte.service";
import {FormsModule} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-ouvrir-compte',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './ouvrir-compte.component.html',
  styleUrl: './ouvrir-compte.component.css'
})
export class OuvrirCompteComponent implements OnInit{

  constructor(
    private compteService: CompteService,
    private router: Router
  ) {}

  public account = {
    typeCompte: '',
    solde: null,
    motDePass: null,
    user: {
      user_id:1
    },
    banque: {
      idBanque:5
    }
  }

  ouvrirCompte(): void {

    this.compteService.ouvrirCompte(this.account).subscribe(() => {
    });
  }

  ngOnInit(): void {

  }
}
