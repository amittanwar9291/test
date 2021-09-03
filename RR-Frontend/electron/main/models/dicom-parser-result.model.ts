import { IDicomParserResultDto } from '../interfaces/dtos/dicom-parser-result-dto.interface';
import { DicomDataSet } from './dicom-data-set.model';

export class DicomParserResult {
  keywords: DicomDataSet[];
  hex: DicomDataSet[];
  logs: string[];

  constructor() {
    this.keywords = [];
    this.hex = [];
    this.logs = [];
  }

  get isValid(): boolean {
    return true;
  }

  get isEmpty(): boolean {
    return !this.keywords.length && !this.hex.length;
  }

  static create(dto: IDicomParserResultDto): DicomParserResult {
    const parserResult = new DicomParserResult();
    if (!dto) {
      return parserResult;
    }

    parserResult.hex = dto.hex?.length ? dto.hex.map(DicomDataSet.create) : [];
    parserResult.keywords = dto.keywords?.length ? dto.keywords.map(DicomDataSet.create) : [];
    parserResult.logs = dto.logs || [];

    return parserResult;
  }

  static concat(result1: DicomParserResult, result2: DicomParserResult): DicomParserResult {
    const result = new DicomParserResult();
    const minLength = Math.min(result1.keywords.length, result2.keywords.length);
    const largerOne = result1.keywords.length > result2.keywords.length ? result1 : result2;
    for (let i = 0; i < minLength; i++) {
      const keywordDataSet = new DicomDataSet();
      addDataSetEntry(result1.keywords[i], keywordDataSet);
      addDataSetEntry(result2.keywords[i], keywordDataSet);
      result.keywords.push(keywordDataSet);
      const hexDataSet = new DicomDataSet();
      addDataSetEntry(result1.hex[i], hexDataSet);
      addDataSetEntry(result2.hex[i], hexDataSet);
      result.hex.push(hexDataSet);
    }
    result.keywords.push(...largerOne.keywords.splice(minLength + 1));
    result.hex.push(...largerOne.hex.splice(minLength + 1));
    result.logs = result1.logs.concat(result2.logs);

    return result;

    function addDataSetEntry(source: DicomDataSet, dest: DicomDataSet) {
      for (const key in source) {
        if (!dest.hasOwnProperty(key) && source[key].hasValue) {
          dest[key] = source[key];
        }
      }
    }
  }
}
