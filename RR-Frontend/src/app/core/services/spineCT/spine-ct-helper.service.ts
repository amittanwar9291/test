import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { LocalizationUiModel } from '@models/spineCT';

@Injectable({
  providedIn: 'root'
})
export class SpineCtHelperService {
  public spineLocalizerPermittedSelection = new BehaviorSubject<SpineLocation>(null);

  public setAndReturnSpineLocalizerPermittedSelection(localizationUiModel: LocalizationUiModel) {
    this.spineLocalizerPermittedSelection.next(localizationUiModel.spineLocation);
    return this.spineLocalizerPermittedSelection.getValue();
  }
}
