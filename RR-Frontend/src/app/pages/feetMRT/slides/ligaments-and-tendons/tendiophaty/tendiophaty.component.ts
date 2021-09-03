import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LigamentsAndTendonsFindingUiModel } from '@models/feetMRT/ui/ligaments-and-tendons/ligaments-and-tendons-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AssociatedFindingsTypeEnum } from '@enums/feetMRT/ligaments-and-tendos/associated-findings-type.enum';
import {
  LocalizationOfTheTendonRuptureTypeEnum,
  DifferentialDiagnosisTypeEnum,
  LocalizationTypeEnum,
  RuptureTypeEnum
} from '@enums/feetMRT/ligaments-and-tendos';
import { FeetSimpleModel } from '@models/feetMRT/ui/localizers/feet-simple.model';
import { every } from 'lodash';

@Component({
  selector: 'rr-tendiophaty',
  templateUrl: './tendiophaty.component.html',
  styleUrls: ['./tendiophaty.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TendiophatyComponent {
  @Input() model: LigamentsAndTendonsFindingUiModel;
  @Input() w013DifferentialDiagnosis: DropdownModel[];
  @Input() side: FeetSimpleModel;
  @Output() openLargeLocalizer = new EventEmitter();

  associatedFindingsType: typeof AssociatedFindingsTypeEnum;
  ruptureLocalizationType: typeof LocalizationOfTheTendonRuptureTypeEnum;
  ruptureTypes: typeof RuptureTypeEnum;
  localizationType: typeof LocalizationTypeEnum;
  localization: typeof FeetSimpleModel;

  constructor() {
    this.initializeEnums();
  }

  private initializeEnums(): void {
    this.associatedFindingsType = AssociatedFindingsTypeEnum;
    this.ruptureTypes = RuptureTypeEnum;
    this.ruptureLocalizationType = LocalizationOfTheTendonRuptureTypeEnum;
    this.localizationType = LocalizationTypeEnum;
  }

  public localizerNotSelected(): boolean {
    return every(this.model.extraarticularLocalizationType, bone => !bone);
  }

  public openLargeLocalizerTendons() {
    this.openLargeLocalizer.emit();
  }

  public resetRuptureModel(type: string): void {
    if (type === 'TibialisAnterior' || type === 'TibialisPosterior' || type === 'TendonOfPeroneus' || type === 'AchillesTendon') {
      this.model.craniocaudaleExtensionInMm = null;
      this.model.isLongitudinalTear = false;
    }
    if (type === 'AchillesTendon' || type === 'FlexorHallucisLongus') {
      this.model.localizationOfTendonRuptureType = this.ruptureLocalizationType.None;
    }
    if (type === 'AchillesTendon') {
      this.model.distanceFromTuberCalcanei = null;
    }
    if (type === 'TendonOfPeroneus') {
      if (this.model.isTendinopathy) {
        this.model.isFluidInTheTendonSheathDistalToTheLateralMalleolus = false;
      }
    }
    if (type === 'TibialisPosterior') {
      this.model.isPseudotumorOnTheBackOfTheFoot = false;
      this.model.isPesPlanumDeformity = false;
    }
    this.model.ruptureType = this.ruptureTypes.None;
    this.model.maxExtentInCrossSectionInPercent = null;
    this.model.retractionInMm = null;
    this.model.isReRupture = false;
    this.model.isSoftTissueHematoma = false;
  }

  public resetTendinopathyModel(type: string): void {
    if (type === 'AchillesTendon') {
      this.model.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
      this.model.isEdemaInKagerFatPad = false;
      this.model.isPeritendinousEdema = false;
      this.model.isDorsalHeelSpur = false;
      this.model.isHaglundDeformity = false;
      this.model.isOsteitisOfTheTuber = false;
      this.model.isIntratendinousSoftTissueIntensive = false;
      this.model.isCalcifyingTendinitis = false;
      this.model.isRetrocalcanealSubachillealBursitis = false;
      this.model.isFusiformContour = false;
      this.model.isConvexAnteriorContour = false;
      this.model.sizeInMm = null;
      this.model.distanceToTuberCalcaneiInMm = null;
      this.model.maxSagittalDiameterInMm = null;
      this.model.localizationType = this.localizationType.None;
    }
    if (type === 'TendonOfPeroneus') {
      this.model.isMPeroneusLongusTendon = false;
      this.model.isFluidInTheCommonTendonSheathOfThePeronealTendons = false;
      this.model.isFluidInTheTendonSheathDistalToTheLateralMalleolus = false;
      this.model.isOsPeroneum = false;
      this.model.isGanglionAtTheLevelOfTheInsertionAtOsMetatarsalD1OsCuboideum = false;
      this.model.isTendonDislocation = false;
      this.model.associatedFindingsType = this.associatedFindingsType.None;
    }
    if (type === 'TibialisPosterior') {
      this.model.isTendovaginitis = false;
      this.model.isFluidInTendonSheath = false;
      this.model.isAccompanyingBoneMarrowEdema = false;
      this.model.isOsTibialAccessorium = false;
    }
    if (type === 'FlexorHallucisLongus') {
      this.model.isTendovaginitis = false;
      this.model.isCalcifyingTendinitis = false;
      this.model.isGanglionToInsertionBaseDistalPhalanxD1 = false;
      this.model.isFluidInTendonSheath = false;
      this.model.isAnkleJointEffusion = false;
      this.model.isOsTrigonumSyndrome = false;
      this.model.isAfterHalluxValgusSurgery = false;
      this.model.isContactWithOsteosynthesisMaterial = false;
    }
    if (type === 'FlexorDigitorumLongus') {
      this.model.isTendovaginitis = false;
      this.model.isAfterHalluxValgusSurgery = false;
      this.model.isContactWithOsteosynthesisMaterial = false;
    }
    if (type === 'TibialisAnterior') {
      this.model.isTendovaginitis = false;
      this.model.isCalcifyingTendinitis = false;
      this.model.isTendovaginitisDueToOsteophyteAtDorsomedialDistalTibia = false;
      this.model.isTendonDislocation = false;
    }
    if (type !== 'AchillesTendon') {
      this.model.isPeritendinitis = false;
    }
    this.model.isT1wHyperintensity = false;
    this.model.isT2wPDHyperintensity = false;
    this.model.isThickening = false;
    this.model.isTendonHypervascularisation = false;
  }
}
