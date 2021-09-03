import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PleuraSiteTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-site-type.enum';
import { ExtensionTypeEnum } from '@enums/thoraxMRT/pleura/pneumothorax/extension-type.enum';
import { PneumothoraxTypeEnum } from '@enums/thoraxMRT/pleura/pneumothorax/pneumothorax-type.enum';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { PleuraHelperService } from '../pleura-helper.service';

@Component({
  selector: 'rr-pneumothorax',
  templateUrl: './pneumothorax.component.html',
  styleUrls: ['./pneumothorax.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PneumothoraxComponent {
  @Input() findings: PleuraFindingUiModel[];
  @Input() model: PleuraFindingUiModel;

  siteTypeEnum = PleuraSiteTypeEnum;
  pneumothoraxTypeEnum = PneumothoraxTypeEnum;
  extensionTypeEnum = ExtensionTypeEnum;

  constructor(public pleuraHelperService: PleuraHelperService) {}
}
