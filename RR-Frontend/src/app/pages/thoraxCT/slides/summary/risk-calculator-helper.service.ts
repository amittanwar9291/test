import { Injectable } from '@angular/core';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { LungParenchymaDensityTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-density-type.enum';
import { LungParenchymaLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-localization-type.enum';
import { SubsolidTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/subsolid-type.enum';
import { NoduleRiskTypeEnum } from '@enums/thoraxCT/summary/nodule-risk-type.enum';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { SummaryRiskModel } from '@models/thoraxCT/ui/summary/summary-risk.model';
import { RiskCalculatorValues } from './risk-calculator-constants';

@Injectable({
  providedIn: 'root'
})
export class RiskCalculatorHelperService {
  riskDataModel: SummaryRiskModel;

  pageInitializationObject = {
    isFistPageInitialized: false,
    isSecondPageInitialized: false,
    isFifthPageInitialized: false,
    isSixthPageInitialized: false
  };

  constructor() {
    this.riskDataModel = new SummaryRiskModel();
  }

  isServiceInitialized(): boolean {
    return (
      this.pageInitializationObject.isFistPageInitialized &&
      this.pageInitializationObject.isSecondPageInitialized &&
      this.pageInitializationObject.isFifthPageInitialized &&
      this.pageInitializationObject.isSixthPageInitialized
    );
  }

  private areMandatoryValues(): boolean {
    const mandatoryProperties = [
      this.riskDataModel.sex,
      this.riskDataModel.noduleSize,
      this.riskDataModel.noduleType,
      this.riskDataModel.noduleCount
    ];

    return !mandatoryProperties.filter(value => value == null).length;
  }

  initializeFirstPage(age: number, gender: GenderTypeEnum) {
    this.riskDataModel.age = age ?? 0;
    this.riskDataModel.sex = gender;

    this.pageInitializationObject.isFistPageInitialized = true;
  }

  initializeSecondPage(isPositiveHistoryOfLungCancer: boolean) {
    this.riskDataModel.isPositiveHistoryOfLungCancer = isPositiveHistoryOfLungCancer;

    this.pageInitializationObject.isSecondPageInitialized = true;
  }

  initializeFifthPage(roundStoveFinding: LungParenchymaFindingUiModel) {
    this.setNoduleSize(roundStoveFinding.measuredValuesMaxDiameterAxialInMm);

    this.setNoduleType(roundStoveFinding);

    this.setIsNoduleInUpperLung(roundStoveFinding);

    this.riskDataModel.isSpiculation = roundStoveFinding.isCoronaRadiataOrSpiculae;

    this.pageInitializationObject.isFifthPageInitialized = true;
  }

  initializeSixthPage(isEmphysema: boolean) {
    this.riskDataModel.isEmphysema = isEmphysema;
    this.pageInitializationObject.isSixthPageInitialized = true;
  }

  private setNoduleSize(noduleSize: number) {
    if (noduleSize !== null) {
      this.riskDataModel.noduleSize = noduleSize;
    }
  }

  private setNoduleType(roundStoveFinding: LungParenchymaFindingUiModel) {
    if (roundStoveFinding.subsolidType === SubsolidTypeEnum.PartiallySolid) {
      this.riskDataModel.noduleType = NoduleRiskTypeEnum.PartiallySolid;
      return;
    }

    if (roundStoveFinding.subsolidType === SubsolidTypeEnum.GroundGlassLesion) {
      this.riskDataModel.noduleType = NoduleRiskTypeEnum.NonSolid;
      return;
    }

    if (roundStoveFinding.densityType === LungParenchymaDensityTypeEnum.Solid) {
      this.riskDataModel.noduleType = NoduleRiskTypeEnum.Solid;
    }
  }

  private setIsNoduleInUpperLung(roundStoveFinding: LungParenchymaFindingUiModel) {
    this.riskDataModel.isNoduleInUpperLung = false;

    if (roundStoveFinding.mainCharacteristicsLocalizationType === LungParenchymaLocalizationTypeEnum.AtLobeLevel) {
      const { rightUL, leftUL } = roundStoveFinding.mainCharacteristicsLungsFlapsLocation;

      if (rightUL || leftUL) {
        this.riskDataModel.isNoduleInUpperLung = true;
        return;
      }
    }

    if (roundStoveFinding.mainCharacteristicsLocalizationType === LungParenchymaLocalizationTypeEnum.AtSegmentLevel) {
      const { rightS1, rightS2, rightS3, leftS1AndS2, leftS3 } = roundStoveFinding.mainCharacteristicsLungsSegmentsLocation;

      if (rightS1 || rightS2 || rightS3 || leftS1AndS2 || leftS3) {
        this.riskDataModel.isNoduleInUpperLung = true;
      }
    }
  }

  calculateRisk(): number {
    if (!this.areMandatoryValues()) {
      return;
    }

    const logOdds = this.getLogCancerOdds();

    const eToLogOdds = Math.pow(Math.E, logOdds);
    const cancerProbability = 100 * (eToLogOdds / (1 + eToLogOdds));

    return +cancerProbability.toFixed(2);
  }

  private getLogCancerOdds() {
    const ageRelatedCancerOdds = RiskCalculatorValues.ageMultiplier * (this.riskDataModel.age - RiskCalculatorValues.ageDecrement);
    const sexRelatedCancerOdds = this.getSexRelatedCancerOdds(this.riskDataModel.sex);

    const positiveFamilyCancerHistoryRelatedOdds = this.riskDataModel.isPositiveHistoryOfLungCancer
      ? RiskCalculatorValues.positiveHistoryOfLungCancerRisk
      : 0;
    const emphysemaCancerRelatedOdds = this.riskDataModel.isEmphysema ? RiskCalculatorValues.emphysemaRisk : 0;
    const spiculationRelatedOdds = this.riskDataModel.isSpiculation ? RiskCalculatorValues.spiculationRisk : 0;

    const noduleRelatedOdds = this.getNoduleRelateCancerOdds();

    return (
      ageRelatedCancerOdds +
      sexRelatedCancerOdds +
      positiveFamilyCancerHistoryRelatedOdds +
      emphysemaCancerRelatedOdds +
      spiculationRelatedOdds +
      noduleRelatedOdds -
      6.7892
    );
  }

  private getSexRelatedCancerOdds(gender: GenderTypeEnum) {
    switch (gender) {
      case GenderTypeEnum.Female:
        return RiskCalculatorValues.femaleGenderRisk;

      case GenderTypeEnum.Male:
        return RiskCalculatorValues.maleGenderRisk;

      default:
        throw new Error('Incorrect gender type!');
    }
  }

  private getNoduleRelateCancerOdds() {
    const fromNoduleSize =
      RiskCalculatorValues.noduleSizeMultiplier *
      (Math.pow(this.riskDataModel.noduleSize / 10, -0.5) - RiskCalculatorValues.noduleSizeDecrement);
    const fromNoduleCount =
      RiskCalculatorValues.noduleCountMultiplier * (this.riskDataModel.noduleCount - RiskCalculatorValues.noduleCountDecrement);

    const fromNoduleType = this.getNoduleTypeRelatedCancerOdds(this.riskDataModel.noduleType);
    const fromUpperLungNodule = this.riskDataModel.isNoduleInUpperLung ? RiskCalculatorValues.noduleInUpperLungRisk : 0;

    return fromNoduleType + fromUpperLungNodule - fromNoduleSize - fromNoduleCount;
  }

  private getNoduleTypeRelatedCancerOdds(noduleType: NoduleRiskTypeEnum) {
    switch (noduleType) {
      case NoduleRiskTypeEnum.NonSolid:
        return RiskCalculatorValues.noduleNonsolidRisk;

      case NoduleRiskTypeEnum.Solid:
        return RiskCalculatorValues.noduleSolidRisk;

      case NoduleRiskTypeEnum.PartiallySolid:
        return RiskCalculatorValues.nodulePartiallySolidRisk;

      default:
        throw new Error('Incorrect nodule type!');
    }
  }
}
