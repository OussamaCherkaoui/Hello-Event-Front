export class Transaction {
  idTransaction?: number;
  montant: number | undefined;
  dateTransaction: string | undefined;
  typeTransaction: string | undefined;
  description: number|undefined;
  estFerme: boolean|undefined;
  numeroCarte?: string;
  numeroCompte?: string;


  constructor(data?: Partial<Transaction>) {
    if (data) {
      this.idTransaction = data.idTransaction;
      this.montant = data.montant;
      this.dateTransaction = data.dateTransaction;
      this.typeTransaction = data.typeTransaction;
      this.description = data.description;
      this.estFerme = data.estFerme;
      this.numeroCarte = data.numeroCarte;
      this.numeroCompte = data.numeroCompte;
    }
  }
}
