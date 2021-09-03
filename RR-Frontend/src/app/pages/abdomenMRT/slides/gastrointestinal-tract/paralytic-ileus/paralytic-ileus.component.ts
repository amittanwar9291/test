import { Component, Input, ViewChild } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { AppConfig } from '../../../../../app.config';
import { PathogenesisTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/paralytic-ileus';

@Component({
  selector: 'rr-paralytic-ileus',
  templateUrl: './paralytic-ileus.component.html',
  styleUrls: ['./paralytic-ileus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParalyticIleusComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;

  pathogenesisType = PathogenesisTypeEnum;
  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
