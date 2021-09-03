import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IntervertebralDiscJointsFindingUiModel } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-finding-ui.model';
import {
  AnderssonFractureTypesEnum,
  AtlantooccipitalDistanceTypesEnum,
  DifferentialDiagnosisTypesEnum,
  EntheitisTypesEnum,
  PathologyTypesEnum,
  SpinalCanalStenosisTypesEnum,
  SpondylitisNumberTypesEnum
} from '@enums/spineMRT/intervertebral-disc-joints';
import { IntervertebralDiscJointsHelperService } from '../../intervertebral-disc-joints-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ImageFileTypeEnum } from '@enums/spineMRT/intervertebral-disc-joints/image-file-type.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { IntervertebralDiscJointsLargeLocalizerConfig } from '@models/spineMRT/ui/intervertebral-disc-joints/intervertebral-disc-joints-large-localizer-config.model';

@Component({
  selector: 'rr-tab-localization-pathology',
  templateUrl: './tab-localization-pathology.component.html',
  styleUrls: ['./tab-localization-pathology.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TabLocalizationPathologyComponent implements OnInit, OnDestroy {
  @Input('model') set setModel(value: IntervertebralDiscJointsFindingUiModel) {
    this.model = value;
    this.previousPathologyType = this.model.pathologyType;
  }

  model: IntervertebralDiscJointsFindingUiModel;
  previousPathologyType: PathologyTypesEnum;

  pathologyTypesEnum = PathologyTypesEnum;

  largeLocalizerOpenedSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private intervertebralDiscJointsHelperService: IntervertebralDiscJointsHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper,
    private spineHelperService: SpineHelperService
  ) {}

  ngOnInit() {
    this.largeLocalizerOpenedSubscription = this.intervertebralDiscJointsHelperService.largeLocalizerOpened.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.spineLocation) !== 'None') {
        this.validationHelperService.removeError(nameof<IntervertebralDiscJointsFindingUiModel>(m => m.spineLocation));
      }
    });
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  openLocalizer() {
    this.intervertebralDiscJointsHelperService.largeLocalizerOpened.next(
      new IntervertebralDiscJointsLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.OneDiscWithVertebre,
        'spineMRT.disc.selectIntervertebralDiscOfSegmentSingle.value'
      )
    );
  }

  shouldBeShown(pathologyType: PathologyTypesEnum | PathologyTypesEnum[]): boolean {
    return pathologyType === this.model.pathologyType || pathologyType.includes(this.model.pathologyType);
  }

  checkAndClearModel(clickedPathologyType: PathologyTypesEnum) {
    if (clickedPathologyType === this.previousPathologyType) {
      return;
    }
    this.clearEntheitis(true);
    this.clearDiscitis(true);
    this.clearArthritis();
    this.clearPeriostitis(true);
    this.model.isEntheitis = false;
    this.model.isDiscitis = false;
    this.model.isArthritis = false;
    this.model.isPeriostitis = false;
    this.previousPathologyType = clickedPathologyType;
    this.clearImages(Object.values(ImageFileTypeEnum));
    this.clearDifferentialDiagnosis();
  }

  clearEntheitis(noImageClearing?) {
    this.model.entheitisType = EntheitisTypesEnum.None;

    this.model.isSpondylitisAnterior = false;
    this.model.isAnteriorT1w = false;
    this.model.isAnteriorSTIR = false;
    this.model.isAnteriorContrastEnhancement = false;
    this.model.isSpondylitisPosterior = false;
    this.model.isPosteriorT1w = false;
    this.model.isPosteriorSTIR = false;
    this.model.isPosteriorContrastEnhancement = false;
    this.model.isSpondylitisMarginalis = false;
    this.model.isMarginalisT1w = false;
    this.model.isMarginalisSTIR = false;
    this.model.isMarginalisContrastEnhancement = false;
    this.model.spondylitisNumberType = SpondylitisNumberTypesEnum.None;

    this.model.isSclerosis = false;
    this.model.isT1wHyperintensity = false;
    this.model.isSTIRHypointense = false;
    this.model.isSyndesmophyterose = false;
    this.model.isParasyndesmophyte = false;
    this.model.isErosionOfAnteriorVertebraRomanusLesion = false;
    this.model.isVertebralBodySquaring = false;
    this.model.isMultisegmAnkylosing = false;
    this.model.isLigamentOssification = false;
    this.model.isAnteriorLongitudinalLigament = false;
    this.model.isPosteriorLongitudinalLigament = false;
    this.model.isLiggFlava = false;
    this.model.isLiggInterspinosa = false;
    this.model.isLiggSupraspinosa = false;
    if (!noImageClearing) {
      this.clearImages([ImageFileTypeEnum.AnteriorImageFile, ImageFileTypeEnum.MarginalisImageFile, ImageFileTypeEnum.PosteriorImageFile]);
    }
  }

  clearDiscitis(noImageClearing?) {
    this.model.isAnderssonLesion = false;
    this.model.isAnderssonFracture = false;
    this.model.anderssonFractureType = AnderssonFractureTypesEnum.None;
    if (!noImageClearing) {
      this.clearImages([ImageFileTypeEnum.DiscitisImageFile]);
    }
  }

  clearArthritis() {
    this.clearArthritisFacetJoints();
    this.clearArthritisAtlantooccipitalJointC1C2();
  }
  clearArthritisFacetJoints() {
    this.model.isBoneMarrowEdema = false;
    this.model.isSynovialitis = false;
    this.model.isJointEffusion = false;
    this.model.isAnkylosis = false;
    this.model.isErosions = false;
  }
  clearArthritisAtlantooccipitalJointC1C2() {
    this.model.isAtlantBoneMarrowEdema = false;
    this.model.isAtlantSynovialitis = false;
    this.model.isAtlantSynovialProliferation = false;
    this.model.isAtlantJointEffusion = false;
    this.model.isAtlantErosions = false;
    this.model.isDensErosion = false;
    this.model.atlantoOccipitaleDistanceType = AtlantooccipitalDistanceTypesEnum.None;
    this.model.spinalCanalStenosisType = SpinalCanalStenosisTypesEnum.None;
    this.model.widthOfTheSpinalCanalInMm = null;
  }

  clearPeriostitis(noImageClearing?) {
    this.model.isContrastEnhancement = false;
    this.model.isIrregularThickeningOfTheCorticalBone = false;
    if (!noImageClearing) {
      this.clearImages([ImageFileTypeEnum.DiscitisImageFile, ImageFileTypeEnum.PeriostitisImageFile]);
    }
  }

  ngOnDestroy() {
    this.largeLocalizerOpenedSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  clearImage(shouldNotBeClear, imageToClear: ImageFileTypeEnum): Promise<any> {
    if (shouldNotBeClear) {
      return;
    }
    return this.intervertebralDiscJointsHelperService.clearPicture(this.model, imageToClear);
  }

  clearImages(imagesTypes: ImageFileTypeEnum[]) {
    return this.intervertebralDiscJointsHelperService.clearFewPictures(this.model, imagesTypes);
  }

  clearDifferentialDiagnosis() {
    this.model.differentialDiagnosisType1 = DifferentialDiagnosisTypesEnum.None;
    this.model.differentialDiagnosisType2 = DifferentialDiagnosisTypesEnum.None;
    this.model.isSecondary = false;
  }
}
