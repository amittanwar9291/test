import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from '@interfaces/configs/page-with-diagnosis-presets-config.interface';

export interface IHipMrtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  bones: IPageWithFileUploaderConfig;
  cartilageAndLabrum: string;
  capsuleAndLigaments: IPageWithDiagnosisPresetsConfigInterface;
  musclesAndTendons: string;
  softTissue: IPageWithDiagnosisPresetsConfigInterface;
  summary: string;
}
