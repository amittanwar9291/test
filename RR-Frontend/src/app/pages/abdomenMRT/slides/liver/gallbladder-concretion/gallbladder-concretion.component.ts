import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { TopographyConcrementsTypeEnum, ClassificationAccordingToMcsherryTypeEnum, DetailsStoneTypeEnum } from '@enums/abdomenMRT/liver';
import { LiverFindingUiModel } from '@models/abdomenMRT/ui/liver/liver-finding-ui.model';
import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-gallbladder-concretion',
  templateUrl: './gallbladder-concretion.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GallbladderConcretionComponent {
  @Input() model: LiverFindingUiModel;

  topographyConcrementsType = TopographyConcrementsTypeEnum;
  classificationMcsherryType = ClassificationAccordingToMcsherryTypeEnum;
  detailsStoneType = DetailsStoneTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.liver.fileUpload;
  }
}
