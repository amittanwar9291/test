import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { CapsuleAndLigamentsPresetsHttpService } from '@services/hipMRT/http/capsule-and-ligaments/capsule-and-ligaments-presets-http.service';

import { CapsuleAndLigamentsFindingUiModel } from '@models/hipMRT/ui/capsule-and-ligaments/capsule-and-ligaments-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

@Component({
  selector: 'rr-synovia-mass',
  templateUrl: './synovia-mass.component.html',
  styleUrls: ['./synovia-mass.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: CapsuleAndLigamentsPresetsHttpService
    }
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SynoviaMassComponent implements OnInit, OnDestroy {
  @Input() model: CapsuleAndLigamentsFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  simpleAnswer: typeof SimpleAnswerEnum;

  subscriptions: Subscription[] = [];
  differentialDiagnosisArray: DropdownModel[];
  differentialDiagnosisArray2: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.simpleAnswer = SimpleAnswerEnum;
  }

  ngOnInit(): void {
    this.initSubscriptions();
  }

  private initSubscriptions(): void {
    this.subscriptions.push(
      this.translate.stream('hipMRT.capsuleAndLigaments.differentialDiagnosisList.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisArray = Object.values(out);
      }),
      this.translate.stream('hipMRT.capsuleAndLigaments.differentialDiagnosisList2.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisArray2 = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
