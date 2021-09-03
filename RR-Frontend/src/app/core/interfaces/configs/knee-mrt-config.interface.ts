import { IPageWithFileUploaderConfig } from './page-with-file-uploader-config.interface';
import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from '@interfaces/configs/page-with-diagnosis-presets-config.interface';

export interface IKneeMrtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  bones: IPageWithDiagnosisPresetsConfigInterface;
  ribbons: IPageWithFileUploaderConfig;
  osteoInterface: string;
  patella: string;
  softParts: IPageWithDiagnosisPresetsConfigInterface;
  summary: string;
}
