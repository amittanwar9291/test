import { ReportListViewMode } from '@enums/shared/report-list-view-mode.enum';
import { ReportListOptionsUiModel } from '@models/shared/report-list/report-list-options-ui.model';

export class ReportListState {
  viewMode: ReportListViewMode;
  options: ReportListOptionsUiModel;
  isPatientLock: boolean;
  isSearchActive: boolean;

  constructor() {
    this.viewMode = ReportListViewMode.List;
    this.options = new ReportListOptionsUiModel();
    this.isPatientLock = false;
    this.isSearchActive = false;
  }
}
