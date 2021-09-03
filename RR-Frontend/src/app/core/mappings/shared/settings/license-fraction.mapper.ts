import { LicenseFractionUiModel } from '@models/shared/settings/license-fraction-ui.model';
import { Injectable } from '@angular/core';
import { LicenseFractionApiModel } from '@models/shared/settings/license-fraction-api.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseFractionMapper {
  constructor() {
    automapper.createMap('LicenseFractionApiModel', 'LicenseFractionUiModel').convertToType(LicenseFractionUiModel);
  }

  mapToUI(source: LicenseFractionApiModel): LicenseFractionUiModel {
    const out: LicenseFractionUiModel = automapper.map('LicenseFractionApiModel', 'LicenseFractionUiModel', source);
    out.allocationDate = new Date(source.allocationDate);
    out.creationDate = new Date(source.creationDate);
    out.expirationDate = new Date(source.expirationDate);

    return out;
  }
}
