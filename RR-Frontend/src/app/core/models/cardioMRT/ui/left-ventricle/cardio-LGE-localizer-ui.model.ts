import { LgeLocalizerTypeEnum } from '@enums/cardioMRT/left-ventricle/lge-localizer-type.enum';

export class CardioLGELocalizerUiModel {
  trasmuralSections: number[];
  subendocardialSections: number[];
  mesocardialSections: number[];
  subepicardialSections: number[];
  pointShapedSections: number[];
  lGELocalizerType: LgeLocalizerTypeEnum;

  constructor() {
    this.trasmuralSections = [];
    this.subendocardialSections = [];
    this.mesocardialSections = [];
    this.subepicardialSections = [];
    this.pointShapedSections = [];
    this.lGELocalizerType = LgeLocalizerTypeEnum.None;
  }
}
