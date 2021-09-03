import { IModuleConfigBase } from '@interfaces/configs/module-config-base.interface';
import { IPageWithFileUploaderConfig } from '@interfaces/configs/page-with-file-uploader-config.interface';

export interface IThoraxMrtConfig extends IModuleConfigBase {
  studyArea: string;
  anamnesis: string;
  technology: string;
  mediastinum: string;
  lungParenchyma: string;
  pleura: IPageWithFileUploaderConfig;
  bones: IPageWithFileUploaderConfig;
  summary: string;
}
