import {Compte} from "./Compte";

export class Banque {
  idBanque?: number;
  nomBanque: string | undefined;
  adress: string | undefined;
  telephone: string | undefined;
  email: string|undefined;
  comptes ?: [Compte];


  constructor(data?: Partial<Banque>) {
    if (data) {
      this.idBanque = data.idBanque;
      this.nomBanque = data.nomBanque;
      this.adress = data.adress;
      this.telephone = data.telephone;
      this.email = data.email;
    }
  }
}
