import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/spineCT';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { Subscription } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { BonesDiagnosisTypeEnum } from '@enums/spineCT/bones/bones-diagnosis-type.enum';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  subscriptions: Subscription[] = [];

  differentialDiagnosisW022: DropdownModel[];
  differentialDiagnosisW023: DropdownModel[];

  bonesDiagnosisTypeEnum = BonesDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(t => t.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.bones.W022.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW022 = out;
      }),
      this.translate.stream('spineCT.bones.W023.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW023 = out;
      })
    );
  }

  resetDependDD1Fields() {
    this.model.isDD1SuspicionOf = false;
    this.resetDependDD2Fields();
  }

  resetDependDD2Fields() {
    this.model.isDD2Subordinate = false;
  }
}
