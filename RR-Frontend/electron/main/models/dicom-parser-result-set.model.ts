import { DicomParserResult } from './dicom-parser-result.model';

export class DicomParserResultSet {
  patient: DicomParserResult;
  study: DicomParserResult;
  series?: DicomParserResult;

  constructor() {
    this.patient = new DicomParserResult();
    this.study = new DicomParserResult();
    this.series = new DicomParserResult();
  }
}
