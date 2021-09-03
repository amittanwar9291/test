import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ContrastEnhancementPatternTypeEnum,
  ContrastEnhancementTypeEnum,
  CystsTypeEnum,
  FocalSignalVoidTypeEnum,
  HomogeneityTypeEnum,
  MediastinumGrowthPatternsTypeEnum
} from '@enums/thoraxMRT/mediastinum';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { MediastinumHelperService } from '../../mediastinum-helper.service';

@Component({
  selector: 'rr-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['./characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: MediastinumFindingUiModel;

  cystsTypeEnum = CystsTypeEnum;
  focalSignalVoidsTypeEnum = FocalSignalVoidTypeEnum;
  mediastinumGrowthPatternsTypeEnum = MediastinumGrowthPatternsTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementPatternTypeEnum = ContrastEnhancementPatternTypeEnum;

  isCMYes = false;

  constructor(private mediastinumHelperService: MediastinumHelperService) {
    this.mediastinumHelperService.isCMYes.subscribe(value => {
      this.isCMYes = value;
    });
  }

  clearCMHomogeneityType(value: ContrastEnhancementTypeEnum): string {
    return this.model.contrastEnhancementType !== value ? 'noCMEnhancementHomogeneityType-block contrastEnhancementPatternType-block' : '';
  }

  isContrastEnhancementNoOrNone(): boolean {
    return [this.contrastEnhancementTypeEnum.None, this.contrastEnhancementTypeEnum.No].includes(this.model.contrastEnhancementType);
  }
}
