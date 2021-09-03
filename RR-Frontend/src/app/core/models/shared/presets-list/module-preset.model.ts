import { IModulePresets } from '@interfaces/module-presets.interface';

export class ModulePresetModel implements IModulePresets {
  displayName: string;
  moduleName: string;
  isActive: boolean;
  isSelected?: boolean;
  constructor(moduleName: string) {
    this.moduleName = moduleName;
    this.isActive = false;
  }
}
