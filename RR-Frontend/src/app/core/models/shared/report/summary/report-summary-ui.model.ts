import { Guid } from '@models/shared/guid/guid';
import { ReportSummaryApiModel } from '@models/shared/report/summary/report-summary-api.model';
import { ReportSummaryTextModel } from '@models/shared/report/summary/report-summary-text.model';

export class ReportSummaryUiModel extends ReportSummaryApiModel {
  selected: boolean;
  id: string;
  inEdition: boolean;

  constructor(
    order: number,
    pageNumber: number,
    translations: ReportSummaryTextModel[],
    isAddedByUser: boolean,
    priority: string,
    selected?: boolean,
    inEdition?: boolean
  ) {
    super(order, pageNumber, translations, isAddedByUser, priority);
    this.selected = selected ? selected : false;
    this.id = Guid.create();
    this.inEdition = inEdition ? inEdition : false;
  }
}
