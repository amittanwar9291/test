import { ImportMode } from '../../enums/import-mode.enum';
import { IDicomMapDto } from './dicom-map-dto.interface';

export interface IModuleSelectionDataDto {
  moduleName?: string;
  dicomMap?: IDicomMapDto;
  importMode?: ImportMode;
}
