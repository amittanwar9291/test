import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacetTypeEnum } from '@enums/handMRT/bones/';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';

@Component({
  selector: 'rr-norm-variants-of-os-lunatum',
  templateUrl: './norm-variants-of-os-lunatum.component.html',
  styleUrls: ['./norm-variants-of-os-lunatum.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NormVariantsOfOsLunatumComponent {
  @Input() model: BonesFindingUiModel;

  facetType = FacetTypeEnum;
}
