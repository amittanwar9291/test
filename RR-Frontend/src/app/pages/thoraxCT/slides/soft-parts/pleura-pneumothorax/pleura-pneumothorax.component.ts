import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsSiteTypeEnum } from '@enums/thoraxCT/soft-parts';
import { ExtensionTypeEnum, PneumothoraxTypeEnum } from '@enums/thoraxCT/soft-parts/pleura-pneumothorax';

import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { SoftPartsHelperService } from '../soft-parts-helper.service';

@Component({
  selector: 'rr-pleura-pneumothorax',
  templateUrl: './pleura-pneumothorax.component.html',
  styleUrls: ['./pleura-pneumothorax.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PleuraPneumothoraxComponent {
  @Input() findings: SoftPartsFindingUiModel[];
  @Input() model: SoftPartsFindingUiModel;

  siteTypeEnum = SoftPartsSiteTypeEnum;
  pneumothoraxTypeEnum = PneumothoraxTypeEnum;
  extensionTypeEnum = ExtensionTypeEnum;

  constructor(public softPartsHelperService: SoftPartsHelperService) {}
}
