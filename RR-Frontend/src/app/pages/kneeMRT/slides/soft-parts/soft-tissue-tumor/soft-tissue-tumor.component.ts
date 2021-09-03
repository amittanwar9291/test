import { Component, Input } from '@angular/core';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { SoftPartsPresetsHttpService } from '@services/kneeMRT/http/soft-parts/soft-parts-presets-http.service';

@Component({
  selector: 'rr-soft-tissue-tumor',
  templateUrl: './soft-tissue-tumor.component.html',
  styleUrls: ['./soft-tissue-tumor.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: SoftPartsPresetsHttpService
    }
  ]
})
export class SoftTissueTumorComponent {
  @Input() model: SoftPartsFindingUiModel;
  @Input() isCMReinforcedTypeYes: boolean;
}
