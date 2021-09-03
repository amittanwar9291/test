import { FindingBase } from '@models/shared/finding/finding.base';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { PathologyTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/pathology-type.enum';
import { SeverityTypeEnum } from '@enums/shared/angiography/severity-type.enum';
import { FormTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/form-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/differential-diagnosis-type.enum';
import { ShapeTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/shape-type.enum';
import { SubarachnoidHemorrhageTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/subarachnoid-hemorrhage-type.enum';
import { AffectedBranchTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/affected-branch-type.enum';
import { SupraaorticVesselsFindingTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/supraaortic-vessels-finding-type.enum';

export class SupraaorticVesselsFindingApiModel extends FindingBase {
  findingType: SupraaorticVesselsFindingTypeEnum;
  sideType: LocationTypeEnum;
  pathologyType: PathologyTypeEnum;
  severityType: SeverityTypeEnum;
  isHemodynamicallyRelevant;
  diameterStenosis: number;
  diameterDiseaseFreePoststenoticSegment: number;
  degreeOfStenosisCalculatedInNASCET: number;

  isCalcification: boolean;
  isSoftPlaque: boolean;

  formType: FormTypeEnum;
  length: number;
  isShortStenosis: boolean;
  isWallHematoma: boolean;
  isContrastEnhancementOfTheArterialWall: boolean;
  isLocoregionalObliterationFattyTissue: boolean;
  isCaliberIrregularities: boolean;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  isPanarteritisNodosa: boolean;
  shapeType: ShapeTypeEnum;
  maxDiameter: number;
  isBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery: boolean;
  isCirculusArteriosusWillisii: boolean;
  isSubarachnoidHemorrhage: boolean;
  subarachnoidHemorrhageType: SubarachnoidHemorrhageTypeEnum;

  isRightP1HypoplasiaOrFTPConfiguration: boolean;
  isRightP1Aplasia: boolean;
  isRightP1SplittingOrDuplication: boolean;
  isRightA1Hypoplasia: boolean;
  isRightA1Aplasia: boolean;
  isRightA1SplittingOrDuplication: boolean;
  isRightAcomPHypoplasia: boolean;
  isRightAcomPAplasia: boolean;
  isRightPICAEndingAV: boolean;
  isRightAVHypoplasia: boolean;
  isRightAVAplasia: boolean;
  isRightTripleACA: boolean;
  isRightAcomAHypoplasia: boolean;
  isRightAcomAAplasia: boolean;
  isRightAcomASplittingOrDuplication: boolean;
  isLeftP1HypoplasiaOrFTPConfiguration: boolean;
  isLeftP1Aplasia: boolean;
  isLeftP1SplittingOrDuplication: boolean;
  isLeftA1Hypoplasia: boolean;
  isLeftA1Aplasia: boolean;
  isLeftA1SplittingOrDuplication: boolean;
  isLeftAcomPHypoplasia: boolean;
  isLeftAcomPAplasia: boolean;
  isLeftPICAEndingAV: boolean;
  isLeftAVHypoplasia: boolean;
  isLeftAVAplasia: boolean;
  isLeftTripleACA: boolean;
  isLeftAcomAHypoplasia: boolean;
  isLeftAcomAAplasia: boolean;
  isLeftAcomASplittingOrDuplication: boolean;

  // region InternalCarotidArtery
  internalCarotidArterySegmentsLocation: string;

  // region ExternalCarotidArtery
  affectedBranchType: AffectedBranchTypeEnum;

  // region VertebralArtery
  isSegmentV1: boolean;
  isSegmentV2: boolean;
  isSegmentV3: boolean;
  isSegmentV4: boolean;
  isContralateralVertebralArtery: boolean;

  // region CircleOfWillisCerebralArteries
  affectedSegmentsOrVesselsLocation: string;
  isLeptomeningealCollaterals: boolean;
  isContralateralInternalCarotidArtery: boolean;
  isPosteriorCommunicansArtery: boolean;
  isOphtalmicArtery: boolean;

  // region CerebralVeinsOrVenousSinuses
  isSuperiorSagittalSinus: boolean;
  isInferiorSagittalSinus: boolean;
  isGreatCerebralVein: boolean;
  isStraightSinus: boolean;
  isConfluenceOfSinuses: boolean;
  isTransverseSinus: boolean;
  isRightTransverseSinus: boolean;
  isLeftTransverseSinus: boolean;
  isSigmoidSinus: boolean;
  isRightSigmoidSinus: boolean;
  isLeftSigmoidSinus: boolean;
  isSuperiorPetrosalSinus: boolean;
  isRightSuperiorPetrosalSinus: boolean;
  isLeftSuperiorPetrosalSinus: boolean;
  isInferiorPetrosalSinus: boolean;
  isRightInferiorPetrosalSinus: boolean;
  isLeftInferiorPetrosalSinus: boolean;
  isInternalJugularVein: boolean;
  isRightInternalJugularVein: boolean;
  isLeftInternalJugularVein: boolean;
  isCavernousSinus: boolean;

  isRightCavernousSinus: boolean;
  isLeftCavernousSinus: boolean;
  isCerebralEdema: boolean;

  constructor() {
    super();
    this.findingType = SupraaorticVesselsFindingTypeEnum.None;

    this.sideType = LocationTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
    this.severityType = SeverityTypeEnum.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosis = null;
    this.diameterDiseaseFreePoststenoticSegment = null;
    this.degreeOfStenosisCalculatedInNASCET = null;
    this.isCalcification = false;
    this.isSoftPlaque = false;

    this.formType = FormTypeEnum.None;
    this.length = null;
    this.isShortStenosis = false;
    this.isWallHematoma = false;
    this.isContrastEnhancementOfTheArterialWall = false;
    this.isLocoregionalObliterationFattyTissue = false;

    this.isCaliberIrregularities = false;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.isPanarteritisNodosa = false;
    this.shapeType = ShapeTypeEnum.None;
    this.maxDiameter = null;
    this.isBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery = false;
    this.isCirculusArteriosusWillisii = false;
    this.isSubarachnoidHemorrhage = false;
    this.subarachnoidHemorrhageType = SubarachnoidHemorrhageTypeEnum.None;

    this.isRightP1HypoplasiaOrFTPConfiguration = false;
    this.isRightP1Aplasia = false;
    this.isRightP1SplittingOrDuplication = false;
    this.isRightA1Hypoplasia = false;
    this.isRightA1Aplasia = false;
    this.isRightA1SplittingOrDuplication = false;
    this.isRightAcomPHypoplasia = false;
    this.isRightAcomPAplasia = false;
    this.isRightPICAEndingAV = false;
    this.isRightAVHypoplasia = false;
    this.isRightAVAplasia = false;
    this.isRightTripleACA = false;
    this.isRightAcomAHypoplasia = false;
    this.isRightAcomAAplasia = false;
    this.isRightAcomASplittingOrDuplication = false;
    this.isLeftP1HypoplasiaOrFTPConfiguration = false;
    this.isLeftP1Aplasia = false;
    this.isLeftP1SplittingOrDuplication = false;
    this.isLeftA1Hypoplasia = false;
    this.isLeftA1Aplasia = false;
    this.isLeftA1SplittingOrDuplication = false;
    this.isLeftAcomPHypoplasia = false;
    this.isLeftAcomPAplasia = false;
    this.isLeftPICAEndingAV = false;
    this.isLeftAVHypoplasia = false;
    this.isLeftAVAplasia = false;
    this.isLeftTripleACA = false;
    this.isLeftAcomAHypoplasia = false;
    this.isLeftAcomAAplasia = false;
    this.isLeftAcomASplittingOrDuplication = false;

    // region InternalCarotidArtery
    this.internalCarotidArterySegmentsLocation = 'None';

    // region ExternalCarotidArtery
    this.affectedBranchType = AffectedBranchTypeEnum.None;

    // region VertebralArtery
    this.isSegmentV1 = false;
    this.isSegmentV2 = false;
    this.isSegmentV3 = false;
    this.isSegmentV4 = false;
    this.isContralateralVertebralArtery = false;

    // region CircleOfWillisCerebralArteries
    this.affectedSegmentsOrVesselsLocation = 'None';
    this.isLeptomeningealCollaterals = false;
    this.isContralateralInternalCarotidArtery = false;
    this.isPosteriorCommunicansArtery = false;
    this.isOphtalmicArtery = false;

    // region CerebralVeinsOrVenousSinuses
    this.isSuperiorSagittalSinus = false;
    this.isInferiorSagittalSinus = false;
    this.isGreatCerebralVein = false;
    this.isStraightSinus = false;
    this.isConfluenceOfSinuses = false;
    this.isTransverseSinus = false;
    this.isRightTransverseSinus = false;
    this.isLeftTransverseSinus = false;
    this.isSigmoidSinus = false;

    this.isRightSigmoidSinus = false;
    this.isLeftSigmoidSinus = false;
    this.isSuperiorPetrosalSinus = false;
    this.isRightSuperiorPetrosalSinus = false;
    this.isLeftSuperiorPetrosalSinus = false;
    this.isInferiorPetrosalSinus = false;
    this.isRightInferiorPetrosalSinus = false;
    this.isLeftInferiorPetrosalSinus = false;
    this.isInternalJugularVein = false;
    this.isRightInternalJugularVein = false;
    this.isLeftInternalJugularVein = false;
    this.isCavernousSinus = false;

    this.isRightCavernousSinus = false;
    this.isLeftCavernousSinus = false;
    this.isCerebralEdema = false;
  }
}
