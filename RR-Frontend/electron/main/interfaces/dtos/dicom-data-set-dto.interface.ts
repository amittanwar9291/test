import { IDicomDataDto } from './dicom-data-dto.interface';

export interface IDicomDataSetDto {
  [keyword: string]: IDicomDataDto;
}
