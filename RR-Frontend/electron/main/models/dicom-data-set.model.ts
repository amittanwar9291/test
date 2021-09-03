import { DicomData } from './dicom-data.model';
import { IDicomDataSetDto } from '../interfaces/dtos/dicom-data-set-dto.interface';

export class DicomDataSet {
  [keyword: string]: DicomData;

  static create(dto: IDicomDataSetDto): DicomDataSet {
    const dataSet: DicomDataSet = {};
    for (const [keywordOrHexCode, dataDto] of Object.entries(dto)) {
      const data = DicomData.create(dataDto);
      if (data.isValid) {
        dataSet[keywordOrHexCode] = data;
      }
    }

    return dataSet;
  }
}
