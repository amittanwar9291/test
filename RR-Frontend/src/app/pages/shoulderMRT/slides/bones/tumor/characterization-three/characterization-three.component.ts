import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { LocalPropagationTypeEnum, SecondTumorDifferentialDiagnosisEnum, TumorDifferentialDiagnosisEnum } from '@enums/shoulderMRT/bones';

@Component({
  selector: 'rr-characterization-three-tumor',
  templateUrl: './characterization-three.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class CharacterizationThreeComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Input() differentialDiagnosisArray: DropdownModel[];

  subscriptions: Subscription[] = [];
  secondDifferentialDiagnosisArray: DropdownModel[];
  descriptionType: typeof DescriptionTypeEnum;
  localPropagationType: typeof LocalPropagationTypeEnum;
  tumorDifferentialDiagnosis: typeof TumorDifferentialDiagnosisEnum;
  secondTumorDifferentialDiagnosis: typeof SecondTumorDifferentialDiagnosisEnum;

  constructor(private translate: TranslateService) {
    this.descriptionType = DescriptionTypeEnum;
    this.localPropagationType = LocalPropagationTypeEnum;
    this.tumorDifferentialDiagnosis = TumorDifferentialDiagnosisEnum;
    this.secondTumorDifferentialDiagnosis = SecondTumorDifferentialDiagnosisEnum;
  }

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('shoulderMRT.bones.tumorSecondDifferentialDiagnosisList.options').subscribe((out: DropdownModel[]) => {
        this.secondDifferentialDiagnosisArray = Object.keys(out).map(e => out[e]);
      })
    );
  }

  private getFirstDiagnosis(): TumorDifferentialDiagnosisEnum {
    return this.model.descriptionType === DescriptionTypeEnum.IKnow
      ? this.model.tumorDifferentialDiagnosis
      : this.model.differentialDiagnosis01;
  }

  get isDifferentialDiagnosisPartDisabled(): boolean {
    return (
      this.model.descriptionType === DescriptionTypeEnum.IKnow &&
      this.model.tumorDifferentialDiagnosis === TumorDifferentialDiagnosisEnum.None
    );
  }

  get isDifferentialDiagnosis02Disabled(): boolean {
    return this.getFirstDiagnosis() === TumorDifferentialDiagnosisEnum.None;
  }

  clearIsSubordinated() {
    this.model.isSubordinated = false;
  }
}
