import { IDicomMapEntryDto } from '../interfaces/dtos/dicom-map-entry-dto.interface';
import { RetrieveLevel } from '../enums/retrieve-level.enum';

export class DicomMapEntry {
  retrieveLevel: RetrieveLevel;
  dicomTag: string;
  description: string;
  regex: string;
  radioReportId: string;
  radioReportValue: string;
  listPrefix: string;

  get isValid(): boolean {
    return this.retrieveLevel !== RetrieveLevel.None && this.dicomTag && this.radioReportId && this.hasRegexAndValueOrNone();
  }

  constructor() {
    this.retrieveLevel = RetrieveLevel.None;
    this.dicomTag = '';
    this.description = '';
    this.regex = '';
    this.radioReportId = '';
    this.radioReportValue = '';
    this.listPrefix = '';
  }

  static create(dto: IDicomMapEntryDto, retrieveLevel: RetrieveLevel): DicomMapEntry {
    const map = new DicomMapEntry();
    map.retrieveLevel = retrieveLevel;
    map.dicomTag = dto.DicomTag || '';
    map.description = dto.Description || '';
    map.regex = dto.Regex || '';
    map.radioReportId = dto.RadioReportId || '';
    map.radioReportValue = dto.RadioReportValue || '';
    map.listPrefix = dto.ListPrefix || '';

    return map;
  }

  private hasRegexAndValueOrNone(): boolean {
    return (!!this.regex && !!this.radioReportValue) || (!this.regex && !this.radioReportValue);
  }
}
