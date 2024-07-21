export class Transaction {
  idTransaction?: number;
  montant!: number;
  dateTransaction: string | undefined;
  typeTransaction: string | undefined;
  description: string|undefined;
  estFerme: boolean|undefined;
  numeroCarte: string|undefined;
  numeroCompte: string|undefined;


  constructor(data?: Partial<Transaction>) {
    if (data) {
      this.idTransaction = data.idTransaction;
      this.montant = 0;
      this.dateTransaction = data.dateTransaction;
      this.typeTransaction = data.typeTransaction;
      this.description = data.description;
      this.estFerme = data.estFerme;
      this.numeroCarte = data.numeroCarte;
      this.numeroCompte = data.numeroCompte;
    }
  }
}
