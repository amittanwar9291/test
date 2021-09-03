import { DicomMapEntry } from '../models/dicom-map-entry.model';
import { Logger } from './logger.service';
import { ImportLogData } from '../models/import-log-data.model';
import { RegexLogEntry } from '../models/regex-log-entry.model';
import { DicomParserResult } from '../models/dicom-parser-result.model';
import { DicomTagKeyPair } from '../models/dicom-tag-key.model';
import { DicomDataSet } from '../models/dicom-data-set.model';
import { DicomTagKeyword } from '../enums/dicom-tag-keyword.enum';
import { DicomValue } from '../models/dicom-value.model';
import { DicomData } from '../models/dicom-data.model';
import moment from 'moment';

// import scoped
export class DicomValueService {
  constructor(private logData: ImportLogData) {}

  findDicomValueByKeyPair(parserResult: DicomParserResult, keys: DicomTagKeyPair, dataSetIndex = 0): string | null {
    const dicomValue = this.getDicomValueByKey(parserResult.hex[dataSetIndex], keys.hexCode);
    if (dicomValue) {
      return dicomValue;
    }

    return this.getDicomValueByKey(parserResult.keywords[dataSetIndex], keys.keyword);
  }

  findHexDatasetByKeyPair(parserResult: DicomParserResult, keys: DicomTagKeyPair, dataSetIndex = 0): DicomDataSet {
    const dataset = parserResult.hex[dataSetIndex];
    if (dataset) {
      const key = this.convertHexCode(keys.hexCode);
      const dicomData = dataset[key];
      if (dicomData) {
        return dataset;
      }
    }
  }

  findKeywordDatasetByKeyPair(parserResult: DicomParserResult, keys: DicomTagKeyPair, dataSetIndex = 0): DicomDataSet {
    const dataset = parserResult.keywords[dataSetIndex];
    if (dataset) {
      const dicomData = dataset[keys.keyword];
      if (dicomData) {
        return dataset;
      }
    }
  }

  getDicomValueByKeywordOrHexCode(parserResult: DicomParserResult, keywordOrHexCode: string, dataSetIndex: number): string | null {
    const dataSet = this.isHexCode(keywordOrHexCode) ? parserResult.hex[dataSetIndex] : parserResult.keywords[dataSetIndex];

    return this.getDicomValueByKey(dataSet, keywordOrHexCode);
  }

  getDicomValueByKey(dataset: DicomDataSet, keywordOrHexCode: DicomTagKeyword | string): string | null {
    if (!dataset) {
      return;
    }

    let key = keywordOrHexCode;
    if (this.isHexCode(key)) {
      key = this.convertHexCode(key);
    }

    const dicomData = dataset[key];
    if (!dicomData) {
      return;
    }

    const dataSetValue = dicomData.value && dicomData.value[0];
    if (!dataSetValue) {
      return;
    }

    if (this.isDicomValue(dataSetValue)) {
      return dataSetValue.Alphabetic;
    } else {
      return dataSetValue.toString();
    }
  }

  setDicomValueByKey(dataset: DicomDataSet, keywordOrHexCode: DicomTagKeyword | string, value: string): void {
    let key = keywordOrHexCode;
    if (this.isHexCode(key)) {
      key = this.convertHexCode(key);
    }

    const dicomData = dataset[key];
    const newDicomValue: DicomValue = {
      Alphabetic: value
    };
    if (!dicomData?.value?.length) {
      const newDicomData = new DicomData();
      newDicomData.vr = dicomData.vr;
      newDicomData.value = [newDicomValue];
      dataset[key] = newDicomData;

      return;
    }

    const dataSetValue = dicomData.value[0];
    if (this.isDicomValue(dataSetValue)) {
      dataSetValue.Alphabetic = value;
    } else {
      dicomData.value[0] = value;
    }
  }

  extractValueByRegex(searchString: string, mapEntry: DicomMapEntry): string {
    if (!searchString || !mapEntry.regex) {
      return;
    }

    try {
      const regex = new RegExp(mapEntry.regex.toLowerCase());
      const matches = regex.exec(searchString.toLowerCase());
      const nonEmptyMatches = matches?.filter(m => m && m.trim() !== '') || [];
      if (nonEmptyMatches.length) {
        const logEntry = RegexLogEntry.create(mapEntry);
        logEntry.tagContent = searchString;
        logEntry.matches = nonEmptyMatches;
        logEntry.isMatch = !!nonEmptyMatches.length;
        this.logData.regexEntries.push(logEntry);

        return mapEntry.radioReportValue;
      }
    } catch (error) {
      Logger.logger.error(error);
    }
  }

  parseDateString(dateString: string): Date | null {
    const parsed = moment(dateString);

    return parsed.isValid ? parsed.toDate() : null;
  }

  private isDicomValue(obj: any): obj is DicomValue {
    return typeof obj === 'object' && 'Alphabetic' in obj;
  }

  private isHexCode(keywordOrHexCodes: string) {
    return keywordOrHexCodes.includes(':');
  }

  private convertHexCode(hex: string): string {
    return hex.replace(':', '');
  }
}
