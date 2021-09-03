import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';

import { SequenceUiModel } from '@models/neckMRT/ui/technology/sequence-ui.model';
import { TechnologyUiModel } from '@models/neckMRT/ui/technology/technology-ui.model';
import { LarynxUiModel } from '@models/neckMRT/ui/larynx/larynx-ui.model';
import { SoftTissuesUiModel } from '@models/neckMRT/ui/soft-tissues/soft-tissues-ui.model';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { SequencesTypeEnum, WeightingTypeEnum } from '@enums/shared/technology';
import { CmDistributionTypeEnum, CmQuantitativeTypeEnum, HomogeneityTypeEnum as LarynxHomogeneityTypeEnum } from '@enums/neckMRT/larynx';
import {
  ContrastEnhancementDistributionTypeEnum as SoftTissuesContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum as SoftTissuesContrastEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum as SoftTissuesHomogeneityTypeEnum
} from '@enums/neckMRT/soft-tissues/mass-inflammation';

import {
  CmEnhancementDistributionTypeEnum,
  CmEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum as PharynxHomogenityTypeEnum
} from '@enums/neckMRT/pharynx';

import { NavigationService } from '@services/shared';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { PharynxUiModel } from '@models/neckMRT/ui/pharynx/pharynx-ui.model';
import { VesselsUiModel } from '@models/neckMRT/ui/vessels/vessels-ui.model';
import { BonesUiModel } from '@models/neckMRT/ui/bones/bones-ui.model';
import {
  BonesFindingTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum as BonesContrastEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum as BonesHomogeneityTypeEnum
} from '@enums/neckMRT/bones';
import { ThyroidUiModel } from '@models/neckMRT/ui/thyroid/thyroid-ui.model';
import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum,
  HomogeneityTypeEnum
} from '@enums/neckMRT/thyroid';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent extends TechnologyMrtBaseComponent<TechnologyUiModel, SequenceUiModel> implements OnInit {
  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public dialogService: DialogService,
    public preferencesHttpService: CenterspecificPreferencesHttpService,
    public technologyService: SideEffectsSectionService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      commonServices,
      dialogService,
      preferencesHttpService,

      TechnologyUiModel,
      SequenceUiModel,
      technologyService
    );
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRINeck);
  }

  preparePageConnection() {
    this.addPageConnection(
      4,
      PharynxUiModel,
      () => true,
      (model: PharynxUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.forEach(finding => {
            finding.cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum.None;
            finding.homogeneityType = PharynxHomogenityTypeEnum.None;
            finding.cmEnhancementDistributionType = CmEnhancementDistributionTypeEnum.None;
          });
        }

        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.forEach(finding => {
            finding.isDiffusionRestriction = false;
          });
        }
      }
    );

    this.addPageConnection(
      5,
      LarynxUiModel,
      () => true,
      (model: LarynxUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.forEach(finding => {
            finding.isMucosalContrastEnhancement = false;
            finding.cmQuantitativeType = CmQuantitativeTypeEnum.None;
            finding.cmHomogeneityType = LarynxHomogeneityTypeEnum.None;
            finding.cmDistributionType = CmDistributionTypeEnum.None;
          });
        }

        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.forEach(finding => {
            finding.isDiffusionRestriction = false;
          });
        }
      }
    );

    this.addPageConnection(
      6,
      SoftTissuesUiModel,
      () => true,
      (model: SoftTissuesUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.forEach(finding => {
            finding.isMNCStreakyContrastEnhancementPerifocal = false;
            finding.isLNCStreakyContrastEnhancementPerifocal = false;
            finding.isTCStreakyContrastEnhancementPerifocal = false;
            finding.contrastEnhancementQuantitativeType = SoftTissuesContrastEnhancementQuantitativeTypeEnum.None;
            finding.significantHomogeneityType = SoftTissuesHomogeneityTypeEnum.None;
            finding.contrastEnhancementDistributionType = SoftTissuesContrastEnhancementDistributionTypeEnum.None;
          });
        }

        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.forEach(finding => {
            finding.isDiffusionRestriction = false;
          });
        }
      }
    );

    this.addPageConnection(
      7,
      ThyroidUiModel,
      () => true,
      (model: ThyroidUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.forEach(finding => {
            finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.cmHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
          });
        }

        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.forEach(finding => {
            finding.isDiffusionRestriction = false;
          });
        }
      }
    );

    this.addPageConnection(
      9,
      VesselsUiModel,
      () => true,
      (model: VesselsUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.forEach(finding => {
            finding.isContrastEnhancementOfTheVesselWall = false;
          });
        }
      }
    );

    this.addPageConnection(
      10,
      BonesUiModel,
      () => true,
      (model: BonesUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          const spatialNeoplasmFindings = model.findings.filter(finding => finding.findingType === BonesFindingTypeEnum.SpatialNeoplasm);
          spatialNeoplasmFindings.forEach(finding => {
            finding.contrastEnhancementQuantitativeType = BonesContrastEnhancementQuantitativeTypeEnum.None;
            finding.subHomogeneityType = BonesHomogeneityTypeEnum.None;
            finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
          });
          const spondylodiscitisFindings = model.findings.filter(finding => finding.findingType === BonesFindingTypeEnum.Spondylodiscitis);
          spondylodiscitisFindings.forEach(finding => {
            finding.isContrastEnhancement = false;
            finding.isOsteomyelitis = false;
          });

          const osteomyelitisFindings = model.findings.filter(finding => finding.findingType === BonesFindingTypeEnum.Osteomyelitis);
          osteomyelitisFindings.forEach(finding => {
            finding.isPeripheralContrastEnhancement = false;
          });
        }
      }
    );
  }

  onContrastEnhancedChange() {
    super.onContrastEnhancedChange();
    this.model.isIntravenous = this.model.cmReinforcedType === SimpleAnswerEnum.Yes;
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.sequences.forEach(sequence => {
        sequence.isPostContrast = false;
        sequence.isPostContrastSubtraction = false;
        sequence.isPostContrastPerfusion = false;
      });
    }
  }
}
