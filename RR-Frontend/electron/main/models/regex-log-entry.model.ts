import { DicomMapEntry } from './dicom-map-entry.model';

export class RegexLogEntry {
  regex: string;
  keywordOrHexCode: string;
  radioReportId: string;
  radioReportValue: string;
  tagContent: string;
  isMatch: boolean;
  matches: string[];

  constructor() {
    this.regex = '';
    this.radioReportId = '';
    this.radioReportValue = '';
    this.keywordOrHexCode = '';
    this.tagContent = '';
    this.isMatch = false;
    this.matches = [];
  }

  static create(mapEntry: DicomMapEntry) {
    const logEntry = new RegexLogEntry();
    logEntry.regex = mapEntry.regex;
    logEntry.keywordOrHexCode = mapEntry.dicomTag;
    logEntry.radioReportId = mapEntry.radioReportId;
    logEntry.radioReportValue = mapEntry.radioReportValue;

    return logEntry;
  }
}
