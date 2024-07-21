import {Component, OnInit} from '@angular/core';
import {Compte} from "../models/Compte";
import {CompteService} from "../services/compte.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmDeleteComponent} from "../confirm-delete/confirm-delete.component";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Beneficiaire} from "../models/Beneficiaire";
import {Carte} from "../models/Carte";
import {CarteService} from "../services/carte.service";
import {LoginCartComponent} from "../login-cart/login-cart.component";

@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    LoginCartComponent
  ],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent implements OnInit  {
  numeroCompteBeneficiaire: string|undefined;
  numeroCompte:string='184872323454196311377570';
  message!:string;
  beneficiaries: Beneficiaire[]=[];
  cartes: Carte[]=[];
  showModal = false;
  selectedNumeroCarte: string='' ;
  messageConnectCart!:string;

  constructor(
    private modalService: NgbModal,
    private compteService: CompteService,
    private carteService:CarteService,
    private router: Router
  ) {}
  ngOnInit(): void {
     this.loadBeneficiaries();
     this.GetCartes(this.numeroCompte);
  }

  loadBeneficiaries(): void {
    this.compteService.getAllBeneficiairesByNumeroCompte(this.numeroCompte).subscribe(
      beneficiaires => {
        this.beneficiaries = beneficiaires;
      }
    );
  }
  GetCartes(numeroCompte: string){
    this.carteService.getCartes(numeroCompte).subscribe(data => {
      this.cartes = data;
    });
  }

  ajouterBeneficiaire():void{
    this.compteService.ajouterBeneficiaire(this.numeroCompte,this.numeroCompteBeneficiaire).subscribe((result)=>{
      if(result){
        this.message="Beneficiaire ajoutée avec succées";
      }
    });
  }

  supprimerBeneficiaire(numeroBeneficiaire: string | undefined):void{
    this.compteService.supprimerBeneficiaire(this.numeroCompte,numeroBeneficiaire).subscribe((result)=>{
      if(result){
        this.message="Beneficiaire supprimée avec succées";
      }
    });
  }

  openConfirmDelete() {
    const modalRef = this.modalService.open(ConfirmDeleteComponent);
    modalRef.componentInstance.numeroCompte = this.numeroCompte;

    modalRef.result.then((result) => {
      if (result) {
        console.log('Raison:', result.raison);
        console.log('Numéro de compte:', result.numeroCompte);
        this.compteService.fermeCompte(result.numeroCompte,result.raison).subscribe(() => {});
        }
    }).catch((error) => {
      console.error('Erreur lors de la suppression', error);
    });
  }

  ouvrirModal(numeroCarte: string): void {
    this.selectedNumeroCarte = numeroCarte;
    this.showModal = true;
    this.messageConnectCart = '';
  }

  seConnecter(event: { numeroCarte: string, codePin: number }): void {
    this.carteService.connectCart(event.numeroCarte,event.codePin).subscribe((result)=>{
      if(result){
        this.router.navigate(['/compte/cart']);
      }
      else{
        this.messageConnectCart="Code Pin Incorrect";
      }
    });
  }
}
