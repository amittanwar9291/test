export class DetailsHematomalAndAbscessLocalizationModel {
  isBasins: boolean;
  isBasinsVentral: boolean;
  isBasinsLateral: boolean;
  isBasinsDorsal: boolean;
  isThigh: boolean;
  isThighVentral: boolean;
  isThighDorsal: boolean;
  isThighMedia: boolean;
  thighMaxDiameterInMm: number;

  constructor() {
    this.isBasins = false;
    this.isBasinsVentral = false;
    this.isBasinsLateral = false;
    this.isBasinsDorsal = false;
    this.isThigh = false;
    this.isThighVentral = false;
    this.isThighDorsal = false;
    this.isThighMedia = false;
    this.thighMaxDiameterInMm = null;
  }
}
