import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AsymmetryTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/asymmetry-type.enum';
import { ConfigurationTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/configuration-type.enum';
import { ShrinkingTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/shrinking-type.enum';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';

@Component({
  selector: 'rr-ventricle-localization-tab',
  templateUrl: './ventricle-localization-tab.component.html',
  styleUrls: ['./ventricle-localization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationTabComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  configurationType = ConfigurationTypeEnum;
  shrinkingType = ShrinkingTypeEnum;
  asymmetryType = AsymmetryTypeEnum;

  resetConfigurationRelatedValues() {
    if (this.model.configurationType !== ConfigurationTypeEnum.Shrinking) {
      this.model.shrinkingType = ShrinkingTypeEnum.None;
    }
    if (this.model.configurationType !== ConfigurationTypeEnum.Widening) {
      this.model.shrinkingType = ShrinkingTypeEnum.None;
    }
    if (this.model.configurationType !== ConfigurationTypeEnum.Asymmetry) {
      this.model.asymmetryType = AsymmetryTypeEnum.None;
    }
  }
}
