import { IModuleConfigBase } from '@interfaces/configs/module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';

export interface IAbdomenMrtConfig extends IModuleConfigBase {
  examinationRegion: string;
  anamnesis: string;
  technology: string;
  liver: IPageWithFileUploaderConfig;
  spleen: IPageWithFileUploaderConfig;
  pancreas: IPageWithFileUploaderConfig;
  kidneys: IPageWithFileUploaderConfig;
  adrenalGlands: IPageWithFileUploaderConfig;
  gastrointestinalTract: IPageWithFileUploaderConfig;
  peritonealCavity: IPageWithFileUploaderConfig;
  lymphaticSystem: IPageWithFileUploaderConfig;
  summary: string;
}
