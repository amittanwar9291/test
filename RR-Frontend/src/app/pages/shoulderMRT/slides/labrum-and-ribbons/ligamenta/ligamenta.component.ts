import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { LabrumAndRibbonsFindingUiModel } from '@models/shoulderMRT/ui/labrum-and-ribbons/labrum-and-ribbons-findings-ui.model';

@Component({
  selector: 'rr-ligamenta',
  templateUrl: './ligamenta.component.html',
  styleUrls: ['../labrum-and-ribbons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LigamentaComponent {
  @Input() model: LabrumAndRibbonsFindingUiModel;

  characterizationOneCheckboxGroup =
    'isLigGlenohumeraleSuperior isLigGlenohumeraleMedium isLigGlenohumeraleInferior isLigCoracohumerale ' +
    'isRuptureLigCoracoacromiale isRuptureLigCoracoclaviculare isRuptureLigHumeriTransversum isRuptureLigSemicirculareHumeri';

  characterizationTwoCheckboxGroup =
    'isLigGlenohumerale isThickeningLigCoracohumerale isThickeningLigCoracoacromiale ' +
    'isThickeningLigCoracoclaviculare isThickeningLigHumeriTransversum isThickeningLigSemicirculareHumeri';

  characterizationCheckboxGroup = this.characterizationOneCheckboxGroup + ' ' + this.characterizationTwoCheckboxGroup;

  constructor() {}
}
