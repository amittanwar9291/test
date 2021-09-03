import { IPageWithFileUploaderConfig } from './page-with-file-uploader-config.interface';
import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from '@interfaces/configs/page-with-diagnosis-presets-config.interface';

export interface IPelvisMrtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  prostata: string;
  maleGender: IPageWithDiagnosisPresetsConfigInterface;
  femaleGender: IPageWithDiagnosisPresetsConfigInterface;
  pelvicFloor: string;
  rectum: string;
  bladder: IPageWithDiagnosisPresetsConfigInterface;
  bones: IPageWithDiagnosisPresetsConfigInterface;
  rating: string;
  summary: string;
  lymphNodes: IPageWithFileUploaderConfig;
}
