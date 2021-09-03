import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';

import { DifferentialDiagnosisEnum } from '@enums/cardioMRT/pericardium-vessels';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class DifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: PericardiumVesselsFindingUiModel;

  subscriptions: Subscription[] = [];
  differentialDiagnosis01List: DropdownModel[];
  differentialDiagnosis02List: DropdownModel[];
  differentialDiagnosisType: typeof DifferentialDiagnosisEnum;

  constructor(private translate: TranslateService) {
    this.differentialDiagnosisType = DifferentialDiagnosisEnum;
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('cardioMRT.pericardiumVessels.extendedDifferentialDiagnosisList.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosis01List = out;
      }),

      this.translate.stream('cardioMRT.pericardiumVessels.differentialDiagnosisList.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosis02List = out;
      })
    );
  }

  clearDiagnosis(level: number): void {
    if (level === 0) {
      this.clearIsSuspicionOf();
      this.clearIsSubordinated();
      this.model.differentialDiagnosis02 = DifferentialDiagnosisEnum.None;
    } else if (level === 1) {
      this.clearIsSubordinated();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  clearIsSuspicionOf() {
    this.model.isSuspicionOf = false;
  }

  clearIsSubordinated() {
    this.model.isSubordinated = false;
  }
}
