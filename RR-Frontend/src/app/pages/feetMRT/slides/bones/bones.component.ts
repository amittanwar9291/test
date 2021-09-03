import { Component, OnDestroy, OnInit } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { BonesUiModel } from '@models/feetMRT/ui/bones/bones-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LocalizationUiModel } from '@models/feetMRT/ui/localization/localization-ui.model';
import { BonesTranslationsModel } from '@models/feetMRT/ui/bones/bones-translations.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { BonesHelperService, ComplexLocalizerData } from './bones-helper.service';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { TechnologyUiModel } from '@models/feetMRT/ui/technology/technology-ui.model';
import { BonesValidationModel } from '@models/feetMRT/ui/bones/bones-validation.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import {
  DistalTibiaFractureTypeEnum,
  FractureClassificationTypeEnum,
  FractureFormSubTypeEnum,
  FractureTypeTypeEnum,
  MedialMalleolusTypeEnum
} from '@enums/feetMRT/bones/fracture';
import { BonesFindingTypeEnum, DifferentialDiagnosisTypeEnum } from '@enums/feetMRT/bones';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { SummaryUiModel } from '@models/feetMRT/ui/summary/summary-ui.model';
import { TClassificationTypeEnum } from '@enums/feetMRT/summary/t-classification-type.enum';
import { DifferentialDiagnosisPresetService } from '@abstractions/abstract-classes/differential-diagnosis-preset-service';
import { BonesPresetHttpService } from '@services/feetMRT/http/bones/bones-preset-http.service';

@Component({
  selector: 'rr-feet-mrt-bones',
  templateUrl: './bones.component.html',
  styleUrls: ['./bones.component.scss'],
  providers: [
    {
      provide: DifferentialDiagnosisPresetService,
      useClass: BonesPresetHttpService
    }
  ]
})
export class BonesComponent extends SlideBaseComponent<BonesUiModel> implements OnInit, OnDestroy {
  findingHandler: DynamicComponentHandler<BonesFindingUiModel>;
  findingDropdownConfig: FindingColumnConfig;
  readonly bonesFindingsTypes = BonesFindingTypeEnum;
  readonly complexLocalizersTypes = ComplexLocalizersTypes;
  side: 'right' | 'left';
  largeLocalizerOpenType: ComplexLocalizerData;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    private enumMapper: EnumMapper,
    private bonesHelperService: BonesHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, BonesUiModel, commonServices, BonesValidationModel);

    this.findingHandler = new DynamicComponentHandler(this.logger, this.model.findings, BonesFindingUiModel);
    this.initializeDynamicDropdownConfig();

    this.registerCallback();
    this.registerConnection();
    this.addConnection();

    this.subscriptions.push(this.bonesHelperService.largeLocalizerOpen.subscribe(type => (this.largeLocalizerOpenType = type)));
  }

  private registerCallback() {
    this.registerSaveCallback((modelOut: BonesUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerGetCallback((modelOut: BonesUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });
  }

  private registerConnection() {
    this.registerConnectionCallback(1, LocalizationUiModel, (localizationModel: LocalizationUiModel) => {
      this.side = this.enumMapper.mapToString(localizationModel.localization).toLowerCase() as 'right' | 'left';
      this.bonesHelperService.localizationSide.next(this.enumMapper.mapToString(localizationModel.localization).toLowerCase());
    });
    this.registerConnectionCallback(3, TechnologyUiModel, (technologyModel: TechnologyUiModel) => {
      this.bonesHelperService.isCMYes.next(technologyModel.cmReinforcedType === 'Yes');
    });
  }

  addConnection() {
    this.addPageConnection(
      7,
      SummaryUiModel,
      () => {
        const referenceFindings: BonesFindingUiModel[] = this.model.findings.filter(
          item => item.findingType === BonesFindingTypeEnum.MassOsteolysis
        );
        const requiredDiagnosis: DifferentialDiagnosisTypeEnum[] = [
          DifferentialDiagnosisTypeEnum.EwingSarcoma,
          DifferentialDiagnosisTypeEnum.Osteosarcoma,
          DifferentialDiagnosisTypeEnum.Chondrosarcoma
        ];

        return !referenceFindings.find(
          item =>
            requiredDiagnosis.includes(item.differentialDiagnosis1) ||
            requiredDiagnosis.includes(item.differentialDiagnosis2) ||
            requiredDiagnosis.includes(item.differentialDiagnosis3) ||
            requiredDiagnosis.includes(item.spaceRequirementDifferentialDiagnosis)
        );
      },
      (model: SummaryUiModel) => {
        model.tClassificationType = TClassificationTypeEnum.None;
      }
    );
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('feetMRT.bones.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.findingDropdownConfig.dropdownValues = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate
        .stream('feetMRT.bones.translationBits')
        .subscribe((out: any) => Object.assign(this.findingDropdownConfig.translationBits, out))
    );

    this.subscriptions.push(
      this.translate.stream('feetMRT.bones.placeholder').subscribe((out: string) => {
        this.findingDropdownConfig.placeholder = out;
      })
    );

    this.subscriptions.push(
      this.translate.stream('feetMRT.bones.addingNewFindings.value').subscribe((out: string) => {
        if (this.findingDropdownConfig) {
          this.findingDropdownConfig.buttonText = out;
        }
      })
    );
  }

  initializeDynamicDropdownConfig() {
    this.findingDropdownConfig = new FindingColumnConfig();
    this.findingDropdownConfig.itemCount = 5;
    this.findingDropdownConfig.findingColumnIds.buttonRRId = 'anc_m_040107';
    this.findingDropdownConfig.translationBits = new BonesTranslationsModel();
  }

  isDynamicPartDisabled(): boolean {
    return this.model.areFindings !== 'True';
  }

  isCurrentItem(item: string): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  onNewLocalizerSelection() {
    this.findingHandler.currentItem.fractureClassificationType = FractureClassificationTypeEnum.None;
    this.findingHandler.currentItem.fractureTypeType = FractureTypeTypeEnum.None;
    this.findingHandler.currentItem.fractureFormSubType = FractureFormSubTypeEnum.None;
    this.findingHandler.currentItem.medialMalleolusType = MedialMalleolusTypeEnum.None;
    this.findingHandler.currentItem.distalTibiaFractureType = DistalTibiaFractureTypeEnum.None;
    this.findingHandler.currentItem.isHindfoot = false;
    this.findingHandler.currentItem.isMidfoot = false;
    this.findingHandler.currentItem.isForefoot = false;
    this.findingHandler.currentItem.isAnterior = false;
    this.findingHandler.currentItem.isPosteriorVolkmann = false;
    this.findingHandler.currentItem.isLateral = false;
    this.findingHandler.currentItem.isMedArticularSurfaceInclMedMalleolus = false;
    this.findingHandler.currentItem.isMedial = false;
    this.findingHandler.currentItem.isFrontalCoronal = false;
    this.findingHandler.currentItem.isSagittalPlane = false;
    this.findingHandler.currentItem.isnTillauxChaputTubercleFracture = false;
    this.findingHandler.currentItem.isWagstaffeLeFortAvulsionFracture = false;
    this.findingHandler.currentItem.isSyndesmosisUnstable = false;
    this.findingHandler.currentItem.isRuptureOfTheDeltoidLigament = false;
    this.findingHandler.currentItem.isFractureOfTheMedialMalleolus = false;
    this.findingHandler.currentItem.isFibulaNeckFracture = false;
    this.findingHandler.currentItem.isProximalTibiofibularJointDislocation = false;

    this.findingHandler.currentItem.apophysitisMorbusIselin = false;
    this.findingHandler.currentItem.apophysitisMorbusSever = false;
    this.findingHandler.currentItem.kohlerDiseaseI = false;
    this.findingHandler.currentItem.kohlerDiseaseII = false;
    this.findingHandler.currentItem.thiemannDisease = false;
  }

  getCustomLabel(
    index: number,
    bonesHandler: DynamicComponentHandler<BonesFindingUiModel>,
    translationBits: BonesTranslationsModel
  ): string {
    let result = '';
    const { findingType, threeDimensionalLocalization } = bonesHandler.collection[index];
    if (bonesHandler) {
      if (findingType === 'Fracture') {
        result += translationBits.fracture;
        const area = Object.keys(threeDimensionalLocalization).filter(key => threeDimensionalLocalization[key])[0];
        if (area) {
          result += ` • ${translationBits[area]}`;
        }
      }
    }
    return result;
  }

  onLargeLocalizerClose() {
    this.bonesHelperService.largeLocalizerOpen.next(null);
  }

  complexLocalizerShouldBeOpen(type: ComplexLocalizersTypes): boolean {
    return type === this.largeLocalizerOpenType?.type;
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.bonesHelperService.largeLocalizerOpen.next(null);
  }
}
