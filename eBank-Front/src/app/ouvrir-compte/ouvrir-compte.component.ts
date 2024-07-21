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

  account : Compte= {
    dateOuverture: undefined,
    estFerme: undefined,
    idBanque: undefined,
    motDePass: undefined,
    solde: undefined,
    typeCompte: undefined,
    user_id: undefined
  };
  public message: string ="";
  constructor(
    private compteService: CompteService,
    private router: Router
  ) {}


  ouvrirCompte(): void {
    this.account.user_id=1;
    this.account.idBanque=5;
    this.compteService.ouvrirCompte(this.account).subscribe((compte) => {
      if (compte)
      {
        this.message="le compte est ouvrit avec succées";
      }
      else {
        this.message="le compte n' était pas ouvrit !! contactez nous pour plus d' information";
      }
    });
  }

  ngOnInit(): void {

  }
}
