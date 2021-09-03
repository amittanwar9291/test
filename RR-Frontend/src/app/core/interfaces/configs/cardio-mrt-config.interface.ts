import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '.';

export interface ICardioMrtConfig extends IModuleConfigBase {
  areaOfExamination: string;
  anamnesis: string;
  technology: string;
  pharmaStressStatus: string;
  flaps: IPageWithFileUploaderConfig;
  findingsVentricles: IPageWithFileUploaderConfig;
  leftVentricle: IPageWithFileUploaderConfig;
  rightVentricle: string;
  spatialRequirement: IPageWithFileUploaderConfig;
  pericardiumVessels: string;
  summary: string;
}
