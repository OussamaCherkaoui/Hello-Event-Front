import {Transaction} from "./Transaction";

export class Carte {
  numeroCarte?: String;
  codePin: Number | undefined;
  solde: number | undefined;
  dateExpiration: string | undefined;
  typeCarte: string|undefined;
  etat: string|undefined;
  estBloque: boolean|undefined;
  transactions ?: [Transaction];


  constructor(data?: Partial<Carte>) {
    if (data) {
      this.numeroCarte = data.numeroCarte;
      this.codePin = data.codePin;
      this.solde = data.solde;
      this.dateExpiration = data.dateExpiration;
      this.typeCarte = data.typeCarte;
      this.etat = data.etat;
      this.estBloque = data.estBloque;
    }
  }
}
