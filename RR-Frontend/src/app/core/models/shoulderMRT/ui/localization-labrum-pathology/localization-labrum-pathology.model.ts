import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class LocalizationLabrumPathology extends EnumBase {
  superior: boolean;
  anterosuperior: boolean;
  anteroinferior: boolean;
  inferior: boolean;
  posteroinferior: boolean;
  posterosuperior: boolean;

  constructor() {
    super();

    this.superior = false;
    this.anterosuperior = false;
    this.anteroinferior = false;
    this.inferior = false;
    this.posteroinferior = false;
    this.posterosuperior = false;
  }
}
