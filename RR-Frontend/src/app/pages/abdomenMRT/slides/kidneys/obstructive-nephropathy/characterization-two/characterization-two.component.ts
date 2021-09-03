import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { AppConfig } from 'app/app.config';
import { ImageFileTypeEnum } from '@enums/abdomenMRT/kidneys/image-file-type.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-obstructive-characterization-two',
  templateUrl: './characterization-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: KidneysFindingUiModel;

  imageFileTypeEnum = ImageFileTypeEnum;

  obstructiveNephropathyChar2ReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_07_001_02',
    'uni_07_002_02',
    'uni_07_003_02',
    'uni_07_006_02',
    'uni_07_007_02',
    'uni_07_004_02',
    'uni_07_005_02'
  );

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.kidneys.fileUpload;
  }
}
