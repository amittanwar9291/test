import { DicomMapEntryApiModel } from '@models/shared/settings/dicom-map-entry-api.model';

export class DicomMapApiModel {
  Module: string;
  Patient: DicomMapEntryApiModel[];
  Study: DicomMapEntryApiModel[];
  Series: DicomMapEntryApiModel[];

  constructor() {
    this.Module = '';
    this.Patient = [];
    this.Study = [];
    this.Series = [];
  }
}
