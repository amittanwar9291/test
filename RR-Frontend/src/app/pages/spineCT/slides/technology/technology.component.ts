import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { TechnologyCtBaseComponent } from '@abstractions/technology-base/technology-ct-base.component';

import { BonesUiModel, DiscUiModel, MyelonUiModel, SoftTissuesUiModel, TechnologyUiModel } from '@models/spineCT';
import { AcquisitionUiModel } from '@models/spineCT/ui/technology/acquisition-ui.model';
import { ReconstructionFindingUiModel } from '@models/spineCT/ui/technology/reconstruction-finding-ui.model';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { ContrastEnhancementQuantitativeTypeEnum as MyelonCMQuantitativeTypeEnum } from '@enums/spineCT/myelon/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/myelon/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum as MyelonCMDistributionTypeEnum } from '@enums/spineCT/myelon/contrast-enhancement-distribution-type.enum';
import { ContrastEnhancementDistributionTypeEnum as SoftTissueCMDistributionTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/contrast-enhancement-distribution-type.enum';
import { SignificantTypeEnum } from '@enums/spineCT/bones/mass-spine/significant-type.enum';
import { ContrastEnhancementDistributionTypeEnum as BonesCMDistributionTypeEnum } from '@enums/spineCT/bones/mass-spine/contrast-enhancement-distribution-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum as BonesCMQuantitativeTypeEnum } from '@enums/spineCT/bones/mass-spine/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum as SoftTissueCMQuantitativeTypeEnum } from '@enums/spineCT/soft-tissues/paraspinal-mass/contrast-enhancement-quantitative-type.enum';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent extends TechnologyCtBaseComponent<TechnologyUiModel, AcquisitionUiModel, ReconstructionFindingUiModel>
  implements OnInit {
  descriptionArray: string[];

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
      AcquisitionUiModel,
      ReconstructionFindingUiModel,
      technologyService
    );
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.CTSpine);
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.imageQualityValues').subscribe(out => {
        this.descriptionArray = Object.values(out);
      })
    );
  }

  protected resetCustomAcquisitionsControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.acquisitions.forEach(acquisition => {
        acquisition.isNative = false;
        acquisition.isArterial = false;
        acquisition.isVenous = false;
        acquisition.isLate = false;
        acquisition.lateDelayInMin = null;
        acquisition.isCTMyelography = false;
      });
    }
  }

  preparePageConnection(): void {
    const PCO5 = this.preparePage5ConnectionObject();
    const PCO6 = this.preparePage6ConnectionObject();
    const PCO7 = this.preparePage7ConnectionObject();
    const PCO8 = this.preparePage8ConnectionObject();
    this.addPageConnection(PCO5.pageNr, DiscUiModel, PCO5.condition, PCO5.callback);
    this.addPageConnection(PCO6.pageNr, BonesUiModel, PCO6.condition, PCO6.callback);
    this.addPageConnection(PCO7.pageNr, MyelonUiModel, PCO7.condition, PCO7.callback);
    this.addPageConnection(PCO8.pageNr, SoftTissuesUiModel, PCO8.condition, PCO8.callback);
  }

  private preparePage5ConnectionObject(): IPageConnection<DiscUiModel> {
    const condition = () => true;
    const callback = (model: DiscUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.forEach(item => (item.isContrastEnhancementOfTheDisc = false));
      }
    };

    return {
      pageNr: 5,
      condition,
      callback
    };
  }

  private preparePage6ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => true;
    const callback = (model: BonesUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.forEach(item => {
          item.contrastEnhancementQuantitativeType = BonesCMQuantitativeTypeEnum.None;
          item.significantType = SignificantTypeEnum.None;
          item.contrastEnhancementDistribution = BonesCMDistributionTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 6,
      condition,
      callback
    };
  }

  private preparePage7ConnectionObject(): IPageConnection<MyelonUiModel> {
    const condition = () => true;
    const callback = (model: MyelonUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.forEach(item => {
          item.contrastEnhancementQuantitativeType = MyelonCMQuantitativeTypeEnum.None;
          item.ddHomogeneityType = HomogeneityTypeEnum.None;
          item.contrastEnhancementDistributionType = MyelonCMDistributionTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 7,
      condition,
      callback
    };
  }

  private preparePage8ConnectionObject(): IPageConnection<SoftTissuesUiModel> {
    const condition = () => true;
    const callback = (model: SoftTissuesUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.forEach(item => {
          item.contrastEnhancementQuantitativeType = SoftTissueCMQuantitativeTypeEnum.None;
          item.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
          item.contrastEnhancementDistributionType = SoftTissueCMDistributionTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 8,
      condition,
      callback
    };
  }

  resetCustomContrastMediumControls() {
    this.model.isIntravenous = false;
    this.model.isIntradural = false;
  }
}
