import { Injectable } from '@angular/core';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { BehaviorSubject } from 'rxjs';
import { compact } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class LiverHelperService {
  isLocalizerOpened = new BehaviorSubject<boolean>(false);
  isCMReinforced = new BehaviorSubject<boolean>(false);
  isDWIInAnySequence = new BehaviorSubject<boolean>(false);
  technologyContrastMediumType = new BehaviorSubject<string>(null);
  isOneLocalizerSectionOrAnyLobeCheckbox = new BehaviorSubject<boolean>(false);

  checkIfShouldDisableReferencePicture(model: LiverFindingUiModel): void {
    const isOneCheckboxInLocalizationLobeBlock =
      [model.isRightLobeOfLiver, model.isLeftLobeOfLiver, model.isLobusCaudatus, model.isLobusQuadratus].filter(el => el === true)
        .length === 1;

    const isOneLocalizerSectionSelected = compact(Object.values(model.liverSegmentsLocations)).length === 1;

    this.isOneLocalizerSectionOrAnyLobeCheckbox.next(isOneCheckboxInLocalizationLobeBlock || isOneLocalizerSectionSelected);
  }

  resetExtensionInputs(model: LiverFindingUiModel): void {
    if (!model.sizeInMm) {
      model.secondPlaneInMm = null;
      model.thirdPlaneInMm = null;
    } else if (!model.secondPlaneInMm) {
      model.thirdPlaneInMm = null;
    }
  }
}
