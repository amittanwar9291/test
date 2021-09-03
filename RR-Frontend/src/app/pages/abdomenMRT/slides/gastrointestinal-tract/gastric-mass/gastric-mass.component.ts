import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { GastrointestinalTractPresetHttpService } from '@services/abdomenMRT/http/gastrointestinal-tract/gastrointestinal-tract-preset-http.service';

@Component({
  selector: 'rr-gastric-mass',
  templateUrl: './gastric-mass.component.html',
  styleUrls: ['./gastric-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: GastrointestinalTractPresetHttpService
    }
  ]
})
export class GastricMassComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isCMReinforced: boolean;
  chracterizationValidation = [nameof<GastrointestinalTractFindingUiModel>(m => m.differentialDiagnosisType)];
}
