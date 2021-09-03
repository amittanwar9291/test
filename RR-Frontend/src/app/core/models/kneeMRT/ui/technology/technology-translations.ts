import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class TechnologyTranslations {
  saturatedFat: string;
  triDimensional: string;
  metalSequence: string;
  sequenceType: DropdownModel[];
  axialShort: string;
  coronarShort: string;
  saggitalShort: string;

  constructor() {
    this.saturatedFat = 'Sat';
    this.triDimensional = '3D';
    this.metalSequence = 'Met';
    this.sequenceType = [];
    this.axialShort = 'Axi';
    this.coronarShort = 'Cor';
    this.saggitalShort = 'Sag';
  }
}
