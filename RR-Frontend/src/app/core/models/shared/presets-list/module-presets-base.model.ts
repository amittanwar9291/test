import { IModulePresetsConfig } from '@interfaces/configs/module-presets-config.inteface';
import { AllModules } from '@models/shared/presets-list/all-modules.const';
import { ModulePresetModel } from '@models/shared/presets-list/module-preset.model';
import { IModulePresets } from '@interfaces/module-presets.interface';

export class ModulePresetsBase implements IModulePresetsConfig {
  presetsCT: IModulePresets[];
  presetsMRT: IModulePresets[];

  constructor() {
    this.presetsCT = AllModules.presetsCT.map(item => new ModulePresetModel(item));
    this.presetsMRT = AllModules.presetsMRT.map(item => new ModulePresetModel(item));
  }
}
