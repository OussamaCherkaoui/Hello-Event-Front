export class CompteFerme {
  numeroCompteFerme?: number;
  dateFermeture: string | undefined;
  raison: number | undefined;
  numeroCompte: string | undefined;


  constructor(data?: Partial<CompteFerme>) {
    if (data) {
      this.numeroCompte = data.numeroCompte;
      this.numeroCompteFerme = data.numeroCompteFerme;
      this.dateFermeture = data.dateFermeture;
      this.raison = data.raison;
    }
  }
}
