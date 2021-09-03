import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PancreasFindingUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-ui.model';
import { PathologyTypeEnum, PostoperativeFindingTypeEnum } from '@enums/abdomenMRT/pancreas/postinterventional-postoperative-findings';
import { AppConfig } from '../../../../../app.config';

@Component({
  selector: 'rr-postinterventional-findings',
  templateUrl: './postinterventional-findings.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PostinterventionalFindingsComponent {
  @Input() model: PancreasFindingUiModel;

  postoperativeFindingType = PostoperativeFindingTypeEnum;
  pathologyType = PathologyTypeEnum;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.pancreas.fileUpload;
  }
}
