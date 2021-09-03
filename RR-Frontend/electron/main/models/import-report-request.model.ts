import { ImportMode } from '../enums/import-mode.enum';
import { ImportValue } from './import-value.model';

export class ImportReportRequest {
  moduleName: string;
  importValues: ImportValue[];
  importMode: ImportMode;
  logData: string;
}
