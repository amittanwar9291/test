import { Component, Input, ViewChild } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { AppConfig } from '../../../../../../app.config';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { PerforationTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';

@Component({
  selector: 'rr-bowel-diverticula-characterization-two',
  templateUrl: './bowel-diverticula-characterization-two.component.html',
  styleUrls: ['./bowel-diverticula-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BowelDiverticulaCharacterizationTwoComponent {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() isFemale: boolean;
  gender: GenderTypeEnum;
  genderTypeEnum = GenderTypeEnum;
  perforationType = PerforationTypeEnum;

  removeUploadedFile(): void {
    this.referencePictureComponent?.resetReferencePicture();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
