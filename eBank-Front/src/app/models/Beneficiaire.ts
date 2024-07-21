export class Beneficiaire {
  idBenificiaire?: number;
  numeroCompte: string | undefined;
  numeroCompteBeneficiaire: string | undefined;



  constructor(data?: Partial<Beneficiaire>) {
    if (data) {
      this.idBenificiaire = data.idBenificiaire;
      this.numeroCompte = data.numeroCompte;
      this.numeroCompteBeneficiaire = data.numeroCompteBeneficiaire;
    }
  }
}
