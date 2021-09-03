import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from './page-with-diagnosis-presets-config.interface';

export interface IHeadMrtConfig extends IModuleConfigBase {
  examination: string;
  anamnesis: string;
  technology: string;
  vessels: IPageWithFileUploaderConfig;
  meninges: IPageWithDiagnosisPresetsConfigInterface;
  cortex: IPageWithDiagnosisPresetsConfigInterface;
  basalNuclei: IPageWithDiagnosisPresetsConfigInterface;
  brainstemCranialNerves: IPageWithDiagnosisPresetsConfigInterface;
  cerebrospinalFluidSpace: IPageWithDiagnosisPresetsConfigInterface;
  sellarRegion: IPageWithDiagnosisPresetsConfigInterface;
  facialSkull: IPageWithDiagnosisPresetsConfigInterface;
  summary: string;
}
