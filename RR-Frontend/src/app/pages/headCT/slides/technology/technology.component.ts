import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { TechnologyCtBaseComponent } from '@abstractions/technology-base/technology-ct-base.component';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';

import { TechnologyUiModel } from '@models/headCT/ui/technology/technology-ui.model';
import { AcquisitionUiModel } from '@models/headCT/ui/technology/acquisition-ui.model';
import { ReconstructionFindingUiModel } from '@models/headCT/ui/technology/reconstruction-finding-ui.model';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { MeningesUiModel } from '@models/headCT/ui/meninges/meninges-ui-model';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headCT/common/contrast-enhancement-quantitative-type.enum';
import { VesselsUiModel } from '@models/headCT/ui/vessels/vessels-ui.model';
import { ContrastEnhancementTypeEnum } from '@enums/headCT/vessels/ischemia/contrast-enhancement-type.enum';
import { BasalNucleiUiModel } from '@models/headCT/ui/basal-nuclei/basal-nuclei-ui.model';
import { ContrastDistributionTypeEnum } from '@enums/headCT/common/contrast-distribution-type.enum';
import { ContrastEnhancementBasalNucleiTypeEnum } from '@enums/headCT/basal-nuclei/contrast-enhancement-type.enum';
import { CortexUiModel } from '@models/headCT/ui/cortex/cortex-ui.model';
import { HomogeneityTypeEnum } from '@enums/headCT/common/homogeneity-type.enum';
import { CerebrospinalFluidSpaceUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-ui.model';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/shared/head/cortex/common';
import { SellarRegionUiModel } from '@models/headCT/ui/sellar-region/sellar-region-ui.model';
import { ContrastQuantitativeTypeEnum } from '@enums/shared/head/cortex/common';

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

  ngOnInit() {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.CTHead);
    this.setPageConnection();
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.imageQualityValues').subscribe(out => {
        this.descriptionArray = Object.values(out);
      })
    );
  }

  resetCustomContrastMediumControls() {
    this.model.isIntravenous = false;
    this.model.isIntrathecal = false;
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
        acquisition.isPerfusionCT = false;
      });
    }
  }

  private setPageConnection() {
    this.addPageConnection(
      4,
      VesselsUiModel,
      () => {
        return true;
      },
      (model: VesselsUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.isCervicalVesselElongation = false;
            finding.isUpstreamCervicalArteryWithHighGradeStenosis = false;
            finding.isUpstreamCervicalArteryWithOcclusion = false;
            finding.isThrombusInUpstreamCervicalArtery = false;
            finding.isDissectionOfUpstreamCervicalArtery = false;
            finding.isOstialStenosisAffectedVessel = false;
            finding.isContrastEnhancementOfTheArterialWall = false;
            finding.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
            finding.isInflammatoryChange = false;
          });
        }
      }
    );

    this.addPageConnection(
      5,
      MeningesUiModel,
      () => {
        return true;
      },
      (model: MeningesUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.isContrastEnhancementMembrane = false;
            finding.isContrastEnhancement = false;
            finding.contrastEnhancementType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastDistributionType = ContrastDistributionTypeEnum.None;
            finding.isPachymeninges = false;
            finding.isLeptomeninges = false;
          });
        }
      }
    );

    this.addPageConnection(
      6,
      CortexUiModel,
      () => {
        return true;
      },
      (model: CortexUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.contrastEnhancementType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
          });
        }
      }
    );

    this.addPageConnection(
      7,
      BasalNucleiUiModel,
      () => {
        return true;
      },
      (model: BasalNucleiUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.contrastEnhancementType = ContrastEnhancementBasalNucleiTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastDistributionType = ContrastDistributionTypeEnum.None;
          });
        }
      }
    );

    this.addPageConnection(
      9,
      CerebrospinalFluidSpaceUiModel,
      () => {
        return true;
      },
      (model: CerebrospinalFluidSpaceUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastEnhancementDistributionType = ContrastDistributionTypeEnum.None;
          });
        }
      }
    );

    this.addPageConnection(
      10,
      SellarRegionUiModel,
      () => {
        return true;
      },
      (model: SellarRegionUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.contrastQuantitativeType = ContrastQuantitativeTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastDistributionType = ContrastDistributionTypeEnum.None;
            finding.isDetectionOfLesion = false;
          });
        }
      }
    );
  }
}
