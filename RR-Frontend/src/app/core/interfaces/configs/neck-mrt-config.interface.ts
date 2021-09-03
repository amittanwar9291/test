import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';
import { IPageWithDiagnosisPresetsConfigInterface } from '@interfaces/configs/page-with-diagnosis-presets-config.interface';

export interface INeckMrtConfig extends IModuleConfigBase {
  examination: string;
  indication: string;
  technology: string;
  pharynx: IPageWithFileUploaderConfig;
  larynx: IPageWithFileUploaderConfig;
  softTissues: IPageWithFileUploaderConfig;
  thyroid: IPageWithFileUploaderConfig;
  lymphNodes: IPageWithFileUploaderConfig;
  vessels: string;
  bones: IPageWithDiagnosisPresetsConfigInterface;
  summary: string;
}
