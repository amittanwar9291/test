import { ICustomReportConfig } from './custom-report-config.interface';

export interface ICustomReportsConfig {
  module: string;
  reports: ICustomReportConfig[];
}
