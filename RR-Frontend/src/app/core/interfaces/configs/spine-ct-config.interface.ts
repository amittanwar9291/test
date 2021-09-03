import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';

export interface ISpineCtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  technology: string;
  configuration: string;
  disc: string;
  bones: IPageWithFileUploaderConfig;
  myelonSpinalCanal: string;
  softTissues: IPageWithFileUploaderConfig;
  sacroiliacJoint: IPageWithFileUploaderConfig;
  summary: string;
}
