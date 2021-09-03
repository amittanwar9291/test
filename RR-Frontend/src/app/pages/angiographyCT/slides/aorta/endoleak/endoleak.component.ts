import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { EndoleakClassificationTypeEnum } from '@enums/angiographyCT/aorta/endoleak/endoleak-classification-type.enum';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';
import { AortaHelperService } from '../aorta-helper.service';

@Component({
  selector: 'rr-endoleak',
  templateUrl: './endoleak.component.html',
  styleUrls: ['./endoleak.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EndoleakComponent {
  @Input() model: AortaFindingUiModel;

  endoleakClassificationType = EndoleakClassificationTypeEnum;

  constructor(private aortaHelperService: AortaHelperService) {}

  resetContent() {
    this.model.isAProximal = false;
    this.model.isBDistal = false;
    this.model.isInferiorMesentericArteryIma = false;
    this.model.isLumbarArteries = false;
  }

  openLargeLocalizer(isReentry: boolean): void {
    this.aortaHelperService.isLargeLocalizerOpened.next({
      isLocalizationReentry: isReentry,
      isSingleChoice: true,
      isArcusAortaeDivided: true
    });
  }
}
