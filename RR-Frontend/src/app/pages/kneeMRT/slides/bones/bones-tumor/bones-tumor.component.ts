import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { KneeBonesFindingUiModel } from '@models/kneeMRT/ui/bones/knee-bones-finding-ui.model';
import { BonesPresetsHttpService } from '@services/kneeMRT/http/bones/bones-presets-http.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

@Component({
  selector: 'rr-bones-tumor',
  templateUrl: './bones-tumor.component.html',
  styleUrls: ['./bones-tumor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetsHttpService
    }
  ]
})
export class BonesTumorComponent {
  @Input() model: KneeBonesFindingUiModel;
  @Input() descriptionArray: string[];
  @Input() isCMYes: boolean;

  subscriptions: Subscription[] = [];
  diagnosisList1: DropdownModel[];
  diagnosisList2: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('kneeMRT.bones.bonesTumorDiagnosisList1.options').subscribe((out: DropdownModel[]) => {
        this.diagnosisList1 = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('kneeMRT.bones.bonesTumorDiagnosisList2.options').subscribe((out: DropdownModel[]) => {
        this.diagnosisList2 = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
