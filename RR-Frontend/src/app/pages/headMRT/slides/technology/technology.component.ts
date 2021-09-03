import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { TechnologyUiModel } from '@models/headMRT/ui/technology/technology-ui.model';
import { DialogService } from 'primeng/dynamicdialog';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';
import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';
import { SequenceUiModel } from '@models/headMRT/ui/technology/sequence-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { VesselsUiModel } from '@models/headMRT/ui/vessels/vessels-ui.model';
import { ContrastEnhancementTypeEnum } from '@enums/headMRT/vessels';
import {
  ADCMapTypeEnum,
  DiffusionImagingTypeEnum,
  DiffusionRestrictionTypeEnum,
  DWISignalTypeEnum,
  MRPerfusionTypeEnum
} from '@enums/headMRT/vessels';
import { WeightingTypeEnum } from '@enums/shared/technology';
import { BasalNucleiUiModel } from '@models/headMRT/ui/basal-nuclei/basal-nuclei-ui.model';

import { MeningesUiModel } from '@models/headMRT/ui/meninges/meninges-ui.model';
import { CortexUiModel } from '@models/headMRT/ui/cortex/cortex-ui.model';
import { CerebrospinalFluidSpaceUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-ui.model';
import { ContrastEnhancementBasalNucleiTypeEnum } from '@enums/headMRT/basal-nuclei/contrast-enhancement-basal-nuclei-type.enum';
import { BrainstemCranialNervesUiModel } from '@models/headMRT/ui/brainstem-cranial-nerves/brainstem-cranial-nerves-ui.model';
import { SellarRegionUiModel } from '@models/headMRT/ui/sellar-region/sellar-region-ui.model';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/headMRT/common/contrast-enhancement-quantitative-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/headMRT/common/contrast-enhancement-distribution-type.enum';
import { HomogeneityTypeEnum } from '@enums/headMRT/common/homogeneity-type.enum';
import { FacialSkullUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-ui.model';
import { SummaryUiModel } from '@models/headMRT/ui/summary/summary-ui.model';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  providers: [DialogService],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TechnologyComponent extends TechnologyMrtBaseComponent<TechnologyUiModel, SequenceUiModel> implements OnInit {
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
      SequenceUiModel,
      technologyService
    );

    this.addPageConnection(
      4,
      VesselsUiModel,
      () => {
        return true;
      },
      (model: VesselsUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.mrPerfusionType = MRPerfusionTypeEnum.None;
            finding.isRelativeReductionCBFCBV = false;
            finding.isProlongationOfMTT = false;
            finding.isProlongationOfTTP = false;
            finding.isPWIDWIMismatch = false;
            finding.penumbraTissueAtRisk = null;
            finding.isInflammatoryChange = false;
            finding.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
            finding.isContrastFillingDefectinMRV = false;
            finding.isEmptyDeltaSign = false;
            finding.isDuralEnhancement = false;
            finding.isCervicalVesselElongation = false;
            finding.isHighGradeStenosisupstreamcervicalArtery = false;
            finding.isOcclusionOfUpstreamcervicalArtery = false;
            finding.isThrombusInUpstreamcervicalArtery = false;
            finding.isDissectionOfUpstreamcervicalArtery = false;
            finding.isOstialStenosisaffectedVessel = false;
          });
        }
        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.map(finding => {
            finding.diffusionImagingType = DiffusionImagingTypeEnum.None;
            finding.diffusionImagingType = DiffusionImagingTypeEnum.None;
            finding.dwiSignalType = DWISignalTypeEnum.None;
            finding.adcMapType = ADCMapTypeEnum.None;
            finding.diffusionRestrictionType = DiffusionRestrictionTypeEnum.None;
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
            finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.isContrastEnhancement = false;
            finding.isContrastEnhancementMembrane = false;
            finding.isPachymeninges = false;
            finding.isLeptomeninges = false;
          });
        }
        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.map(finding => {
            finding.dwiSignal = 0;
            finding.adcSignal = 0;
            finding.isDiffusionRestriction = false;
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
        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.map(finding => {
            finding.dwiSignal = null;
            finding.adcSignal = null;
            finding.isDiffusionRestriction = false;
          });
        }
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
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
            finding.contrastDistributionType = ContrastEnhancementDistributionTypeEnum.None;
          });
        }
        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.map(finding => {
            finding.dwiSignalType = 0;
            finding.adcSignalType = 0;
            finding.isDiffusionRestriction = false;
          });
        }
      }
    );

    this.addPageConnection(
      8,
      BrainstemCranialNervesUiModel,
      () => {
        return true;
      },
      (model: BrainstemCranialNervesUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
          });
        }
        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.map(finding => {
            finding.dwiSignalType = 0;
            finding.adcSignalType = 0;
            finding.isDiffusionRestriction = false;
          });
        }
      }
    );

    this.addPageConnection(
      9,
      BasalNucleiUiModel,
      () => {
        return true;
      },
      (model: CerebrospinalFluidSpaceUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
            finding.isPachymeningealEnhancement = false;
          });
        }
        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.map(finding => {
            finding.isDiffusionRestriction = false;
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
            finding.contrastQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastDistributionType = ContrastEnhancementDistributionTypeEnum.None;
            finding.isDetectionOfLesion = false;
          });
        }
        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.map(finding => {
            finding.isDiffusionRestriction = false;
          });
        }
      }
    );
    this.addPageConnection(
      11,
      FacialSkullUiModel,
      () => {
        return true;
      },
      (model: FacialSkullUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.contrastEnhancementType = ContrastEnhancementQuantitativeTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.contrastDistributionType = ContrastEnhancementDistributionTypeEnum.None;
            finding.isBoneMarrowContrastEnhancement = false;
          });
        }
        if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
          model.findings.map(finding => {
            finding.isDiffusionRestriction = false;
          });
        }
      }
    );

    this.addPageConnection(
      12,
      SummaryUiModel,
      () => true,
      (model: SummaryUiModel) => {
        if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
          model.findings.map(finding => {
            finding.isIncompleteRingEnhancement = false;
          });
        }
      }
    );
  }

  ngOnInit() {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIHead);
  }

  protected resetCustomContrastMediumControls() {
    this.model.isIntravenous = false;
  }

  onContrastEnhancedChange() {
    super.onContrastEnhancedChange();
    this.setIntravenousCalculatedField();

    this.sequenceHandler.collection.map(model => {
      model.isDynamicsAfterContrastInjection = false;
      model.isSubtraction = false;
    });
  }

  private setIntravenousCalculatedField(): void {
    this.model.isIntravenous = this.model.cmReinforcedType === SimpleAnswerEnum.Yes;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.imageQualityValues').subscribe((out: string[]) => {
        this.descriptionArray = Object.values(out);
      })
    );
  }
}
