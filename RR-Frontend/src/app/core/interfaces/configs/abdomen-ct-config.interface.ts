import { IModuleConfigBase } from '@interfaces/configs/module-config-base.interface';

export interface IAbdomenCtConfig extends IModuleConfigBase {
  areaOfInvestigation: string;
  medicalHistory: string;
  technology: string;
}
