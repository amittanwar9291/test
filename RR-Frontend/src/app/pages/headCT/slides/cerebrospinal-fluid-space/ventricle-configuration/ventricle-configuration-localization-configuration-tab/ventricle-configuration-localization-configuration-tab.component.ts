import { Component, Input } from '@angular/core';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { ConfigurationTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/configuration-type.enum';
import { ShrinkingTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/shrinking-type.enum';
import { AsymmetryTypeEnum } from '@enums/headCT/cerebrospinal-fluid-space/asymmetry-type.enum';

@Component({
  selector: 'rr-ventricle-configuration-localization-configuration-tab',
  templateUrl: './ventricle-configuration-localization-configuration-tab.component.html',
  styleUrls: ['./ventricle-configuration-localization-configuration-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VentricleConfigurationLocalizationConfigurationTabComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  configurationTypeEnum = ConfigurationTypeEnum;
  shrinkingTypeEnum = ShrinkingTypeEnum;
  asymmetryTypeEnum = AsymmetryTypeEnum;
}
