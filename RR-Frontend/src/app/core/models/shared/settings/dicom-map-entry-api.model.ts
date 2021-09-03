import { DicomMapEntryUiModel } from '@models/shared/settings/dicom-map-entry-ui.model';

export class DicomMapEntryApiModel {
  DicomTag: string;
  Description: string;
  Regex: string | RegExp;
  RadioReportId: string;
  RadioReportValue: string;
  ListPrefix: string;

  constructor(uiModel?: DicomMapEntryUiModel) {
    this.DicomTag = uiModel?.DicomTag || '';
    this.Description = uiModel?.DicomTag || '';
    this.Regex = uiModel?.DicomTag || '';
    this.RadioReportId = uiModel?.DicomTag || '';
    this.RadioReportValue = uiModel?.DicomTag || '';
    this.ListPrefix = uiModel?.DicomTag || '';
  }
}
