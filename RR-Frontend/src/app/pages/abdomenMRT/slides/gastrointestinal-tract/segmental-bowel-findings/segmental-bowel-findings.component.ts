import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-segmental-bowel-findings',
  templateUrl: './segmental-bowel-findings.component.html',
  styleUrls: ['./segmental-bowel-findings.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SegmentalBowelFindingsComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isDWIInAnySequence: boolean;
  @Input() isCMReinforced: boolean;
  localizationValidation = [
    nameof<GastrointestinalTractFindingUiModel>(m => m.isDuodenum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isJejunum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isPreterminalIleum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isNeoterminalIleum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isTerminalIleum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isCecum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isVermiformAppendix),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isAscendingColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isHepaticFlexure),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isTransverseColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isSplenicFlexure),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isDescendingColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isSigmoidColon),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isRectum),
    nameof<GastrointestinalTractFindingUiModel>(m => m.isAnalCanal)
  ];
}
