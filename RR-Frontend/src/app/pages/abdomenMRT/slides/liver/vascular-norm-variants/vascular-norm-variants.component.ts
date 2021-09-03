import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-vascular-norm-variants',
  templateUrl: './vascular-norm-variants.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VascularNormVariantsComponent {
  @Input() model: LiverFindingUiModel;

  vascularNormVariantsValidationGroup = [
    nameof<LiverFindingUiModel>(m => m.isCommonHepaticArtery),
    nameof<LiverFindingUiModel>(m => m.isCommonOriginOfCeliacArtery),
    nameof<LiverFindingUiModel>(m => m.isRightHepaticArtery),
    nameof<LiverFindingUiModel>(m => m.isLeftHepaticArtery),
    nameof<LiverFindingUiModel>(m => m.isTrifurcationHepaticArtery),
    nameof<LiverFindingUiModel>(m => m.isGastroduodenalArtery),
    nameof<LiverFindingUiModel>(m => m.isTruncusIncompletus),
    nameof<LiverFindingUiModel>(m => m.isTruncusCompletus)
  ].join(' ');
}
