import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CenterspecificPreferencesModuleApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-module-api.model';
import { CenterspecificPreferencesModuleUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-module-ui.model';
import { CenterspecificPreferencesSetApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-set-api.model';
import { CenterspecificPreferencesSetUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-set-ui.model';

import { CenterspecificPreferencesSetMapper } from '@mappings/shared/centerspecific-preferences/centerspecific-preferences-set.mapper';

@Injectable({
  providedIn: 'root'
})
export class CenterspecificPreferencesModuleMapper
  implements IMapper<CenterspecificPreferencesModuleApiModel, CenterspecificPreferencesModuleUiModel> {
  constructor(private centerSpecificSetMapper: CenterspecificPreferencesSetMapper) {
    automapper.createMap('CSP_Module_ApiModel', 'CSP_Module_UiModel').convertToType(CenterspecificPreferencesModuleUiModel);
    automapper.createMap('CSP_Module_UiModel', 'CSP_Module_ApiModel').convertToType(CenterspecificPreferencesModuleApiModel);
  }

  mapToAPI(
    source: CenterspecificPreferencesModuleUiModel,
    out: CenterspecificPreferencesModuleApiModel
  ): CenterspecificPreferencesModuleApiModel {
    out = automapper.map('CSP_Module_UiModel', 'CSP_Module_ApiModel', source);

    if (source.sets) {
      out.sets = source.sets.map(
        (set: CenterspecificPreferencesSetUiModel): CenterspecificPreferencesSetApiModel => {
          return this.centerSpecificSetMapper.mapToAPI(set, new CenterspecificPreferencesSetApiModel());
        }
      );
    }

    return out;
  }

  mapToUI(
    source: CenterspecificPreferencesModuleApiModel,
    out: CenterspecificPreferencesModuleUiModel
  ): CenterspecificPreferencesModuleUiModel {
    out = automapper.map('CSP_Module_ApiModel', 'CSP_Module_UiModel', source);

    if (source.sets) {
      out.sets = source.sets.map(
        (set: CenterspecificPreferencesSetApiModel): CenterspecificPreferencesSetUiModel => {
          return this.centerSpecificSetMapper.mapToUI(set, new CenterspecificPreferencesSetUiModel());
        }
      );
    }

    return out;
  }
}
