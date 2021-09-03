import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { BladderPresetsHttpService } from '@services/pelvisMRT/http/bladder/bladder-presets-http.service';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';

@Component({
  selector: 'rr-soft-tissue-mass',
  templateUrl: './soft-tissue-mass.component.html',
  styleUrls: ['./soft-tissue-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [{ provide: DifferentialDiagnosisPresetService, useClass: BladderPresetsHttpService }]
})
export class SoftTissueMassComponent {
  @Input() model: BladderFindingUiModel;
}
