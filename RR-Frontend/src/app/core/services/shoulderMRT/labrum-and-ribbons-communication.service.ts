import { Injectable, OnDestroy } from '@angular/core';
import { LabrumAndRibbonsFindingType } from '@enums/shoulderMRT/labrum-and-ribbons';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabrumAndRibbonsCommunicationService implements OnDestroy {
  executeOnceFlag: boolean;
  findingHandler: DynamicComponentHandler<LabrumAndRibbonsFindingUiModel>;
  isReinitializedSubscription: Subscription;

  constructor() {}

  setFindingHandler(value) {
    this.findingHandler = value;
    this.setExecuteOnceFlag();
    this.isReinitializedSubscription = this.findingHandler.$isReinitialized.subscribe(out => {
      if (out) {
        this.setExecuteOnceFlag();
      }
    });
  }

  handleLigGlenohumeraleMediumSelection(): void {
    if (this.getAllProperLabrumFindingsAmount() > 0) {
      for (const f of this.getAllLigamentsFindings()) {
        f.isLigGlenohumeraleMedium = true;
      }
      this.executeOnceFlag = true;
    } else if (this.executeOnceFlag) {
      for (const f of this.getAllLigamentsFindings()) {
        f.isLigGlenohumeraleMedium = false;
        f.isDuplicateMGH = false;
      }
      this.executeOnceFlag = false;
    }
  }

  private getAllLigamentsFindings(): Array<LabrumAndRibbonsFindingUiModel> {
    return this.findingHandler.collection.filter(f => f.findingType === LabrumAndRibbonsFindingType.Ligaments);
  }

  private setExecuteOnceFlag(): void {
    this.executeOnceFlag = this.getAllProperLabrumFindingsAmount() > 0;
  }

  private getAllProperLabrumFindingsAmount(): number {
    return this.findingHandler.collection.filter(
      f =>
        f.findingType === LabrumAndRibbonsFindingType.Labrum &&
        f.extensionLabrumPathologyDiagnosis1 === 'SLAPLesionTypeVII' &&
        f.isDeleted === false
    ).length;
  }

  ngOnDestroy(): void {
    this.isReinitializedSubscription.unsubscribe();
  }
}
