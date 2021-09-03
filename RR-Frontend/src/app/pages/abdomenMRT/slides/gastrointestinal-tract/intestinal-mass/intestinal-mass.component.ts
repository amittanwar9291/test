import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { nameof } from 'ts-simple-nameof';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { GastrointestinalTractPresetHttpService } from '@services/abdomenMRT/http/gastrointestinal-tract/gastrointestinal-tract-preset-http.service';

@Component({
  selector: 'rr-intestinal-mass',
  templateUrl: './intestinal-mass.component.html',
  styleUrls: ['./intestinal-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: GastrointestinalTractPresetHttpService
    }
  ]
})
export class IntestinalMassComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isCMReinforced: boolean;

  localizationCheckboxGroup = [
    nameof<GastrointestinalTractFindingUiModel>(m => m.isAnalCanal),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isAscendingColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isCecum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isDescendingColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isDuodenum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isHepaticFlexure),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isIleum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isJejunum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumUpperThird),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumLowerThird),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isRectumMiddleThird),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isSigmoidColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isSplenicFlexure),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isTransverseColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isVermiformAppendix)
  ].join(' ');

  localizationValidation = [
    nameof<GastrointestinalTractFindingUiModel>(m => m.differentialDiagnosisType),
    nameof<GastrointestinalTractFindingUiModel>(m => m.measurementIntestinalWallInMm),
    this.localizationCheckboxGroup
  ];
}
