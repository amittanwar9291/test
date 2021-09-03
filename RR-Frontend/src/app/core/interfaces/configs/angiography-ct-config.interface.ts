import { IModuleConfigBase } from './module-config-base.interface';

export interface IAngiographyCtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  coronaryArteries: string;
  supraaorticVessels: string;
  upperArteries: string;
  aorta: string;
  abdomen: string;
  pelvisLegArteries: string;
  softTissue: string;
  summary: string;
}
