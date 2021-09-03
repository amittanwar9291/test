import { DicomParserResult } from '../models/dicom-parser-result.model';
import { ImportValue } from '../models/import-value.model';
import { DicomMapLevelData } from '../models/dicom-map-level-data.model';
import { RetrieveLevel } from '../enums/retrieve-level.enum';
import { DicomValueService } from './dicom-value.service';
import { DicomMapEntry } from '../models/dicom-map-entry.model';
import { KnownDicomTagKeys } from '../models/known-dicom-tag-keys.model';
import { DicomMapManager } from './dicom-map-manager.service';
import { ImportLogData } from '../models/import-log-data.model';
import { ErrorMessage } from '../enums/error-message.enum';

export class ImportValueProducer {
  constructor(private dicomValueService: DicomValueService, private dicomMapManager: DicomMapManager, private logData: ImportLogData) {}

  createImportValues(patientOrStudyParserResult: DicomParserResult, seriesParserResult?: DicomParserResult): ImportValue[] {
    const patientImportValues = this.createImportValuesInternal(patientOrStudyParserResult, RetrieveLevel.Patient);
    const studyImportValues = this.createImportValuesInternal(patientOrStudyParserResult, RetrieveLevel.Study);
    const seriesImportValues = seriesParserResult ? this.createImportValuesInternal(seriesParserResult, RetrieveLevel.Series) : [];

    return patientImportValues.concat(studyImportValues, seriesImportValues);
  }

  private createImportValuesInternal(parserResult: DicomParserResult, retrieveLevel: RetrieveLevel): ImportValue[] {
    let importValues: ImportValue[];
    switch (retrieveLevel) {
      case RetrieveLevel.Patient:
        importValues = this.getImportValues(parserResult, this.dicomMapManager.patientLevelData, 0);
        this.logData.patientImportValues = importValues;
        break;
      case RetrieveLevel.Study:
        importValues = this.getImportValues(parserResult, this.dicomMapManager.studyLevelData, 0);
        this.logData.studyImportValues = importValues;
        break;
      case RetrieveLevel.Series:
        importValues = this.createSeriesImportValues(parserResult, this.dicomMapManager.seriesLevelData);
        this.logData.seriesImportValues = importValues;
        break;
    }

    return importValues;
  }

  private createSeriesImportValues(parserResult: DicomParserResult, mapLevelData: DicomMapLevelData): ImportValue[] {
    if (parserResult.hex.length !== parserResult.keywords.length) {
      this.logData.warnings.push(ErrorMessage.RESULT_ARRAYS_DIFFERENT_LENGTH);
    }
    if (!parserResult.hex.length) {
      this.logData.warnings.push(ErrorMessage.NO_SERIES_DATA);
      return [];
    }

    const firstLevelImportValues: ImportValue[] = [];
    const minLength = Math.min(parserResult.hex.length, parserResult.keywords.length);
    for (let i = 0; i < minLength; i++) {
      const seriesInstanceUid = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.seriesInstanceUID, i);
      if (!seriesInstanceUid) {
        return;
      }

      const secondLevelImportValues = this.getImportValues(parserResult, mapLevelData, i);
      if (secondLevelImportValues.length) {
        this.addImportValue(seriesInstanceUid, secondLevelImportValues, firstLevelImportValues);
      }
    }

    return firstLevelImportValues;
  }

  private getImportValues(parserResult: DicomParserResult, mapLevelData: DicomMapLevelData, dataSetIndex: number): ImportValue[] {
    const importValues: ImportValue[] = [];
    mapLevelData.keywordOrHexCodeSet.forEach(keywordOrHexCode => {
      const dicomValue = this.dicomValueService.getDicomValueByKeywordOrHexCode(parserResult, keywordOrHexCode, dataSetIndex);
      if (!dicomValue) {
        return;
      }

      const mapEntries = mapLevelData.entryGroups[keywordOrHexCode];
      mapEntries.forEach(mapEntry => {
        if (!mapEntry.regex) {
          this.addImportValue(mapEntry.radioReportId, dicomValue, importValues);
        } else {
          this.extractValueByRegexAndMaybeAdd(dicomValue, mapEntry, importValues);
        }
      });
    });

    return importValues;
  }

  private extractValueByRegexAndMaybeAdd(dicomValue: string, mapEntry: DicomMapEntry, importValues: ImportValue[]): void {
    const extractedValue = this.dicomValueService.extractValueByRegex(dicomValue, mapEntry);
    if (extractedValue) {
      this.addImportValue(mapEntry.radioReportId, extractedValue, importValues);
    }
  }

  private addImportValue(importValueIdentifier: string, value: any, array: ImportValue[]) {
    array.push({
      importValueIdentifier,
      value
    });
  }
}
