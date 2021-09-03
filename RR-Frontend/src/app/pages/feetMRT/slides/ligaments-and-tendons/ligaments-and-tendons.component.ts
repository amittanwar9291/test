import { Component } from '@angular/core';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';
import { LigamentsAndTendonsUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-ui.model';
import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { LigamentsAndTendonsValidationModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-validation.model';
import {
  LocalizationOfTheTendonRuptureTypeEnum,
  DifferentialDiagnosisTypeEnum,
  FindingTypeEnum,
  LocalizationTypeEnum,
  RuptureTypeEnum
} from '@enums/feetMRT/ligaments-and-tendos';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocalizationUiModel } from '@models/feetMRT/ui/localization/localization-ui.model';
import { AssociatedFindingsTypeEnum } from '@enums/feetMRT/ligaments-and-tendos/associated-findings-type.enum';
import { FeetSimpleModel } from '@models/feetMRT/ui/localizers/feet-simple.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-ligaments-and-tendons',
  templateUrl: './ligaments-and-tendons.component.html',
  styleUrls: ['./ligaments-and-tendons.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LigamentsAndTendonsComponent extends SlideBaseComponent<LigamentsAndTendonsUiModel> {
  dynamicConfig: FindingColumnConfig;
  findingHandler: DynamicComponentHandler<LigamentsAndTendonsFindingUiModel>;
  findingTypes: DropdownModel[];
  w013DifferentialDiagnosis: DropdownModel[];
  largeLocalizerOpen = false;
  findingTypesEnum: typeof FindingTypeEnum;
  areFindingsType: typeof AreFindingsEnum;
  associatedFindingsType: typeof AssociatedFindingsTypeEnum;
  ruptureLocalizationType: typeof LocalizationOfTheTendonRuptureTypeEnum;
  ruptureTypes: typeof RuptureTypeEnum;
  localizationType: typeof LocalizationTypeEnum;
  localization: typeof FeetSimpleModel;
  localizationUiModel = new LocalizationUiModel();

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public validationHelperService: ValidationHelperService
  ) {
    super(
      navService,
      slideRequestService,
      changeDetectionService,
      LigamentsAndTendonsUiModel,
      commonServices,
      LigamentsAndTendonsValidationModel
    );

    this.prepareConfiguration();
    this.findingHandler = new DynamicComponentHandler<LigamentsAndTendonsFindingUiModel>(
      this.logger,
      this.model.findings,
      LigamentsAndTendonsFindingUiModel
    );

    this.registerCallbacks();
    this.initTranslations();

    this.findingTypesEnum = FindingTypeEnum;
    this.areFindingsType = AreFindingsEnum;
    this.associatedFindingsType = AssociatedFindingsTypeEnum;
    this.ruptureLocalizationType = LocalizationOfTheTendonRuptureTypeEnum;
    this.ruptureTypes = RuptureTypeEnum;
    this.localizationType = LocalizationTypeEnum;
    this.localization = FeetSimpleModel;
  }

  private registerCallbacks() {
    this.registerGetCallback((modelOut: LigamentsAndTendonsUiModel) => {
      this.findingHandler.reinitializeCollection(modelOut.findings);
    });

    this.registerSaveCallback((modelOut: LigamentsAndTendonsUiModel) => {
      this.findingHandler.collectionPostSaveCleanup(modelOut.findings);
    });

    this.registerPreSaveCallback(() => {
      this.findingHandler.collectionPreSaveCleanup();
    });

    this.registerConnectionCallback(1, LocalizationUiModel, (localizationUiModel: LocalizationUiModel) => {
      if (localizationUiModel) {
        this.localizationUiModel = localizationUiModel;
      }
    });
  }

  private prepareConfiguration(): void {
    this.dynamicConfig = new FindingColumnConfig();
    this.dynamicConfig.itemCount = 9;
    const columnIds = this.dynamicConfig.findingColumnIds;
    columnIds.findingRRId = 'anc_m_040106';
    columnIds.iDescribeLabelRRId = 'anc_m_040115';
    columnIds.iKnowLabelRRId = 'anc_m_040117';
    columnIds.iDescribeRadioRRId = 'anc_m_040116';
    columnIds.iKnowRadioRRId = 'anc_m_040118';
    columnIds.buttonRRId = 'anc_m_040107';
  }

  public clearModel(): void {
    // tendinopathy
    this.findingHandler.currentItem.isTendinopathy = false;
    this.findingHandler.currentItem.craniocaudaleExtensionInMm = null;
    this.findingHandler.currentItem.isLongitudinalTear = false;
    this.findingHandler.currentItem.localizationOfTendonRuptureType = this.ruptureLocalizationType.None;
    this.findingHandler.currentItem.isFluidInTheTendonSheathDistalToTheLateralMalleolus = false;
    this.findingHandler.currentItem.isPseudotumorOnTheBackOfTheFoot = false;
    this.findingHandler.currentItem.isPesPlanumDeformity = false;
    this.findingHandler.currentItem.ruptureType = this.ruptureTypes.None;
    this.findingHandler.currentItem.maxExtentInCrossSectionInPercent = null;
    this.findingHandler.currentItem.retractionInMm = null;
    this.findingHandler.currentItem.isReRupture = false;
    this.findingHandler.currentItem.isSoftTissueHematoma = false;
    // rupture
    this.findingHandler.currentItem.isTear = false;
    this.findingHandler.currentItem.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.findingHandler.currentItem.isEdemaInKagerFatPad = false;
    this.findingHandler.currentItem.isPeritendinousEdema = false;
    this.findingHandler.currentItem.isDorsalHeelSpur = false;
    this.findingHandler.currentItem.isHaglundDeformity = false;
    this.findingHandler.currentItem.isOsteitisOfTheTuber = false;
    this.findingHandler.currentItem.isIntratendinousSoftTissueIntensive = false;
    this.findingHandler.currentItem.isCalcifyingTendinitis = false;
    this.findingHandler.currentItem.isRetrocalcanealSubachillealBursitis = false;
    this.findingHandler.currentItem.isFusiformContour = false;
    this.findingHandler.currentItem.isConvexAnteriorContour = false;
    this.findingHandler.currentItem.sizeInMm = null;
    this.findingHandler.currentItem.distanceToTuberCalcaneiInMm = null;
    this.findingHandler.currentItem.maxSagittalDiameterInMm = null;
    this.findingHandler.currentItem.localizationType = this.localizationType.None;
    this.findingHandler.currentItem.isMPeroneusLongusTendon = false;
    this.findingHandler.currentItem.isFluidInTheCommonTendonSheathOfThePeronealTendons = false;
    this.findingHandler.currentItem.isFluidInTheTendonSheathDistalToTheLateralMalleolus = false;
    this.findingHandler.currentItem.isOsPeroneum = false;
    this.findingHandler.currentItem.isGanglionAtTheLevelOfTheInsertionAtOsMetatarsalD1OsCuboideum = false;
    this.findingHandler.currentItem.isTendonDislocation = false;
    this.findingHandler.currentItem.associatedFindingsType = this.associatedFindingsType.None;
    this.findingHandler.currentItem.isTendovaginitis = false;
    this.findingHandler.currentItem.isFluidInTendonSheath = false;
    this.findingHandler.currentItem.isAccompanyingBoneMarrowEdema = false;
    this.findingHandler.currentItem.isOsTibialAccessorium = false;
    this.findingHandler.currentItem.isGanglionToInsertionBaseDistalPhalanxD1 = false;
    this.findingHandler.currentItem.isAnkleJointEffusion = false;
    this.findingHandler.currentItem.isOsTrigonumSyndrome = false;
    this.findingHandler.currentItem.isAfterHalluxValgusSurgery = false;
    this.findingHandler.currentItem.isContactWithOsteosynthesisMaterial = false;
    this.findingHandler.currentItem.isTendovaginitisDueToOsteophyteAtDorsomedialDistalTibia = false;
    this.findingHandler.currentItem.isPeritendinitis = false;
    this.findingHandler.currentItem.isT1wHyperintensity = false;
    this.findingHandler.currentItem.isT2wPDHyperintensity = false;
    this.findingHandler.currentItem.isThickening = false;
    this.findingHandler.currentItem.isTendonHypervascularisation = false;
    this.validationHelperService.removeError('ruptureType');
    this.validationHelperService.removeError('isTendinopathy');
  }

  public onLargeLocalizerClose(): void {
    this.largeLocalizerOpen = false;
  }

  public openLargeLocalizer(): void {
    this.largeLocalizerOpen = true;
  }

  isCurrentItem(item: string): boolean {
    return this.findingHandler.currentItem.findingType === item;
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('feetMRT.ligamentsAndTendons.findingTypes.options').subscribe((out: DropdownModel[]) => {
        this.dynamicConfig.dropdownValues = Object.keys(out).map(e => out[e]);
      }),
      this.translate.stream('shared.pleaseSelect').subscribe((out: string) => {
        this.dynamicConfig.placeholder = out;
      }),
      this.translate.stream('feetMRT.ligamentsAndTendons.addNewFinding.value').subscribe((out: string) => {
        this.dynamicConfig.buttonText = out;
      }),
      this.translate.stream('feetMRT.ligamentsAndTendons.W013DifferentialDiagnosis').subscribe((out: DropdownModel[]) => {
        this.w013DifferentialDiagnosis = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
