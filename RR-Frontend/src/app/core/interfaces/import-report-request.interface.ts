import { ImportMode } from '@enums/shared/import-mode.enum';

export interface IImportReportRequest {
  moduleName: string;
  importMode: ImportMode;
  logEntries: string[];
}
