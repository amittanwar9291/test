import { Injectable } from '@angular/core';
import { LicenseListItemApiModel } from '@models/shared/settings/license-list-item-api.model';
import { LicenseListItemUiModel } from '@models/shared/settings/license-list-item-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LicenseListItemMapper {
  constructor() {
    automapper.createMap('LicenseListItemApiModel', 'LicenseListItemUiModel').convertToType(LicenseListItemUiModel);
  }

  mapToUI(source: LicenseListItemApiModel): LicenseListItemUiModel {
    const out: LicenseListItemUiModel = automapper.map('LicenseListItemApiModel', 'LicenseListItemUiModel', source);
    out.creationDate = new Date(source.creationDate);
    out.expirationDate = new Date(source.expirationDate);

    return out;
  }
}
