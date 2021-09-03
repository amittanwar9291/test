import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BonesPresetHttpService } from '@services/spineCT/http/bones/bones-preset-http.service';

@Component({
  selector: 'rr-spine-ct-mass-spine',
  templateUrl: './mass-spine.component.html',
  styleUrls: ['./mass-spine.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetHttpService
    }
  ]
})
export class MassSpineComponent {
  @Input() model: BonesFindingUiModel;

  validationElements = [
    nameof<BonesFindingUiModel>(m => m.spineLocation),
    nameof<BonesFindingUiModel>(m => m.vertebralBodyLocalizations),
    nameof<BonesFindingUiModel>(m => m.bonesDiagnosis1),
    nameof<BonesFindingUiModel>(m => m.expansionMaxDiameterInMm)
  ].join(' ');
}
