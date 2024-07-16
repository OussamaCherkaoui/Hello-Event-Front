
export class CarteBloque {
  idCarteBloque?: number;
  raison: string | undefined;
  dateBlocage: string|undefined;
  numeroCarte: string|undefined;


  constructor(data?: Partial<CarteBloque>) {
    if (data) {
      this.idCarteBloque = data.idCarteBloque;
      this.raison = data.raison;
      this.dateBlocage = data.dateBlocage;
      this.numeroCarte = data.numeroCarte;
    }
  }
}
