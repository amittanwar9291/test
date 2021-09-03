import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalMassDiagnosisTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/cerebrospinal-mass-diagnosis-type.enum';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-mass-differential-diagnosis-tab',
  templateUrl: './mass-differential-diagnosis-tab.component.html',
  styleUrls: ['./mass-differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassDifferentialDiagnosisTabComponent implements OnInit, OnDestroy {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  diagnosisTypeEnum = CerebrospinalMassDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW042: DropdownModel[];
  ddlW043: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('headMRT.cerebrospinalFluid.w042.options').subscribe((out: DropdownModel[]) => {
        this.ddlW042 = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translateService.stream('headMRT.cerebrospinalFluid.w043.options').subscribe((out: DropdownModel[]) => {
        this.ddlW043 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDDLCheckboxes() {
    this.model.isSuspicionOf = false;
    this.clearSubordinateCheckbox();
  }

  clearSubordinateCheckbox() {
    this.model.isSubordinate = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
