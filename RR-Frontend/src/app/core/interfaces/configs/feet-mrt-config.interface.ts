import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from './page-with-diagnosis-presets-config.interface';

export interface IFeetMrtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  bones: IPageWithDiagnosisPresetsConfigInterface;
  ligamentsAndTendons: string;
  softTissue: IPageWithDiagnosisPresetsConfigInterface;
  summary: string;
}
