import { Injectable } from '@angular/core';
import { LicenseDetailsUiModel } from '@models/shared/settings/license-details-ui.model';
import { LicenseDetailsApiModel } from '@models/shared/settings/license-details-api.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseDetailsMapper {
  constructor() {
    automapper.createMap('LicenseDetailsApiModel', 'LicenseDetailsUiModel').convertToType(LicenseDetailsUiModel);
  }

  mapToUI(source: LicenseDetailsApiModel): LicenseDetailsUiModel {
    const out: LicenseDetailsUiModel = automapper.map('LicenseDetailsApiModel', 'LicenseDetailsUiModel', source);
    out.creationDate = new Date(source.creationDate);
    out.expirationDate = new Date(source.expirationDate);
    out.depletionPercentage = Math.round(source.depletionPercentage);

    return out;
  }
}
