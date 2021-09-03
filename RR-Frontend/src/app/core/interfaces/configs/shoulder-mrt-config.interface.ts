import { IPageWithFileUploaderConfig } from './page-with-file-uploader-config.interface';
import { IModuleConfigBase } from './module-config-base.interface';

export interface IShoulderMrtConfig extends IModuleConfigBase {
  localization: string;
  anamnesis: string;
  bones: IPageWithFileUploaderConfig;
  technology: string;
  rotator: IPageWithFileUploaderConfig;
  labrumAndRibbons: IPageWithFileUploaderConfig;
  findings: {
    descriptions: string;
  };
  jointAndBursae: IPageWithFileUploaderConfig;
  softParts: string;
  summary: string;
}
