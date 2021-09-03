import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HuangClassificationTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-bile-duct-norm-variant',
  templateUrl: './bile-duct-norm-variant.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BileDuctNormVariantComponent {
  @Input() model: LiverFindingUiModel;
  @Input() bileDuctNormVariantDDOptions: DropdownModel[];

  huangClassificationType = HuangClassificationTypeEnum;
}
