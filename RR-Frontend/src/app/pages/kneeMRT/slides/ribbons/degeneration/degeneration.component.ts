import { Component, Input, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { AppConfig } from 'app/app.config';

import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';

import {
  RibbonsFindingTypeEnum,
  TearClassificationEnum,
  DislocationEnum,
  FlapTearTypeEnum,
  BucketHandleTearEnum,
  MeasurementEnum
} from '@enums/kneeMRT/ribbons';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

@Component({
  selector: 'rr-degeneration',
  templateUrl: './degeneration.component.html',
  styleUrls: ['./degeneration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DegenerationComponent {
  @Input() aussmeniscus: string;
  @Input() model: RibbonsFindingUiModel;
  @ViewChild(ReferencePictureComponent) referencePictureComponent: ReferencePictureComponent;

  findingType: typeof RibbonsFindingTypeEnum;
  tearClassification: typeof TearClassificationEnum;
  dislocation: typeof DislocationEnum;
  flapTearType: typeof FlapTearTypeEnum;
  bucketHandleTear: typeof BucketHandleTearEnum;
  measurement: typeof MeasurementEnum;

  constructor() {
    this.findingType = RibbonsFindingTypeEnum;
    this.tearClassification = TearClassificationEnum;
    this.dislocation = DislocationEnum;
    this.flapTearType = FlapTearTypeEnum;
    this.bucketHandleTear = BucketHandleTearEnum;
    this.measurement = MeasurementEnum;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.kneeMRT.ribbons.fileUpload;
  }

  resetClassification() {
    this.model.tearClassification = TearClassificationEnum.None;
    this.model.isSuperiorArticularSurface = false;
    this.model.isInferiorArticularSurface = false;
    this.model.dislocation = DislocationEnum.None;
    this.model.flapTearType = FlapTearTypeEnum.None;
    this.model.bucketHandleTear = BucketHandleTearEnum.None;
  }

  clearLocalizerBasedColumn() {
    if (!this.model.gradeClassification.grade3) {
      this.resetClassification();
    }
    if (!this.model.gradeClassification.grade2b) {
      this.deleteImageFile();
    }
  }

  deleteImageFile(): void {
    this.referencePictureComponent.resetReferencePicture();
  }

  getActivePart(): 'inner' | 'outer' {
    if (this.model.findingType === this.findingType.InnerMeniscusDegeneration) {
      return 'inner';
    }
    if (this.model.findingType === this.findingType.OuterMeniscusDegeneration) {
      return 'outer';
    }
  }

  isMeniscusGreaterThanZero(): boolean {
    if (this.model.meniscusDiameterMM > 0) {
      return true;
    } else {
      this.model.measurement = MeasurementEnum.None;
      return false;
    }
  }
}
