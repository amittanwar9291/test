import { PancreasFindingTypeEnum } from '@enums/abdomenMRT/pancreas/';
import { DiffuseParenchymalDifferentialDiagnosisEnum } from '@enums/abdomenMRT/pancreas/diffuse-parenchymal-changes';
import { HistologyKnownTypeEnum, MassDifferentialDiagnosisTypeEnum } from '@enums/abdomenMRT/pancreas/mass';
import {
  AnatomicalVariantsAnomalyFindingTypeEnum,
  PancreasAnulareClassificationTypeEnum,
  PancreasDivisumClassificationTypeEnum
} from '@enums/abdomenMRT/pancreas/norm-variant-anomaly';
import { PathologyTypeEnum, PostoperativeFindingTypeEnum } from '@enums/abdomenMRT/pancreas/postinterventional-postoperative-findings';
import { HomogeneityTypeEnum } from '@enums/abdomenMRT/homogeneity-type.enum';
import {
  AcutePancreatitisDiagnosisTypeEnum,
  AcutePancreatitisExpansionTypeEnum,
  AssessmentTypeEnum
} from '@enums/abdomenMRT/pancreas/acute-pancreatitis';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { PancreasFindingBaseUiModel } from '@models/abdomenMRT/ui/pancreas/pancreas-finding-base-ui.model';

export class PancreasFindingUiModel extends PancreasFindingBaseUiModel {
  findingType: PancreasFindingTypeEnum;

  // common
  isSubordinate: boolean;
  isPancreaticBody: boolean;
  isSuspicionOf: boolean;
  isFat: boolean;
  isPseudoaneurysm: boolean;
  isWalledOffNecrosis: boolean;

  // NormVariantAnomaly
  anatomicalVariantsAnomalyFindingType: AnatomicalVariantsAnomalyFindingTypeEnum;
  pancreasDivisumClassificationType: PancreasDivisumClassificationTypeEnum;
  isStenosisOfTheMinorPapilla: boolean;
  pancreaticDuctDilatation: number;
  pancreasAnulareClassificationType: PancreasAnulareClassificationTypeEnum;
  isObstructionOfTheAbberantPancreaticDuct: boolean;

  // AcutePancreatitis
  isFluidAccumulation: boolean;
  isIsolated: boolean;
  isConnectionToTheDuctusPancreaticus: boolean;
  isMultifocal: boolean;
  isCommunicating: boolean;
  isBursaOmentalis: boolean;
  isPeritonealCavity: boolean;
  isAnteriorPararenalSpace: boolean;
  isPelvis: boolean;
  isParenchymalNecrosis: boolean;
  acutePancreatitisExpansionType: AcutePancreatitisExpansionTypeEnum;
  isGas: boolean;
  isDebris: boolean;
  isAdjacentEdematousIntestinalWallChange: boolean;
  isExtrahepaticCholestasis: boolean;
  ductHepatocholedochusDiameter: number;
  isExtrahepaticCholestasisAdjacent: boolean;
  extrahepaticCholestasis: number;
  isCholecystitis: boolean;
  isAbscess: boolean;
  isIntrapancreatic: boolean;
  isExtrapancreatic: boolean;
  abscessExpansion: number;
  isFistula: boolean;
  isColon: boolean;
  isThrombosis: boolean;
  isSplenicVein: boolean;
  isSplenicVeinCompleteOcclusion: boolean;
  isPortalVeinCompleteOcclusion: boolean;
  isBleeding: boolean;
  isPseudoaneurysmSplenicArtery: boolean;
  isPseudoaneurysmGastroduodenalArtery: boolean;
  isPseudoaneurysmPancreaticoduodenalArtery: boolean;
  isTruncusCoelicus: boolean;
  isFatTissueNecrosis: boolean;
  assessmentType: AssessmentTypeEnum;
  isAcuteOnChronic: boolean;
  isAcutePeripancreaticFluidCollection: boolean;
  isPseudocysts: boolean;
  acutePancreatitisDiagnosisType: AcutePancreatitisDiagnosisTypeEnum;
  isAcuteNecroticFluidCollection: boolean;
  isParenchymatous: boolean;
  isPeripancreatic: boolean;

  // Mass
  descriptionType: DescriptionTypeEnum;
  mainMassDifferentialDiagnosisType1: MassDifferentialDiagnosisTypeEnum;
  isHistologyKnown: boolean;
  histologyKnownType: HistologyKnownTypeEnum;
  size: number;
  secondPlane: number;
  thirdPlane: number;
  massDifferentialDiagnosisType1: MassDifferentialDiagnosisTypeEnum;
  massDifferentialDiagnosisType2: MassDifferentialDiagnosisTypeEnum;
  massDifferentialDiagnosisType3: MassDifferentialDiagnosisTypeEnum;

  // DiffuseParenchymalChanges
  diffuseParenchymalChangesHomogeneityType: HomogeneityTypeEnum;
  isEnhancementOfTheCapsule: boolean;
  isDiffuseSmallestFatNecroses: boolean;
  isMultipleLesions: boolean;
  diameterLargestLesion: number;
  isPseudocyst: boolean;
  isPseudocystEnhancementOfTheCapsule: boolean;
  isPseudocystMultipleLesions: boolean;
  pseudocystDiameterLargestLesion: number;
  characterizationIIIHomogeneityType: HomogeneityTypeEnum;
  diffuseParenchymalDifferentialDiagnosis1: DiffuseParenchymalDifferentialDiagnosisEnum;
  diffuseParenchymalDifferentialDiagnosis2: DiffuseParenchymalDifferentialDiagnosisEnum;

  // PostinterventionalPostoperativeFindings

  dateOfOperation: MonthYearModel;
  postoperativeFindingType: PostoperativeFindingTypeEnum;
  pathologyType: PathologyTypeEnum;
  constructor() {
    super();
    this.findingType = PancreasFindingTypeEnum.None;

    // common
    this.isSubordinate = false;
    this.isPancreaticBody = false;
    this.isSuspicionOf = false;
    this.isFat = false;
    this.isPseudoaneurysm = false;
    this.isWalledOffNecrosis = false;

    // NormVariantAnomaly
    this.anatomicalVariantsAnomalyFindingType = AnatomicalVariantsAnomalyFindingTypeEnum.None;
    this.pancreasDivisumClassificationType = PancreasDivisumClassificationTypeEnum.None;
    this.isStenosisOfTheMinorPapilla = false;
    this.pancreaticDuctDilatation = null;
    this.pancreasAnulareClassificationType = PancreasAnulareClassificationTypeEnum.None;
    this.isObstructionOfTheAbberantPancreaticDuct = false;

    // AcutePancreatitis
    this.isFluidAccumulation = false;
    this.isIsolated = false;
    this.isConnectionToTheDuctusPancreaticus = false;
    this.isMultifocal = false;
    this.isCommunicating = false;
    this.isBursaOmentalis = false;
    this.isPeritonealCavity = false;
    this.isAnteriorPararenalSpace = false;
    this.isPelvis = false;
    this.isParenchymalNecrosis = false;
    this.acutePancreatitisExpansionType = AcutePancreatitisExpansionTypeEnum.None;
    this.isGas = false;
    this.isDebris = false;
    this.isAdjacentEdematousIntestinalWallChange = false;
    this.isExtrahepaticCholestasis = false;
    this.ductHepatocholedochusDiameter = null;
    this.isExtrahepaticCholestasisAdjacent = false;
    this.extrahepaticCholestasis = null;
    this.isCholecystitis = false;
    this.isAbscess = false;
    this.isIntrapancreatic = false;
    this.isExtrapancreatic = false;
    this.abscessExpansion = null;
    this.isFistula = false;
    this.isColon = false;
    this.isThrombosis = false;
    this.isSplenicVein = false;
    this.isSplenicVeinCompleteOcclusion = false;
    this.isPortalVeinCompleteOcclusion = false;
    this.isBleeding = false;
    this.isPseudoaneurysmSplenicArtery = false;
    this.isPseudoaneurysmGastroduodenalArtery = false;
    this.isPseudoaneurysmPancreaticoduodenalArtery = false;
    this.isTruncusCoelicus = false;
    this.isFatTissueNecrosis = false;
    this.assessmentType = AssessmentTypeEnum.None;
    this.isAcuteOnChronic = false;
    this.isAcutePeripancreaticFluidCollection = false;
    this.isPseudocysts = false;
    this.acutePancreatitisDiagnosisType = AcutePancreatitisDiagnosisTypeEnum.None;
    this.isAcuteNecroticFluidCollection = false;
    this.isParenchymatous = false;
    this.isPeripancreatic = false;

    // Mass
    this.descriptionType = DescriptionTypeEnum.None;
    this.mainMassDifferentialDiagnosisType1 = MassDifferentialDiagnosisTypeEnum.None;
    this.isHistologyKnown = false;
    this.histologyKnownType = HistologyKnownTypeEnum.None;
    this.size = null;
    this.secondPlane = null;
    this.thirdPlane = null;
    this.massDifferentialDiagnosisType1 = MassDifferentialDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosisType2 = MassDifferentialDiagnosisTypeEnum.None;
    this.massDifferentialDiagnosisType3 = MassDifferentialDiagnosisTypeEnum.None;

    // DiffuseParenchymalChanges
    this.diffuseParenchymalChangesHomogeneityType = HomogeneityTypeEnum.None;
    this.isEnhancementOfTheCapsule = false;
    this.isDiffuseSmallestFatNecroses = false;
    this.isMultipleLesions = false;
    this.diameterLargestLesion = null;
    this.isPseudocyst = false;
    this.isPseudocystEnhancementOfTheCapsule = false;
    this.isPseudocystMultipleLesions = false;
    this.pseudocystDiameterLargestLesion = null;
    this.characterizationIIIHomogeneityType = HomogeneityTypeEnum.None;
    this.diffuseParenchymalDifferentialDiagnosis1 = DiffuseParenchymalDifferentialDiagnosisEnum.None;
    this.diffuseParenchymalDifferentialDiagnosis2 = DiffuseParenchymalDifferentialDiagnosisEnum.None;

    // PostinterventionalPostoperativeFindings
    this.dateOfOperation = new MonthYearModel();
    this.postoperativeFindingType = PostoperativeFindingTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
  }
}
