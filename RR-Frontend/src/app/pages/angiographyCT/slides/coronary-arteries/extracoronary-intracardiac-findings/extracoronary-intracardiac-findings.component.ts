import { Component, Input, OnInit } from '@angular/core';
import { CoronaryArteriesFindingUiModel } from '@models/angiographyCT/ui/coronary-arteries/coronary-arteries-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { TechnologyUiModel } from '@models/spineMRT/ui/technology/technology-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { nameof } from 'ts-simple-nameof/src/nameof';

@Component({
  selector: 'rr-extracoronary-intracardiac-findings',
  templateUrl: './extracoronary-intracardiac-findings.component.html',
  styleUrls: ['./extracoronary-intracardiac-findings.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExtracoronaryIntracardiacFindingsComponent {
  @Input() model: CoronaryArteriesFindingUiModel;
  @Input() isCMYes: boolean;

  findingValidation = [
    nameof<CoronaryArteriesFindingUiModel>(m => m.isRightEnlargementAtrium),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isRightEnlargementVentricle),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isRightMyocardialHypertrophy),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isVenousContrastReflux),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isRightVentricularDiverticulum),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftEnlargementAtrium),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftEnlargementVentricle),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftMyocardialHypertrophy),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isThrombus),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftAtrium),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isLeftVentricularDiverticulum),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isEffusion),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isMass),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isPneumopericardium),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isCalcification),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isAtrialSeptalDefect),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isVentricularSeptalDefect),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isVentricularSeptalAneurysm),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isSeptumVentricularDiverticulum),
    nameof<CoronaryArteriesFindingUiModel>(m => m.isBicuspidAorticValve)
  ];
}
