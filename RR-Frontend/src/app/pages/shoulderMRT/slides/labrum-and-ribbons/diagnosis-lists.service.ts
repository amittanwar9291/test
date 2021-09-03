import { LabrumAndRibbonsDiagnosisUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-diagnosis-ui.model';
import { LocalizationLabrumPathology } from '@models/shoulderMRT/ui/localization-labrum-pathology/localization-labrum-pathology.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisListService {
  completeDiagnosisList: LabrumAndRibbonsDiagnosisUiModel[];
  private descriptionTypeChange$: Subject<void>;

  constructor() {
    this.descriptionTypeChange$ = new Subject<void>();
  }

  getDescriptionTypeChange(): Subject<void> {
    return this.descriptionTypeChange$;
  }

  registerDiagnosisList(val: LabrumAndRibbonsDiagnosisUiModel[]): void {
    this.completeDiagnosisList = val;
  }

  restrictDiagnosisList(labrumLocation: LocalizationLabrumPathology) {
    const labrumLocalization: Array<string> = [];
    const newList: LabrumAndRibbonsDiagnosisUiModel[] = [];

    this.addNonRestrictiveDiagnosisOptions(labrumLocation, labrumLocalization);

    if (!labrumLocalization) {
      return;
    }

    for (const item of this.completeDiagnosisList) {
      if (labrumLocalization.includes(item.groupName)) {
        newList.push(item);
      }
    }
    return newList;
  }

  addNonRestrictiveDiagnosisOptions(labrumLocation: LocalizationLabrumPathology, labrumLocalization: Array<string>) {
    Object.keys(labrumLocation).forEach(key => {
      if (labrumLocation[key]) {
        labrumLocalization.push(key);
      }
    });
  }
}
