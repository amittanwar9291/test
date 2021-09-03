import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { AppConfig } from '../../../../../../app.config';
import { GastrointestinalDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';
import { MassTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/appendicitis';

@Component({
  selector: 'rr-appendicitis-differential-diagnosis',
  templateUrl: './appendicitis-differential-diagnosis.component.html',
  styleUrls: ['./appendicitis-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AppendicitisDifferentialDiagnosisComponent {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() differentialDiagnosis1Options: DropdownModel[];
  @Input() differentialDiagnosis2Options: DropdownModel[];

  subscriptions: Subscription[] = [];
  differentialDiagnosis1Type = GastrointestinalDifferentialDiagnosisTypeEnum;
  differentialDiagnosis2Type = GastrointestinalDifferentialDiagnosisTypeEnum;
  descriptionType = DescriptionTypeEnum;
  differentialDiagnosisType = GastrointestinalDifferentialDiagnosisTypeEnum;
  massType = MassTypeEnum;

  removeUploadedFile(): void {
    this.referencePictureComponent?.resetReferencePicture();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
