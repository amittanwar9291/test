import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { CerebrospinalMassDiagnosisTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/cerebrospinal-mass-diagnosis-type.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-mass-differential-diagnosis-tab',
  templateUrl: './mass-differential-diagnosis-tab.component.html',
  styleUrls: ['./mass-differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassDifferentialDiagnosisTabComponent implements OnDestroy {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  w046: DropdownGroupedModel[];
  w047: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  descriptionTypeEnum = DescriptionTypeEnum;
  cerebrospinalMassDiagnosisTypeEnum = CerebrospinalMassDiagnosisTypeEnum;

  constructor(private translate: TranslateService) {
    this.subscriptions.push(
      translate.stream('headCT.cerebrospinalFluidSpace.w046.options').subscribe((out: DropdownGroupedModel[]) => (this.w046 = out)),
      translate.stream('headCT.cerebrospinalFluidSpace.w047.options').subscribe((out: DropdownGroupedModel[]) => (this.w047 = out))
    );
  }

  onMassDifferentialDiagnosisIDescribe1TypeChange() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  onMassDifferentialDiagnosis2TypeChange() {
    this.model.isSubordinate = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
