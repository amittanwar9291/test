import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/hipMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { VesselsLocalizationTypeEnum, VesselsPathologyTypeEnum } from '@enums/hipMRT/soft-tissue';

@Component({
  selector: 'rr-vessels',
  templateUrl: './vessels.component.html',
  styleUrls: ['./vessels.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VesselsComponent {
  @Input() model: SoftTissueFindingUiModel;

  vesselsPathologyType: typeof VesselsPathologyTypeEnum;
  vesselsLocalizationType: typeof VesselsLocalizationTypeEnum;

  constructor() {
    this.vesselsPathologyType = VesselsPathologyTypeEnum;
    this.vesselsLocalizationType = VesselsLocalizationTypeEnum;
  }

  resetAneurysmGroup(): void {
    this.model.vesselsLocalizationType = VesselsLocalizationTypeEnum.None;
    this.model.maxAxialDiameterInMm = null;
    this.model.craniocaudalExtensionInMm = null;
  }

  resetVaricosisGroup(): void {
    this.model.isIliacVeins = false;
    this.model.isSuperficialLegVeins = false;
    this.model.isDeepLegVeins = false;
  }
}
