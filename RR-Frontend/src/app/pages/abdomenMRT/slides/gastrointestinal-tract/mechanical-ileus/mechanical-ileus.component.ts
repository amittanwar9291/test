import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import {
  MechanicalLocalizationTypeEnum,
  PoststenoticSegmentTypeEnum,
  TransitionalSegmentTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/mechanical-ileus';
import { AppConfig } from '../../../../../app.config';

@Component({
  selector: 'rr-mechanical-ileus',
  templateUrl: './mechanical-ileus.component.html',
  styleUrls: ['./mechanical-ileus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MechanicalIleusComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  mechanicalLocalizationType = MechanicalLocalizationTypeEnum;
  poststenoticSegmentType = PoststenoticSegmentTypeEnum;
  transitionalSegmentType = TransitionalSegmentTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
