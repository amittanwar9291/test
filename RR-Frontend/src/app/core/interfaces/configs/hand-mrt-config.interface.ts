import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from './page-with-diagnosis-presets-config.interface';

export interface IHandMrtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  bones: IPageWithFileUploaderConfig;
  capsuleAndRibbons: string;
  tendinopathy: string;
  nerveCompression: string;
  softTissue: IPageWithDiagnosisPresetsConfigInterface;
  evaluation: string;
}
