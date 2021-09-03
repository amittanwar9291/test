import { IDicomMapEntryDto } from './dicom-map-entry-dto.interface';

export interface IDicomMapDto {
  Module?: string;
  Patient?: IDicomMapEntryDto[];
  Study?: IDicomMapEntryDto[];
  Series?: IDicomMapEntryDto[];
}
