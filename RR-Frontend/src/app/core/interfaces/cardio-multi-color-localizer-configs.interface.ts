import { ColorsEnum } from '@enums/cardioMRT/left-ventricle/colors.enum';

export interface ICardioMultiColorLocalizerConfig {
  [key: string]: number[];
}

export interface ICardioColorPickerConfig {
  sectionType: string;
  sectionTypeTranslationKey: string;
  color: ColorsEnum;
  rrID: string;
}

export interface ICardioMultiColorEditorConfig {
  headerTranslationKey: string;
  headerRrID: string;
  instructionTranslationKey: string;
  instructionRrID: string;
  localizerRrID: string;
  showVessels: boolean;

  colorPickerConfig: ICardioColorPickerConfig[];
}
