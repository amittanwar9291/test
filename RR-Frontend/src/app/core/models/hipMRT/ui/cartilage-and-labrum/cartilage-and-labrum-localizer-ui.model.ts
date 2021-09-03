import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class CartilageAndLabrumLocalizerUiModel extends EnumBase {
  anteroinferior: boolean;
  anterosuperior: boolean;
  superior: boolean;
  posterosuperior: boolean;
  posteroinferior: boolean;
  fossaAcetabularis: boolean;

  constructor() {
    super();

    this.anteroinferior = false;
    this.anterosuperior = false;
    this.superior = false;
    this.posterosuperior = false;
    this.posteroinferior = false;
    this.fossaAcetabularis = false;
  }
}
