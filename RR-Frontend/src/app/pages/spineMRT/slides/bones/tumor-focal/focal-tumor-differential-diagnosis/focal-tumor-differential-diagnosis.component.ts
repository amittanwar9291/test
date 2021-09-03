import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesDiagnosisTypeEnum } from '@enums/spineMRT/bones/bones-diagnosis-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-focal-tumor-differential-diagnosis',
  templateUrl: './focal-tumor-differential-diagnosis.component.html',
  styleUrls: ['./focal-tumor-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FocalTumorDifferentialDiagnosisComponent implements OnInit {
  @Input() model: BonesFindingUiModel;

  translationSubscriptions: Subscription[] = [];
  differentialDiagnosisOptions1: DropdownModel[];
  differentialDiagnosisOptions2: DropdownModel[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('spineMRT.bones.differentialDiagnosisOptions1.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions1 = Object.values(out);
      })
    );

    this.translationSubscriptions.push(
      this.translate.stream('spineMRT.bones.differentialDiagnosisOptions2.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions2 = Object.values(out);
      })
    );
  }

  disabledDiagnosis(): boolean {
    return this.model.descriptionType === 'IKnow';
  }

  clearSubordinated(): void {
    this.model.isSecondary = false;
  }
}
