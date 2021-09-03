import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { TechnologyUiModel } from '@models/abdomenMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/abdomenMRT/ui/technology/sequence-ui.model';

import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CmEnhancementDistributionTypeEnum } from '@enums/abdomenMRT/spleen';
import { ContrastEnhancementDistributionEnum, HomogeneityTypeEnum as PancreasHomogeneityTypeEnum } from '@enums/abdomenMRT/pancreas/mass';
import { HomogeneityTypeEnum as AdrenalGlandsHomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { LiverHomogeneityTypeEnum, WashInArterialPhaseTypeEnum } from '@enums/abdomenMRT/liver';
import { HomogeneityTypeEnum, HomogeneityTypeEnum as AbdomenHomogeneityType } from '@enums/abdomenMRT/homogeneity-type.enum';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { SequencesTypeEnum, WeightingTypeEnum } from '@enums/shared/technology';
import { SpasmolysisTypeEnum } from '@enums/abdomenMRT/technology/spalmolysis-type.enum';
import { SpleenUiModel } from '@models/abdomenMRT/ui/spleen/spleen-ui.model';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { KidneysUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-ui.model';
import { LymphaticSystemUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-ui.model';
import { GastrointestinalTractUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LiverUiModel } from '@models/abdomenMRT/ui/liver/liver-ui.model';
import { PancreasUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-ui.model';
import { ContrastEnhancementQuantitativeEnum } from '@enums/abdomenMRT/pancreas';
import { AdrenalGlandsUiModel } from '@models/abdomenMRT/ui/adrenal-glands/adrenal-glands-ui.model';
import { CmEnhancementQuantitativeTypeEnum } from '@enums/abdomenMRT/adrenal-glands/cm-enhancement-quantitative-type.enum';
import { PeritonealCavityUiModel } from '@models/abdomenMRT/ui/peritoneal-cavity/peritoneal-cavity-ui.model';
import { GastrointestinalHomogeneityTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';
import {
  ContrastEnhancementDistributionTypeEnum,
  ContrastEnhancementQuantitativeTypeEnum
} from '@enums/abdomenMRT/peritoneal-cavity/peritoneal-mass';

import { ContrastEnhancementDistributionTypeEnum as GastrointestinalContrastEnhancementDistributionTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/segmental-bowel-findings/contrast-enhancement-distribution-type.enum';
import { CMEnhancementQuantitativeTypeEnum } from '@enums/abdomenMRT/cmenhancement-quantitative-type.enum';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  providers: [DialogService],
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent extends TechnologyMrtBaseComponent<TechnologyUiModel, SequenceUiModel> implements OnInit {
  spalmolysisType: typeof SpasmolysisTypeEnum;

  cMEnhancementQuantitativeType = CMEnhancementQuantitativeTypeEnum;
  homogeneityType = HomogeneityTypeEnum;

  spalmolysisOptions: DropdownModel[];

  descriptionArray: string[];

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public dialogService: DialogService,
    public centerspecificPreferencesService: CenterspecificPreferencesHttpService,
    public technologyService: SideEffectsSectionService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      commonServices,
      dialogService,
      centerspecificPreferencesService,

      TechnologyUiModel,
      SequenceUiModel,
      technologyService
    );

    this.spalmolysisType = SpasmolysisTypeEnum;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIAbdomen);
  }

  preparePageConnection(): void {
    const PCO4 = this.preparePage4ConnectionObject();
    this.addPageConnection(PCO4.pageNr, LiverUiModel, PCO4.condition, PCO4.callback);

    const PCO5 = this.preparePage5ConnectionObject();
    this.addPageConnection(PCO5.pageNr, SpleenUiModel, PCO5.condition, PCO5.callback);

    const PC06 = this.preparePage6ConnectionObject();
    this.addPageConnection(PC06.pageNr, LymphaticSystemUiModel, PC06.condition, PC06.callback);

    const PCO7 = this.preparePage7ConnectionObject();
    this.addPageConnection(PCO7.pageNr, KidneysUiModel, PCO7.condition, PCO7.callback);

    const PCO8 = this.preparePage8ConnectionObject();
    this.addPageConnection(PCO8.pageNr, KidneysUiModel, PCO8.condition, PCO8.callback);

    const PCO9 = this.preparePage9ConnectionObject();
    this.addPageConnection(PCO9.pageNr, GastrointestinalTractUiModel, PCO9.condition, PCO9.callback);

    const PC10 = this.preparePage10ConnectionObject();
    this.addPageConnection(PC10.pageNr, PeritonealCavityUiModel, PC10.condition, PC10.callback);

    const PC11 = this.preparePage11ConnectionObject();
    this.addPageConnection(PC11.pageNr, LymphaticSystemUiModel, PC11.condition, PC11.callback);
  }

  protected resetCustomSequencesControls() {
    if (this.model.sequencesType === SequencesTypeEnum.Individual) {
      this.model.sequences.forEach(sequence => {
        sequence.isPostContrast = false;
        sequence.isSubtraction = false;
      });
    }
  }

  onContrastEnhancedChange() {
    super.onContrastEnhancedChange();
    this.setIntravenousCalculatedField();
  }

  private setIntravenousCalculatedField(): void {
    this.model.isIntravenous = this.model.cmReinforcedType === SimpleAnswerEnum.Yes;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('shared-templates.technology.imageQualityValues').subscribe((out: string[]) => {
        this.descriptionArray = Object.values(out);
      }),
      this.translate.stream('abdomenMRT.technology.spasmolysisType.options').subscribe((out: DropdownModel[]) => {
        this.spalmolysisOptions = Object.values(out);
      })
    );
  }

  private preparePage10ConnectionObject(): IPageConnection<PeritonealCavityUiModel> {
    const condition = () => true;
    const callback = (model: PeritonealCavityUiModel) => {
      if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
        model.findings.map(finding => {
          finding.isDiffusionRestriction = false;
        });
      }
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isPeritonealContrastEnhancement = false;
          finding.isConcomitantPeritonitis = false;
          finding.isContrastEnhancement = false;
          finding.isEvidenceOfContrastMediaLatePhase = false;
          finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
          finding.pMStrongHomogeneityType = HomogeneityTypeEnum.None;
          finding.rMStrongHomogeneityType = HomogeneityTypeEnum.None;
          finding.contrastEnhancementDistributionType = ContrastEnhancementDistributionTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 10,
      condition,
      callback
    };
  }

  private preparePage11ConnectionObject(): IPageConnection<LymphaticSystemUiModel> {
    const condition = () => true;
    const callback = (model: LymphaticSystemUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isContrastEnhancement = false;
          finding.cMEnhancementQuantitativeType = CMEnhancementQuantitativeTypeEnum.None;
          finding.homogeneityType = HomogeneityTypeEnum.None;
        });
      }

      if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
        model.findings.map(finding => {
          finding.isDiffusionRestriction = false;
          finding.isPathologicDiffusionRestriction = false;
        });
      }
    };

    return {
      pageNr: 11,
      condition,
      callback
    };
  }

  private preparePage4ConnectionObject(): IPageConnection<LiverUiModel> {
    const condition = () => true;
    const callback = (model: LiverUiModel) => {
      if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
        model.findings.forEach(finding => {
          finding.isDiffusionRestriction = false;
        });
      }

      if (this.model.contrastMediumType === 'GadotericAcid') {
        model.findings.map(finding => {
          finding.equilibrium = 0;
        });
      }

      if (this.model.contrastMediumType !== 'GadobenicAcid' && this.model.contrastMediumType !== 'GadotericAcid') {
        model.findings.map(finding => {
          finding.liverSpecificContrastEnhancement = 0;
          finding.qualityOfEnhancement = LiverHomogeneityTypeEnum.None;
        });
      }

      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isIncreasedGallbladderWallEnhancement = false;
          finding.isIncreasedContrastEnhancementLiverParenchyma = false;

          finding.isCottonWoolAppearance = false;
          finding.isCentripetalFillInIrisDiaphragmPhenomenon = false;
          finding.isTriangleSign = false;
          finding.isEnhancementToHepaticVeins = false;
          finding.isCentrifugalEnhancement = false;
          finding.isCentralScar = false;
          finding.isWashInArterialPhase = false;
          finding.washInArterialPhaseType = WashInArterialPhaseTypeEnum.None;
          finding.isWashOutVenousPhase = false;
          finding.isMaskingVenousPhase = false;
          finding.isRingTargetSign = false;
          finding.isPeripheralEnhancement = false;
          finding.isLateVenousPooling = false;
          finding.isFadingEnhancement = false;
          finding.isWallEnhancement = false;
          finding.isLateEnhancementOfTheMassWallThickening = false;
          finding.isAbsenceOfWashout = false;
        });
      }
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  private preparePage5ConnectionObject(): IPageConnection<SpleenUiModel> {
    const condition = () => true;
    const callback = (model: SpleenUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.cmEnhancementQuantitativeType = CMEnhancementTypeEnum.None;
          finding.cmEnhancementHomogeneityType = HomogeneityTypeEnum.None;
          finding.cmEnhancementDistributionType = CmEnhancementDistributionTypeEnum.None;
        });
      }

      if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
        model.findings.forEach(finding => {
          finding.isDiffusionRestriction = false;
        });
      }
    };

    return {
      pageNr: 5,
      condition,
      callback
    };
  }

  private preparePage6ConnectionObject(): IPageConnection<PancreasUiModel> {
    const condition = () => true;
    const callback = (model: PancreasUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.contrastEnhancementQuantitative = ContrastEnhancementQuantitativeEnum.None;
          finding.contrastEnhancementHomogeneityType = PancreasHomogeneityTypeEnum.None;
          finding.contrastEnhancementDistribution = ContrastEnhancementDistributionEnum.None;
          finding.isContrastEnhancingMuralNodules = false;
          finding.isContrastEnhancement = false;
          finding.isHighRiskContrastEnhancingmuralNodule = false;
          finding.characterizationIIIHomogeneityType = AbdomenHomogeneityType.None;
        });
      }

      if (
        !this.model.sequences.some(
          (sequenceModel: SequenceUiModel) => sequenceModel.weightingType === WeightingTypeEnum.DWI && !sequenceModel.isDeleted
        )
      ) {
        model.findings.map(finding => {
          finding.isDiffusionRestriction = false;
        });
      }
    };

    return {
      pageNr: 6,
      condition,
      callback
    };
  }

  private preparePage7ConnectionObject(): IPageConnection<KidneysUiModel> {
    const condition = () => true;
    const callback = (model: KidneysUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isFillingDefectAfterContrastAdministration = false;
          finding.isNodularThrombusEnhancement = false;
          finding.isAlteredRenalPerfusion = false;
          finding.isOnyMedullaryContrastEnhancement = false;
          finding.isNarrowContrastedRimAroundCortex = false;
          finding.isMissingCMEnhancement = false;
          finding.isContrastEnhancementUreteralWall = false;
          finding.isSideDifferenceContrastEnhancement = false;
          finding.corticomedullaryPhase = null;
          finding.nephrographicPhase = null;
          finding.excretoryPhase = null;
          finding.isSpokeWheelEnhancementPattern = false;
          finding.isDiffusionRestriction = false;
          finding.contrastEnhancementRenalParenchymaQuantitative = ContrastEnhancementQuantitativeTypeEnum.None;
          finding.homogeneityType = AbdomenHomogeneityType.None;
          finding.contrastEnhancementQuantitativeStrongType = HomogeneityTypeEnum.None;
        });
      }

      if (
        !this.model.sequences.some(
          (sequenceModel: SequenceUiModel) => sequenceModel.weightingType === WeightingTypeEnum.DWI && !sequenceModel.isDeleted
        )
      ) {
        model.findings.map(finding => {
          finding.isDiffusionRestrictionInTheThrombus = false;
        });
      }
    };

    return {
      pageNr: 7,
      condition,
      callback
    };
  }

  private preparePage8ConnectionObject(): IPageConnection<AdrenalGlandsUiModel> {
    const condition = () => true;
    const callback = (model: AdrenalGlandsUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.cmEnhancementQuantitativeType = CmEnhancementQuantitativeTypeEnum.None;
          finding.homogeneityType = AdrenalGlandsHomogeneityTypeEnum.None;
        });
      }

      if (
        !this.model.sequences.some(
          (sequenceModel: SequenceUiModel) => sequenceModel.weightingType === WeightingTypeEnum.DWI && !sequenceModel.isDeleted
        )
      ) {
        model.findings.map(finding => {
          finding.isDiffusionRestriction = false;
        });
      }
    };

    return {
      pageNr: 8,
      condition,
      callback
    };
  }

  private preparePage9ConnectionObject(): IPageConnection<GastrointestinalTractUiModel> {
    const condition = () => true;
    const callback = (model: GastrointestinalTractUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isMarginalContrastEnhancement = false;
          finding.isContrastEnhancementOfTheIntestinalWall = false;
          finding.isTargetSign = false;
          finding.isFocalReducedContrastEnhancement = false;
          finding.isMucosalEnhancement = false;
          finding.isArterial = false;
          finding.isPortalVenous = false;
          finding.cmEnhancementHomogeneityType = GastrointestinalHomogeneityTypeEnum.None;
          finding.contrastEnhancementQuantitativeType = ContrastEnhancementQuantitativeTypeEnum.None;
          finding.contrastEnhancementDistributionType = GastrointestinalContrastEnhancementDistributionTypeEnum.None;
        });
      }

      if (!this.model.sequences.some(sequence => sequence.weightingType === WeightingTypeEnum.DWI && !sequence.isDeleted)) {
        model.findings.map(finding => {
          finding.isDiffusionRestriction = false;
        });
      }
    };

    return {
      pageNr: 9,
      condition,
      callback
    };
  }
}
