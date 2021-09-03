import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-tumor-diffuse-differential-diagnosis',
  templateUrl: './tumor-diffuse-differential-diagnosis.component.html',
  styleUrls: ['./tumor-diffuse-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TumorDiffuseDifferentialDiagnosisComponent implements OnInit {
  @Input() model: BonesFindingUiModel;

  translationSubscriptions: Subscription[] = [];
  differentialDiagnosisOptions1: DropdownModel[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('spineMRT.bones.differentialDiagnosisDiffuseOptions.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions1 = Object.values(out);
      })
    );
  }

  disabledDiagnosis(): boolean {
    return this.model.descriptionType === 'IKnow';
  }

  clearSubordinated() {
    this.model.isSecondary = false;
  }
}
