import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from '@interfaces/configs/page-with-diagnosis-presets-config.interface';

export interface IThoraxCtConfig extends IModuleConfigBase {
  studyArea: string;
  anamnesis: string;
  technology: string;
  mediastinum: IPageWithDiagnosisPresetsConfigInterface;
  lungParenchyma: IPageWithFileUploaderConfig;
  lungInterstitium: IPageWithFileUploaderConfig;
  softParts: IPageWithDiagnosisPresetsConfigInterface;
  bones: IPageWithDiagnosisPresetsConfigInterface;
  summary: string;
}
