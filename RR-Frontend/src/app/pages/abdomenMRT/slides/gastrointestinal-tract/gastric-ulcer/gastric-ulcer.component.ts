import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';
import { AppConfig } from '../../../../../app.config';
import { Subscription } from 'rxjs';
import { GastricLocalizationTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';

@Component({
  selector: 'rr-gastric-ulcer',
  templateUrl: './gastric-ulcer.component.html',
  styleUrls: ['./gastric-ulcer.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GastricUlcerComponent implements OnDestroy {
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;
  @Input() model: GastrointestinalTractFindingUiModel;
  gastricLocalizationType = GastricLocalizationTypeEnum;
  subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  resetInput() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    } else if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  removeUploadedFile(): void {
    this.referencePictureComponent?.resetReferencePicture();
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.abdomenMRT.gastrointestinalTract.fileUpload;
  }
}
