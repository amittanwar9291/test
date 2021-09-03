import { Component, Input, ViewChild } from '@angular/core';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { ContrastEnhancementTypeEnum, InfarctStageTypeEnum } from '@enums/headMRT/vessels';
import { ControlContainer, NgForm } from '@angular/forms';
import { AppConfig } from 'app/app.config';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-ischemic-area-two',
  templateUrl: './ischemic-area-two.component.html',
  styleUrls: ['./ischemic-area-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IschemicAreaTwoComponent {
  @Input() model: VesselsFindingUiModel;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  infarctStageTypeEnum = InfarctStageTypeEnum;
  @Input() isCMYes: boolean;
  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.headMRT.vessels.fileUpload;
  }
}
