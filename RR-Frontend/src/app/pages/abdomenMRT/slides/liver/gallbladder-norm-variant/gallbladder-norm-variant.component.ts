import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GallbladderNormVariantPostoperativeTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';

@Component({
  selector: 'rr-gallbladder-norm-variant',
  templateUrl: './gallbladder-norm-variant.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GallbladderNormVariantComponent {
  @Input() model: LiverFindingUiModel;

  gallbladderNormVariantPostoperativeType = GallbladderNormVariantPostoperativeTypeEnum;
}
