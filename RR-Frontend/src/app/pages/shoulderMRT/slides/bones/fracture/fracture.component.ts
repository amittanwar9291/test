import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { BonesFindingUiModel } from '@models/shoulderMRT/ui/bones/bones-finding-ui.model';

import { ReferencePictureComponent } from '@controls/reference-picture/reference-picture.component';

import {
  AoClassificationAo12TypeEnum,
  AoClassificationFractureTypeEnum,
  BoneTypeEnum,
  FractureClassificationTypeEnum,
  FractureClaviculaEvaluationTypeEnum,
  FractureClaviculaRatingTypeEnum,
  FractureNotSpecifiedTypeEnum,
  FractureProximalerAoEvaluationTypeEnum,
  FractureProximalerAoRatingTypeEnum,
  FractureProximalerNeerDetailsTypeEnum,
  FractureProximalerNeerRatingTypeEnum,
  FractureScapulaEvaluationTypeEnum,
  FractureScapulaRatingTypeEnum,
  FractureSpecificTypeEnum
} from '@enums/shoulderMRT/bones';

import { AppConfig } from 'app/app.config';

@Component({
  selector: 'rr-fracture',
  templateUrl: './fracture.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class FractureComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @ViewChild(ReferencePictureComponent) referencePicture: ReferencePictureComponent;

  boneType: typeof BoneTypeEnum;
  previousBoneType: BoneTypeEnum;
  previousfractureProximalerNeerRatingType: FractureProximalerNeerRatingTypeEnum;

  fractureNotSpecifiedType: typeof FractureNotSpecifiedTypeEnum;
  fractureClassificationType: typeof FractureClassificationTypeEnum;
  fractureProximalerAoRatingType: typeof FractureProximalerAoRatingTypeEnum;
  fractureProximalerAoEvaluationType: typeof FractureProximalerAoEvaluationTypeEnum;
  fractureProximalerNeerRatingType: typeof FractureProximalerNeerRatingTypeEnum;
  fractureHumerusNeerDetailsType: typeof FractureProximalerNeerDetailsTypeEnum;
  fractureClaviculaEvaluationType: typeof FractureClaviculaEvaluationTypeEnum;
  previousFractureClaviculaEvaluationType: FractureClaviculaEvaluationTypeEnum;
  fractureClaviculaRatingType: typeof FractureClaviculaRatingTypeEnum;
  fractureScapulaEvaluationType: typeof FractureScapulaEvaluationTypeEnum;
  previousFractureScapulaEvaluationType: FractureScapulaEvaluationTypeEnum;
  fractureScapulaRatingType: typeof FractureScapulaRatingTypeEnum;
  aoClassificationAo12Type: typeof AoClassificationAo12TypeEnum;
  previousAoClassificationAo12Type: AoClassificationAo12TypeEnum;
  aoClassificationFractureType: typeof AoClassificationFractureTypeEnum;
  fractureSpecificType: typeof FractureSpecificTypeEnum;

  constructor() {
    this.boneType = BoneTypeEnum;
    this.fractureNotSpecifiedType = FractureNotSpecifiedTypeEnum;
    this.fractureClassificationType = FractureClassificationTypeEnum;
    this.fractureProximalerAoRatingType = FractureProximalerAoRatingTypeEnum;
    this.fractureProximalerAoEvaluationType = FractureProximalerAoEvaluationTypeEnum;
    this.fractureProximalerNeerRatingType = FractureProximalerNeerRatingTypeEnum;
    this.fractureHumerusNeerDetailsType = FractureProximalerNeerDetailsTypeEnum;
    this.fractureClaviculaEvaluationType = FractureClaviculaEvaluationTypeEnum;
    this.fractureClaviculaRatingType = FractureClaviculaRatingTypeEnum;
    this.fractureScapulaEvaluationType = FractureScapulaEvaluationTypeEnum;
    this.fractureScapulaRatingType = FractureScapulaRatingTypeEnum;
    this.aoClassificationAo12Type = AoClassificationAo12TypeEnum;
    this.aoClassificationFractureType = AoClassificationFractureTypeEnum;
    this.fractureSpecificType = FractureSpecificTypeEnum;
  }

  ngOnInit(): void {
    this.previousfractureProximalerNeerRatingType = this.model.fractureHumerusNeerRatingType;
  }

  get fileUploadUrl(): string {
    return AppConfig.settings.servicesUrls.shoulderMRT.bones.fileUpload;
  }

  clearClaviculaEvaluationType(): void {
    if (this.previousFractureClaviculaEvaluationType !== this.model.fractureClaviculaEvaluationType) {
      this.model.fractureClaviculaAoClassificationType = FractureClaviculaRatingTypeEnum.None;
      this.model.fractureNotSpecifiedType = FractureNotSpecifiedTypeEnum.None;
    }

    this.previousFractureClaviculaEvaluationType = this.model.fractureClaviculaEvaluationType;
  }

  clearScapulaEvaluationType(): void {
    if (this.previousFractureScapulaEvaluationType !== this.model.fractureScapulaEvaluationType) {
      this.model.fractureScapulaAoClassificationType = FractureScapulaRatingTypeEnum.None;
      this.model.fractureNotSpecifiedType = FractureNotSpecifiedTypeEnum.None;
    }

    this.previousFractureScapulaEvaluationType = this.model.fractureScapulaEvaluationType;
  }

  clearAoClassificationAo12Type(): void {
    if (this.previousAoClassificationAo12Type !== this.model.aoClassificationAO12Type) {
      this.model.aoClassificationFractureType = AoClassificationFractureTypeEnum.None;
      this.model.fractureSpecificType = FractureSpecificTypeEnum.None;
      this.model.fractureNotSpecifiedType = FractureNotSpecifiedTypeEnum.None;
    }

    this.previousAoClassificationAo12Type = this.model.aoClassificationAO12Type;
  }

  get isFractureSpecificTypeFirstPartDisabled() {
    return !this.isAoClassFractureTypeIncluded([
      this.aoClassificationFractureType.A1SpiralFracture,
      this.aoClassificationFractureType.A2ObliqueFracture,
      this.aoClassificationFractureType.A3TransverseFracture,
      this.aoClassificationFractureType.B2WithIntactWedge,
      this.aoClassificationFractureType.B3WithFragmentedWedge
    ]);
  }

  get isFractureSpecificTypeSecondPartDisabled() {
    return !this.isAoClassFractureTypeIncluded([
      this.aoClassificationFractureType.C2IntermediateFragmentIntact,
      this.aoClassificationFractureType.C3IntermediateSegmentComminuted
    ]);
  }

  private isAoClassFractureTypeIncluded(fractureTypes: AoClassificationFractureTypeEnum[]): boolean {
    return fractureTypes.includes(this.model.aoClassificationFractureType);
  }

  get isOnlyReferencePictureIn5thColumn(): boolean {
    return [FractureProximalerNeerRatingTypeEnum.None, FractureProximalerNeerRatingTypeEnum.DisplacedAnatomicalNeck].includes(
      this.model.fractureHumerusNeerRatingType
    );
  }

  clearReferencePictureOnBoneTypeClick(): void {
    if (this.previousBoneType !== this.model.boneType && !!this.referencePicture) {
      this.referencePicture?.resetReferencePicture();
    }
    this.previousBoneType = this.model.boneType;
  }

  get aoClassificationAO12TypeSpecified() {
    return ![AoClassificationAo12TypeEnum.None, AoClassificationAo12TypeEnum.NotSpecified].includes(this.model.aoClassificationAO12Type);
  }

  resetFractureTuberculeBlock(): void {
    if (this.model.fractureHumerusNeerRatingType !== this.previousfractureProximalerNeerRatingType) {
      this.model.fractureHumerusNeerDetailsType = FractureProximalerNeerDetailsTypeEnum.None;
    }

    this.previousfractureProximalerNeerRatingType = this.model.fractureHumerusNeerRatingType;
  }
}
