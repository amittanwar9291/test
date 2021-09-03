import { IModuleConfigBase } from './module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';

export interface IHeadCtConfig extends IModuleConfigBase {
  examination: string;
  anamnesis: string;
  technology: string;
  vessels: IPageWithFileUploaderConfig;
  meninges: IPageWithFileUploaderConfig;
  cortex: string;
  basalNuclei: string;
  brainstemCranialNerves: string;
  cerebrospinalFluidSpace: IPageWithFileUploaderConfig;
  sellarRegion: string;
  facialSkull: string;
  summary: string;
}
