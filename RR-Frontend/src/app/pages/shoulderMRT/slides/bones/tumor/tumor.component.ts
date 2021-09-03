import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { BonesPresetsHttpService } from '@services/shoulderMRT';

import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { TechnologyUiModel } from '@models/shoulderMRT/ui/technology/technology-ui.model';

@Component({
  selector: 'rr-tumor',
  templateUrl: './tumor.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetsHttpService
    }
  ]
})
export class TumorComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Input() technologyModel: TechnologyUiModel;

  subscriptions: Subscription[] = [];
  differentialDiagnosisArray: DropdownModel[];

  constructor(private translate: TranslateService) {}

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
      this.translate.stream('shoulderMRT.bones.tumorDifferentialDiagnosisList.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisArray = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
