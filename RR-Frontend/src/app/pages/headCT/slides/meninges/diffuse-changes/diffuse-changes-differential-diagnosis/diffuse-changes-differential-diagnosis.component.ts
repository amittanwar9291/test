import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MeningesFindingUiModel } from '@models/headCT/ui/meninges/meninges-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { MeningesDiagnosisType } from '@enums/headCT/meninges/meninges-diagnosis-type.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-diffuse-changes-differential-diagnosis',
  templateUrl: './diffuse-changes-differential-diagnosis.component.html',
  styleUrls: ['./diffuse-changes-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiffuseChangesDifferentialDiagnosisComponent implements OnDestroy {
  @Input() model: MeningesFindingUiModel;
  w022: DropdownGroupedModel[];
  w023: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  meningesDiagnosisType = MeningesDiagnosisType;

  constructor(private translate: TranslateService) {
    this.subscriptions.push(
      translate.stream('headCT.meninges.w022.options').subscribe((out: DropdownGroupedModel[]) => (this.w022 = out)),
      translate.stream('headCT.meninges.w023.options').subscribe((out: DropdownGroupedModel[]) => (this.w023 = out))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearDifferentialDiagnosis1DependentFields() {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  clearDifferentialDiagnosis2DependentFields() {
    this.model.isSubordinate = false;
  }
}
