import { IReport } from '@interfaces/report.interface';
import { Guid } from './shared/guid/guid';

export class ReportModelBase implements IReport {
  id: string;
  reportId: string;
  reportTypeName: string;

  constructor() {
    this.id = Guid.createEmpty();
    this.reportId = Guid.createEmpty();
    this.reportTypeName = 'None';
  }
}
