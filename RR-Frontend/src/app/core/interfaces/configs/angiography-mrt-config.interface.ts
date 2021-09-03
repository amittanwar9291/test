import { IModuleConfigBase } from './module-config-base.interface';

export interface IAngiographyMrtConfig extends IModuleConfigBase {
  abdomen: string;
  anamnesis: string;
  aorta: string;
  summary: string;
  localization: string;
  pelvisLegArteries: string;
  supraaorticVessels: string;
  technology: string;
  upperArteries: string;
}
