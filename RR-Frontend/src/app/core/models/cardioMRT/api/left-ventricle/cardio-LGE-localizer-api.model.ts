import { LgeLocalizerTypeEnum } from '@enums/cardioMRT/left-ventricle/lge-localizer-type.enum';

export class CardioLGELocalizerApiModel {
  trasmuralSections: string;
  subendocardialSections: string;
  mesocardialSections: string;
  subepicardialSections: string;
  pointShapedSections: string;
  lGELocalizerType: LgeLocalizerTypeEnum;

  constructor() {
    this.trasmuralSections = 'None';
    this.subendocardialSections = 'None';
    this.mesocardialSections = 'None';
    this.subepicardialSections = 'None';
    this.pointShapedSections = 'None';
    this.lGELocalizerType = LgeLocalizerTypeEnum.None;
  }
}
