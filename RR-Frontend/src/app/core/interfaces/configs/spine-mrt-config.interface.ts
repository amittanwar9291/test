import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from '@interfaces/configs/page-with-diagnosis-presets-config.interface';

export interface ISpineMrtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  configuration: string;
  disc: IPageWithFileUploaderConfig;
  bones: IPageWithDiagnosisPresetsConfigInterface;
  spinalCanal: IPageWithDiagnosisPresetsConfigInterface;
  softTissues: IPageWithDiagnosisPresetsConfigInterface;
  sacroiliacJoint: IPageWithDiagnosisPresetsConfigInterface;
  summary: string;
}
