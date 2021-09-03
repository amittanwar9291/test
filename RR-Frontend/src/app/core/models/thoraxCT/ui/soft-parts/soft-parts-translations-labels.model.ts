import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

export class SoftPartsTranslationsLabelsModel {
  findingTypes: DropdownModel[];
  right: string;
  left: string;
  median: string;
  PleuralMass: string;
  ChestWallSoftTissueMass: string;
  UpperAbdomenLiverGallBladder: string;
  UpperAbdomenPancreas: string;
  UpperAbdomenKidneyAdrenalGland: string;
  UpperAbdomenSpleenLymphNodesHiatusHernia: string;

  constructor() {
    this.findingTypes = [];
    this.right = 'right';
    this.left = 'left';
    this.median = 'median';
    this.PleuralMass = 'Pleural mass';
    this.ChestWallSoftTissueMass = 'Chest wall, soft tissue mass';
    this.UpperAbdomenLiverGallBladder = 'Upper abdomen, liver/gall bladder';
    this.UpperAbdomenPancreas = 'Upper abdomen, pancreas';
    this.UpperAbdomenKidneyAdrenalGland = 'Upper abdomen, kidney/adrenal gland';
    this.UpperAbdomenSpleenLymphNodesHiatusHernia = 'Upper abdomen, spleen/lymph nodes/hiatus hernia';
  }
}
