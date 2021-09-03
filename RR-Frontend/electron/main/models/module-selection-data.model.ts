import { ImportMode } from '../enums/import-mode.enum';
import { DicomMap } from './dicom-map.model';
import { IModuleSelectionDataDto } from '../interfaces/dtos/module-selection-data-dto.interface';

export class ModuleSelectionData {
  moduleName: string;
  dicomMap: DicomMap;
  importMode: ImportMode;

  get isValid(): boolean {
    return !!this.moduleName && this.dicomMap?.isValid === true;
  }

  constructor() {
    this.moduleName = '';
    this.importMode = ImportMode.ImportAndOpen;
  }

  static create(dto: IModuleSelectionDataDto): ModuleSelectionData {
    const moduleData = new ModuleSelectionData();
    moduleData.moduleName = dto.moduleName || '';
    moduleData.importMode = dto.importMode || ImportMode.ImportAndOpen;

    return moduleData;
  }
}
