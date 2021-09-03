import { IPageWithFileUploaderConfig } from '.';
import { IModuleConfigBase } from './module-config-base.interface';

export interface IMammaMxConfig extends IModuleConfigBase {
  patientIndication: string;
  medicalHistory: string;
  technology: string;
  mammographyParenchymaAnatomy: string;
  mammographyFinding: IPageWithFileUploaderConfig;
  ultrasoundMammaryGlands: string;
  ultrasoundFinding: IPageWithFileUploaderConfig;
  lymphNodes: string;
  summary: string;
}
