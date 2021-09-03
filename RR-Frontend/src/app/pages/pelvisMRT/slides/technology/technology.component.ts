import { Component, OnInit } from '@angular/core';

import { DialogService } from 'primeng/dynamicdialog';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { CenterspecificPreferencesHttpService } from '@services/shared/centerspecific-preferences/centerspecific-preferences-http.service';

import { TechnologyMrtBaseComponent } from '@abstractions/technology-base/technology-mrt-base.component';

import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { SequenceUiModel } from '@models/pelvisMRT/ui/technology/sequence-ui.model';
import { BladderUiModel } from '@models/pelvisMRT/ui/bladder/bladder-ui.model';
import { ProstateUiModel } from '@models/pelvisMRT/ui/prostate/prostate-ui.model';
import { FemaleSexUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-ui.model';
import { BonesUiModel } from '@models/pelvisMRT/ui/bones/bones-ui.model';
import { MaleSexFindingUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-finding-ui.model';
import { RectumUiModel } from '@models/pelvisMRT/ui/rectum/rectum-ui.model';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { ProstateFindingUiModel } from '@models/pelvisMRT/ui/prostate/prostate-finding-ui.model';

import { PositionTypeEnum } from '@enums/pelvisMRT/technology/position-type.enum';
import { SpasmolysisTypeEnum } from '@enums/pelvisMRT/technology/spalmolysis-type.enum';
import { CenterspecificPreferencesModulesEnum } from '@enums/centerspecific-preferences/centerspecific-preferences-modules.enum';
import { DwiAdcSignalTypeEnum } from '@enums/pelvisMRT/prostate/dwi-adc-signal-type.enum';
import { DiscreteTypeEnum } from '@enums/pelvisMRT/prostate/discrete-type.enum';
import { MaleSexUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-ui.model';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { CMEnhancementTypeEnum } from '@enums/shared/cm-enhancement-type.enum';
import { HomogeneityTypeEnum as MaleSexHomogeneityTypeEnum } from '@enums/pelvisMRT/male-sex/homogeneity-type.enum';
import { NodularComponentsTypeEnum } from '@enums/pelvisMRT/male-sex/nodular-components-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/pelvisMRT/bones';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/pelvisMRT/bones/tumor';
import { DynamicContrastEnhancedTypeEnum } from '@enums/pelvisMRT/prostate/dynamic-contrast-enhanced-type.enum';
import { DceMrtNegativeTypeEnum } from '@enums/pelvisMRT/prostate/dce-mrt-negative-type.enum';

import { SideEffectsSectionService } from '@commonTemplates/technology/services/side-effects-section.service';
import { SequencesTypeEnum } from '@enums/shared/technology';
import { IPageConnection } from '@interfaces/page-connection.interface';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { WeightingTypeEnum } from '@enums/shared/technology/weighting-type.enum';
import { BladderFindingTypeEnum, HeterogeneousTypeEnum as BladderHeterogeneousTypeEnum } from '@enums/pelvisMRT/bladder';
import { FemaleSexFindingUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-finding-ui.model';
import { ContrastEnhancementTypeEnum as FemaleSexContrastEnhancementTypeEnum } from '@enums/pelvisMRT/female-sex/contrast-enhancement-type.enum';
import { HomogenityTypeEnum } from '@enums/pelvisMRT/female-sex/homogenity-type.enum';
import { HeterogeneousTypeEnum } from '@enums/pelvisMRT/female-sex/heterogeneous-type.enum';
import { DceMriTypeEnum } from '@enums/pelvisMRT/female-sex/ovary-mass/dce-mri-type.enum';
import { KMEnhancementTypeEnum } from '@enums/pelvisMRT/rectum/common/km-enhancement-type.enum';
import { InternalChangeTypeEnum } from '@enums/pelvisMRT/rectum/common/internal-change-type.enum';
import { ChronicBowelKmEnhancementFormTypeEnum } from '@enums/pelvisMRT/rectum/chronich-inflammatory-bowel-disease/chronic-bowel-km-enhancement-form-type.enum';
import { InternalChangeSubTypeEnum } from '@enums/pelvisMRT/rectum/appendagitis/internal-change-sub-type.enum';

@Component({
  selector: 'rr-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
  providers: [DialogService]
})
export class TechnologyComponent extends TechnologyMrtBaseComponent<TechnologyUiModel, SequenceUiModel> implements OnInit {
  positionType: typeof PositionTypeEnum;
  spalmolysisType: typeof SpasmolysisTypeEnum;

  isVaginalContrastDisabled = false;

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

    this.positionType = PositionTypeEnum;
    this.spalmolysisType = SpasmolysisTypeEnum;
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.getPreferences(CenterspecificPreferencesModulesEnum.MRIPelvis);
  }

  protected preparePageConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      this.isVaginalContrastDisabled = localizationUiModel.patientInformation.gender !== GenderTypeEnum.Female;
    });

    const PC04 = this.preparePage4ConnectionObject();
    this.addPageConnection(PC04.pageNr, ProstateUiModel, PC04.condition, PC04.callback);

    const PC05 = this.preparePage5ConnectionObject();
    this.addPageConnection(PC05.pageNr, MaleSexUiModel, PC05.condition, PC05.callback);

    const PC06 = this.preparePage6ConnectionObject();
    this.addPageConnection(PC06.pageNr, FemaleSexUiModel, PC06.condition, PC06.callback);

    const PC08 = this.preparePage8ConnectionObject();
    this.addPageConnection(PC08.pageNr, RectumUiModel, PC08.condition, PC08.callback);

    const PC09 = this.preparePage9ConnectionObject();
    this.addPageConnection(PC09.pageNr, BladderUiModel, PC09.condition, PC09.callback);

    const PC010 = this.preparePage10ConnectionObject();
    this.addPageConnection(PC010.pageNr, BonesUiModel, PC010.condition, PC010.callback);
  }

  private preparePage4ConnectionObject(): IPageConnection<ProstateUiModel> {
    const condition = () => true;
    const callback = (model: ProstateUiModel) => {
      if (
        this.model.sequences.filter((sequenceModel: SequenceUiModel) => {
          return sequenceModel.weightingType === WeightingTypeEnum.DWI && !sequenceModel.isDeleted;
        }).length === 0
      ) {
        model.findings.forEach((findingModel: ProstateFindingUiModel) => {
          findingModel.isIncreasedDwiSignal = false;
          findingModel.increasedDwiSignalType = DwiAdcSignalTypeEnum.None;
          findingModel.dwiDiscreteType = DiscreteTypeEnum.None;
          findingModel.isAdcHypointensity = false;
          findingModel.adcHypointensityType = DwiAdcSignalTypeEnum.None;
          findingModel.adcDiscreteType = DiscreteTypeEnum.None;
        });
      }
      if (this.model.cmReinforcedType === SimpleAnswerEnum.No) {
        model.findings.forEach((findingModel: ProstateFindingUiModel) => {
          findingModel.dynamicContrastEnhancedType = DynamicContrastEnhancedTypeEnum.None;
          findingModel.dceMrtNegativeType = DceMrtNegativeTypeEnum.None;
        });
      }
    };

    return {
      pageNr: 4,
      condition,
      callback
    };
  }

  private preparePage5ConnectionObject(): IPageConnection<MaleSexUiModel> {
    const condition = () => true;
    const callback = (model: MaleSexUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings
          .filter(finding => finding.findingType === 'ScrotumInfectionInflammation')
          .map(finding => {
            finding.isAbscess = false;
            finding.expansionInMm = null;
            finding.isSinusTract = false;
            finding.isCutaneousFistula = false;
            finding.isMarginalCMEnhancement = false;
          });
        model.findings.forEach(finding => {
          // Shared
          finding.isHomogeneous = false;
          finding.isHeterogeneous = false;
          finding.nodularComponentsType = NodularComponentsTypeEnum.None;

          // Penis infection
          finding.cmEnhancementType = CMEnhancementTypeEnum.None;
          finding.cmEnhancementFocalPlaquesType = CMEnhancementTypeEnum.None;
          finding.isFocalSignalVoids = false;

          // Penis mass requirement
          finding.penisMassCMEnhancementType = CMEnhancementTypeEnum.None;
          finding.penisMassHomogeneity02Type = MaleSexHomogeneityTypeEnum.None;

          // Skrotum infection/inflamation
          finding.testiclesCMEnhancement = CMEnhancementTypeEnum.None;
          finding.isHomogeneousTesticles = false;
          finding.isHeterogeneousTesticles = false;

          finding.epididymisCMEnhancement = CMEnhancementTypeEnum.None;
          finding.isHomogeneousEpididymis = false;
          finding.isHeterogeneousEpididymis = false;

          finding.surroundingSoftTissueCMEnhancement = CMEnhancementTypeEnum.None;

          // Skrotum mass
          finding.scrotumMassCMEnhancementType = CMEnhancementTypeEnum.None;
          finding.scrotumMassHomogeneity02Type = MaleSexHomogeneityTypeEnum.None;

          // Seminal vesicles infection
          finding.seminalVesiclesInfectionInflammationCmEnhancementType = CMEnhancementTypeEnum.None;
          finding.isDiffuse = false;
          finding.isParietal = false;
          finding.isSeptal = false;

          // Seminal vesicles mass
          finding.cmEnhancementSeminalVesiclesMassType = CMEnhancementTypeEnum.None;
          finding.homogeneitySeminalVesiclesMassType = MaleSexHomogeneityTypeEnum.None;
        });
      }

      if (
        this.model.sequences.filter(
          (sequenceModel: SequenceUiModel) => sequenceModel.weightingType === WeightingTypeEnum.DWI && !sequenceModel.isDeleted
        ).length === 0
      ) {
        model.findings.map((finding: MaleSexFindingUiModel) => {
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

  private preparePage6ConnectionObject(): IPageConnection<FemaleSexUiModel> {
    const condition = () => true;
    const callback = (model: FemaleSexUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.contrastEnhancementType1 = FemaleSexContrastEnhancementTypeEnum.None;
          finding.contrastEnhancementHomogenityType1 = HomogenityTypeEnum.None;
          finding.contrastEnhancementType2 = FemaleSexContrastEnhancementTypeEnum.None;
          finding.contrastEnhancementHomogenityType2 = HomogenityTypeEnum.None;
          finding.isContrastEnhancement = false;
          finding.isPeritonealContrastEnhancement = false;
          finding.contrastEnhancementType3 = FemaleSexContrastEnhancementTypeEnum.None;
          finding.heterogeneousType = HeterogeneousTypeEnum.None;
          finding.isHeterogeneousNodularParts = false;
          finding.dceMriType = DceMriTypeEnum.None;
          finding.isCentripetalEnhancement = finding.isParietal = false;
          finding.isMarginal = false;
        });
      }
      if (
        this.model.sequences.filter(
          (sequenceModel: SequenceUiModel) => sequenceModel.weightingType === WeightingTypeEnum.DWI && !sequenceModel.isDeleted
        ).length === 0
      ) {
        model.findings.map((finding: FemaleSexFindingUiModel) => {
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

  private preparePage8ConnectionObject(): IPageConnection<RectumUiModel> {
    const condition = () => true;
    const callback = (model: RectumUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isIncreasedEnhancementOfIntestinalWall = false;
          finding.sigmaMassKmEnhancementType = KMEnhancementTypeEnum.None;
          finding.cmEnhancementInternalChangeType = InternalChangeTypeEnum.None;
          finding.fistulaKMEnhancementType = KMEnhancementTypeEnum.None;
          finding.fistulaInternalChangeType = InternalChangeTypeEnum.None;
          finding.chronicBowelDiseaseKMEnhancementType = KMEnhancementTypeEnum.None;
          finding.chronicBowelKmEnhancementFormType = ChronicBowelKmEnhancementFormTypeEnum.None;
          finding.isTargetSign = false;
          finding.isSubmucosalStripe = false;
          finding.isPerifocal = false;
          finding.appendicitisKMEnhancementType = KMEnhancementTypeEnum.None;
          finding.appendicitisInternalChangeType = InternalChangeTypeEnum.None;
          finding.appendicitisInternalChangeSubType = InternalChangeSubTypeEnum.None;
        });
      }

      if (
        this.model.sequences.filter(
          (sequenceModel: SequenceUiModel) => sequenceModel.weightingType === WeightingTypeEnum.DWI && !sequenceModel.isDeleted
        ).length === 0
      ) {
        model.findings.map((finding: RectumFindingUiModel) => {
          finding.isDiffusionRestriction = false;
        });
      }

      if (!this.model.isOralContrast) {
        model.findings.map((finding: RectumFindingUiModel) => {
          finding.isArrowheadSign = false;
          finding.isCecalBarSign = false;
        });
      }
    };

    return {
      pageNr: 8,
      condition,
      callback
    };
  }

  private preparePage9ConnectionObject(): IPageConnection<BladderUiModel> {
    const condition = () => true;
    const callback = (model: BladderUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings
          .filter(finding => finding.findingType === BladderFindingTypeEnum.UrinaryBladderWallThickening)
          .map(finding => {
            finding.contrastEnhancementType = CMEnhancementTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
            finding.heterogeneousType = BladderHeterogeneousTypeEnum.None;
          });
        model.findings
          .filter(finding => finding.findingType === BladderFindingTypeEnum.PeripheralNerveSheathTumor)
          .map(finding => (finding.isContrastEnhancement = false));
        model.findings
          .filter(finding => finding.findingType === BladderFindingTypeEnum.SoftTissueMass)
          .map(finding => {
            finding.contrastEnhancementType = CMEnhancementTypeEnum.None;
            finding.contrastEnhancementHomogeneityType = HomogeneityTypeEnum.None;
          });
      }
    };

    return {
      pageNr: 9,
      condition,
      callback
    };
  }

  private preparePage10ConnectionObject(): IPageConnection<BonesUiModel> {
    const condition = () => true;
    const callback = (model: BonesUiModel) => {
      if (this.model.cmReinforcedType !== SimpleAnswerEnum.Yes) {
        model.findings.map(finding => {
          finding.isSynovitis = false;
          finding.isCMEnhancementPerifocal = false;
          finding.contrastEnhancementType = ContrastEnhancementTypeEnum.None;
          finding.bursitisHomogeneityType = HomogeneityTypeEnum.None;
          finding.contrastHomogeneityType = HomogeneityTypeEnum.None;
          finding.isContrastInSepta = false;
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
}
