import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from '@interfaces/configs/page-with-diagnosis-presets-config.interface';

export interface IElbowMrtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  bones: IPageWithDiagnosisPresetsConfigInterface;
  cartilage: string;
  tendonsAndMuscles: string;
  softTissue: IPageWithDiagnosisPresetsConfigInterface;
  summary: string;
}
