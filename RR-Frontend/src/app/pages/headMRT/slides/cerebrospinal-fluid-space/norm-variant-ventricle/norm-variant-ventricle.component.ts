import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NormVariantVentricleTypeEnum } from '@enums/headMRT/cerebrospinal-fluid-space/norm-variant-ventricle-type.enum';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';

@Component({
  selector: 'rr-norm-variant-ventricle',
  templateUrl: './norm-variant-ventricle.component.html',
  styleUrls: ['./norm-variant-ventricle.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NormVariantVentricleComponent {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;

  normVariantVentricleType = NormVariantVentricleTypeEnum;
}
