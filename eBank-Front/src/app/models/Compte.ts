import {Carte} from "./Carte";
import {Beneficiaire} from "./Beneficiaire";

export class Compte {
  numeroCompte?: String;
  typeCompte: string | undefined;
  solde: number | undefined;
  dateOuverture: string | undefined;
  motDePass: number|undefined;
  estFerme: boolean|undefined;
  idBanque?:number;
  cartes ?: [Carte];
  beneficiaires?:[Beneficiaire];


  constructor(data?: Partial<Compte>) {
    if (data) {
      this.numeroCompte = data.numeroCompte;
      this.typeCompte = data.typeCompte;
      this.solde = data.solde;
      this.dateOuverture = data.dateOuverture;
      this.motDePass = data.motDePass;
      this.estFerme = data.estFerme;
      this.idBanque=data.idBanque;
    }
  }
}
