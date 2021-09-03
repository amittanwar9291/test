import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsDiagnosisTypeEnum } from '@enums/thoraxCT/soft-parts';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-differential-diagnosis-tab',
  templateUrl: './differential-diagnosis-tab.component.html',
  styleUrls: ['./differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisTabComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  softPartsDiagnosisTypeEnum = SoftPartsDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW033: DropdownModel[];
  ddlW034: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W033.options').subscribe((out: DropdownModel[]) => {
        this.ddlW033 = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W034.options').subscribe((out: DropdownModel[]) => {
        this.ddlW034 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDDL1Checkboxes() {
    this.model.isSuspected = false;
    this.model.isSubordinated = false;
    this.model.isCloakPleuralEffusion = false;
  }

  clearDDL2Checkboxes() {
    this.model.isSubordinated = false;
    if (this.model.differentialDiagnosis01 !== this.softPartsDiagnosisTypeEnum.PleuralEffusionTrapped) {
      this.model.isCloakPleuralEffusion = false;
    }
  }

  clearDDL3Checkbox() {
    if (
      this.model.differentialDiagnosis01 !== this.softPartsDiagnosisTypeEnum.PleuralEffusionTrapped &&
      this.model.differentialDiagnosis02 !== this.softPartsDiagnosisTypeEnum.PleuralEffusionTrapped
    ) {
      this.model.isCloakPleuralEffusion = false;
    }
  }

  isFirstDiagnosisSelected(): boolean {
    return (
      this.model.differentialDiagnosis01 !== this.softPartsDiagnosisTypeEnum.None ||
      this.model.differentialDiagnosis !== this.softPartsDiagnosisTypeEnum.None
    );
  }

  isDiagnosisNoDetails(diagnosis: SoftPartsDiagnosisTypeEnum): boolean {
    return ![this.softPartsDiagnosisTypeEnum.PleuralEffusionTrapped].includes(diagnosis);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
