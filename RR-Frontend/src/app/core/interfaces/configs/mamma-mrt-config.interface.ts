import { IPageWithFileUploaderConfig } from './page-with-file-uploader-config.interface';
import { IModuleConfigBase } from './module-config-base.interface';

export interface IMammaMrtConfig extends IModuleConfigBase {
  patientIndication: string;
  anamnesis: string;
  technology: string;
  anatomy: string;
  anatomyEnhancement: string;
  diagnosis: IPageWithFileUploaderConfig;
  lymphs: string;
  bones: string;
  rating: string;
}
