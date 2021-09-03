import { ImportMode } from '../enums/shared/import-mode.enum';

export interface IModuleSelectionData {
  moduleName: string;
  dicomMap: string;
  importMode: ImportMode;
}
