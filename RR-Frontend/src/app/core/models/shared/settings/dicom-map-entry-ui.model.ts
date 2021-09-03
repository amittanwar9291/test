import { DicomMapEntryApiModel } from '@models/shared/settings/dicom-map-entry-api.model';
import { Guid } from '@models/shared/guid/guid';

export class DicomMapEntryUiModel {
  DicomTag: string;
  Description: string;
  Regex: string | RegExp;
  RadioReportId: string;
  RadioReportValue: string;
  ListPrefix: string;
  isSelected: boolean;
  id: Guid;

  constructor(apiModel?: DicomMapEntryApiModel) {
    this.DicomTag = apiModel?.DicomTag || '';
    this.Description = apiModel?.Description || '';
    this.Regex = apiModel?.Regex || '';
    this.RadioReportId = apiModel?.RadioReportId || '';
    this.RadioReportValue = apiModel?.RadioReportValue || '';
    this.ListPrefix = apiModel?.ListPrefix || '';
    this.isSelected = false;
    this.id = Guid.create();
  }
}
