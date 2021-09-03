import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BronchiectasisTypeEnum, LocalizationLevelTypeEnum } from '@enums/thoraxCT/lung-interstitium';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { LungInterstitiumHelperService, LungInterstitiumLargeLocalizerConfig } from '../../lung-interstitium-helper.service';

@Component({
  selector: 'rr-bronchial-tubes',
  templateUrl: './bronchial-tubes.component.html',
  styleUrls: ['./bronchial-tubes.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BronchialTubesComponent {
  @Input() model: LungInterstitiumFindingUiModel;

  constructor(
    private lungInterstitiumHelperService: LungInterstitiumHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  bronchiectasisTypeEnum = BronchiectasisTypeEnum;
  localizationLevelTypeEnum = LocalizationLevelTypeEnum;

  openLargeLocalizer(type: 'flaps' | 'segments', modelPropName: string) {
    this.lungInterstitiumHelperService.largeLocalizerOpen.next(new LungInterstitiumLargeLocalizerConfig(type, false, modelPropName, true));
  }

  clearLocalizers() {
    this.model.lungsSegmentsLocation = new LungsSegmentsModel();
    this.model.lungsFlapsLocation2 = new LungsFlapsModel();
    this.validationHelperService.removeError('lungsSegmentsLocation');
    this.validationHelperService.removeError('lungsFlapsLocation2');
  }
}
