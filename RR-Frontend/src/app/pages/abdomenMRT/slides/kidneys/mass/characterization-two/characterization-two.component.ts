import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { NormVariantOrAnomalyTypeEnum } from '@enums/abdomenMRT/kidneys';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AppConfig } from 'app/app.config';
import { ImageFileTypeEnum } from '@enums/abdomenMRT/kidneys/image-file-type.enum';
import { ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';

@Component({
  selector: 'rr-mass-characterization-two',
  templateUrl: './characterization-two.component.html',
  styleUrls: ['../../kidneys.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationTwoComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() isDWI: boolean;
  @Input() extensionOptions: DropdownModel[];

  vascularInfiltrationType = NormVariantOrAnomalyTypeEnum;

  imageFileTypeEnum = ImageFileTypeEnum;

  massReferencePictureElementsRrIds = new ReferencePictureRRIds(
    'uni_07_001',
    'uni_07_002',
    'uni_07_003',
    'uni_07_006',
    'uni_07_007',
    'uni_07_004',
    'uni_07_005'
  );

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.kidneys.fileUpload;
  }
}
