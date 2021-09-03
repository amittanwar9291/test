import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastEnhancementTypeEnum, MediastinumGrowthPatternsTypeEnum } from '@enums/thoraxCT/mediastinum';

import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-additional-characteristics',
  templateUrl: './additional-characteristics.component.html',
  styleUrls: ['./additional-characteristics.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AdditionalCharacteristicsComponent {
  @Input() model: MediastinumFindingUiModel;
  @Input() additionalData: any;

  mediastinumGrowthPatternsTypeEnum = MediastinumGrowthPatternsTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  isCmSelectedInTechnologyPage(): boolean {
    return this.additionalData.isCmSelected === true;
  }
}
