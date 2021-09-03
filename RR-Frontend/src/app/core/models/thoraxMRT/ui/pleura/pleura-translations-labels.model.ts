import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class PleuraTranslationsLabelsModel {
  findingTypes: DropdownModel[];
  right: string;
  left: string;
  median: string;
  pleuralMass: string;
  chestWallSoftTissueMass: string;
  upperAbdomenLiverGallBladder: string;
  upperAbdomenPancreas: string;
  upperAbdomenKidneyAdrenalGland: string;
  upperAbdomenSpleenLymphNodesHernia: string;
  upperAbdomenAscites: string;

  constructor() {
    this.findingTypes = [];
    this.right = 'right';
    this.left = 'left';
    this.median = 'median';
    this.pleuralMass = 'Pleural mass';
    this.chestWallSoftTissueMass = 'Chest wall, soft tissue mass';
    this.upperAbdomenLiverGallBladder = 'Upper abdomen, liver/gall bladder';
    this.upperAbdomenPancreas = 'Upper abdomen, pancreas';
    this.upperAbdomenKidneyAdrenalGland = 'Upper abdomen, kidney/adrenal gland';
    this.upperAbdomenSpleenLymphNodesHernia = 'Upper abdomen, spleen/lymph nodes/hiatus hernia';
    this.upperAbdomenAscites = 'Upper abdomen, Aszites';
  }
}
