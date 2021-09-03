import { IDicomDataSetDto } from './dicom-data-set-dto.interface';

export interface IDicomParserResultDto {
  keywords?: IDicomDataSetDto[];
  hex?: IDicomDataSetDto[];
  logs?: string[];
}
