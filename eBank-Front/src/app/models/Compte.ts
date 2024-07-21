import {Carte} from "./Carte";
import {Beneficiaire} from "./Beneficiaire";
import {Banque} from "./Banque";
import {User} from "./User";

export class Compte {
  numeroCompte?: string;
  typeCompte: string | undefined;
  solde: number | undefined;
  dateOuverture: string | undefined;
  motDePass: number|undefined;
  estFerme: boolean|undefined;
  user_id: number|undefined;
  idBanque: number|undefined;
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
      this.user_id=data.user_id;
      this.idBanque=data.idBanque;
    }
  }
}
