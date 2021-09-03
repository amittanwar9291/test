import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class RotatorTranslations {
  findingType: DropdownModel[];
  degeneration: string;
  trauma: string;
  inflammation: string;
  complete: string;
  partialLesions: string;
  supraspinatus: string;
  subscapularis: string;
  infraspinatus: string;
  teresMinor: string;
  tendonDegeneration: string;
  partialThicknessTear: string;

  constructor() {
    this.findingType = [];
    this.degeneration = 'Deg';
    this.trauma = 'Tra';
    this.inflammation = 'Ent';
    this.complete = 'voll Läs.';
    this.partialLesions = 'Part.';
    this.supraspinatus = 'SSP';
    this.subscapularis = 'SSC';
    this.infraspinatus = 'ISP';
    this.teresMinor = 'TM';
    this.tendonDegeneration = 'DEG';
    this.partialThicknessTear = 'Teil';
  }
}
