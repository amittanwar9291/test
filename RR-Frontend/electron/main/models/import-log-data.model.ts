import { RegexLogEntry } from './regex-log-entry.model';
import { IDicomParserResultDto } from '../interfaces/dtos/dicom-parser-result-dto.interface';
import { IDicomMapDto } from '../interfaces/dtos/dicom-map-dto.interface';
import { DicomMap } from './dicom-map.model';
import { DicomParserResult } from './dicom-parser-result.model';
import { DicomQueryParams } from './dicom-query-data.model';
import { IConfig } from '../interfaces/config.interface';
import { ImportValue } from './import-value.model';
import { ImportReportRequest } from './import-report-request.model';
import { StudySelectionData } from './study-selection-data.model';
import { ICheckExistingImportDataDto } from '../interfaces/dtos/check-existing-import-data-dto.interface';

export class ImportLogData {
  start: Date;
  finish: Date;
  dicomQueryParams: DicomQueryParams;
  argv: string[];
  cliArgs: string[];
  config: IConfig;
  checkExistingImportData: ICheckExistingImportDataDto;
  selectedStudy: StudySelectionData;
  moduleName: string;
  dicomMapDto: IDicomMapDto;
  dicomMap: DicomMap;
  studiesOfPatientParserArgs: string[];
  studiesOfPatientParserArgString: string;
  studiesOfPatientParserResultDto: IDicomParserResultDto;
  studiesOfPatientParserResult: DicomParserResult;
  studiesOfPatientParserResultKeywordsCount: number;
  studiesOfPatientParserResultHexCount: number;
  patientParserArgs: string[];
  patientParserArgString: string;
  patientParserResultDto: IDicomParserResultDto;
  patientParserResult: DicomParserResult;
  patientParserResultKeywordsCount: number;
  patientParserResultHexCount: number;
  patientImportValues: ImportValue[];
  studyParserArgs: string[];
  studyParserArgString: string;
  studyParserResultDto: IDicomParserResultDto;
  studyParserResult: DicomParserResult;
  studyParserResultKeywordsCount: number;
  studyParserResultHexCount: number;
  studyImportValues: ImportValue[];
  cmoveParserArgs: string[];
  cmoveParserArgString: string;
  cmoveParserResultDto: IDicomParserResultDto;
  cmoveParserResult: DicomParserResult;
  cmoveParserResultKeywordsCount: number;
  cmoveParserResultHexCount: number;
  cmoveImportValues: ImportValue[];
  patientStudyConcatResult: DicomParserResult;
  seriesParserArgs: string[];
  seriesParserArgString: string;
  seriesParserResultDto: IDicomParserResultDto;
  seriesParserResult: DicomParserResult;
  seriesParserResultKeywordsCount: number;
  seriesParserResultHexCount: number;
  seriesImportValues: ImportValue[];
  regexEntries: RegexLogEntry[];
  warnings: string[];
  loggerEntries: string[];
  importRequest: ImportReportRequest;

  constructor() {
    this.start = new Date();
    this.warnings = [];
    this.regexEntries = [];
  }
}
