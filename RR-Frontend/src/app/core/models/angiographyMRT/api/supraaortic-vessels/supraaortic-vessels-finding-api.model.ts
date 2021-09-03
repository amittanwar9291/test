import { FindingBase } from '@models/shared/finding/finding.base';
import { SupraaorticVesselsFindingTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/supraaortic-vessels-finding-type.enum';
import { PathologyTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/pathology-type.enum';
import { SeverityTypeEnum } from '@enums/shared/angiography/severity-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/differential-diagnosis-type.enum';
import { ShapeTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/shape-type.enum';
import { AffectedBranchTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/affected-branch-type.enum';
import { FormTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/form-type.enum';
import { SubarachnoidHemorrhageTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/subarachnoid-hemorrhage-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

export class SupraaorticVesselsFindingApi extends FindingBase {
  findingType: SupraaorticVesselsFindingTypeEnum;
  // region Common
  sideType: LocationTypeEnum;
  pathologyType: PathologyTypeEnum;
  severityType: SeverityTypeEnum;
  isHemodynamicallyRelevant;
  diameterStenosis: number;
  diameterDiseaseFreePoststenoticSegment: number;
  degreeOfStenosisCalculatedInNASCET: number;
  formType: FormTypeEnum;
  length: number;
  isShortStenosis;
  isWallHematoma;
  isContrastEnhancementOfTheArterialWall;
  isT2wHyperintensityOfArterialWallOrEdema;
  isCaliberIrregularities;
  differentialDiagnosisType: DifferentialDiagnosisTypeEnum;
  isPanarteritisNodosa;
  shapeType: ShapeTypeEnum;
  maxDiameter: number;
  isBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery;
  isCirculusArteriosusWillisii;
  isSubarachnoidHemorrhage;
  subarachnoidHemorrhageType: SubarachnoidHemorrhageTypeEnum;

  // region AnatomicVariants

  isRightP1HypoplasiaOrFTPConfiguration;
  isRightP1Aplasia;
  isRightP1FenestrationOrDuplication;
  isRightA1Hypoplasia;
  isRightA1Aplasia;
  isRightA1FenestrationOrDuplication;
  isRightPcomAHypoplasia;
  isRightPcomAAplasia;
  isRightPICATerminationVA;
  isRightVAHypoplasia;
  isRightVAAplasia;
  isRightTriplicatedACA;
  isRightAcomAAplasia;
  isRightAcomAFenestrationOrDuplication;
  isLeftP1HypoplasiaOrFTPConfiguration;
  isLeftP1Aplasia;
  isLeftP1FenestrationOrDuplication;
  isLeftA1Hypoplasia;
  isLeftA1Aplasia;
  isLeftA1FenestrationOrDuplication;
  isLeftPcomAHypoplasia;
  isLeftPcomAAplasia;
  isLeftPICATerminationVA;
  isLeftVAHypoplasia;
  isLeftVAAplasia;
  isLeftTriplicatedACA;
  isLeftAcomAAplasia;
  isLeftAcomAFenestrationOrDuplication;

  // region InternalCarotidArtery
  internalCarotidArterySegmentsLocation: string;

  // region ExternalCarotidArtery
  affectedBranchType: AffectedBranchTypeEnum;

  // region VertebralArtery
  isSegmentV1;
  isSegmentV2;
  isSegmentV3;
  isSegmentV4;
  isContralateralVertebralArtery;

  // region CircleOfWillisCerebralArteries
  affectedSegmentsOrVesselsLocation: string;
  isLeptomeningealCollaterals;
  isContralateralInternalCarotidArtery;
  isPosteriorCommunicansArtery;
  isOphtalmicArtery;

  // region CerebralVeinsOrVenousSinuses
  isSuperiorSagittalSinus;
  isInferiorSagittalSinus;
  isGreatCerebralVein;
  isStraightSinus;
  isConfluenceOfSinuses;
  isRightTransverseSinus;
  isLeftTransverseSinus;
  isRightSigmoidSinus;
  isLeftSigmoidSinus;
  isRightPetrosalSinus;
  isLeftPetrosalSinus;
  isRightCavernousSinus;
  isLeftCavernousSinus;
  isCerebralEdema;

  constructor() {
    super();

    this.findingType = SupraaorticVesselsFindingTypeEnum.None;
    // region Common
    this.sideType = LocationTypeEnum.None;
    this.pathologyType = PathologyTypeEnum.None;
    this.severityType = SeverityTypeEnum.None;
    this.isHemodynamicallyRelevant = false;
    this.diameterStenosis = null;
    this.diameterDiseaseFreePoststenoticSegment = null;
    this.degreeOfStenosisCalculatedInNASCET = null;
    this.formType = FormTypeEnum.None;
    this.length = null;
    this.isShortStenosis = false;
    this.isWallHematoma = false;
    this.isContrastEnhancementOfTheArterialWall = false;
    this.isT2wHyperintensityOfArterialWallOrEdema = false;
    this.isCaliberIrregularities = false;
    this.differentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
    this.isPanarteritisNodosa = false;
    this.shapeType = ShapeTypeEnum.None;
    this.maxDiameter = null;
    this.isBranchesOfTheExternalCarotidArteryToTheOphthalmicArtery = false;
    this.isCirculusArteriosusWillisii = false;
    this.isSubarachnoidHemorrhage = false;
    this.subarachnoidHemorrhageType = SubarachnoidHemorrhageTypeEnum.None;

    // region AnatomicVariants
    this.isRightP1HypoplasiaOrFTPConfiguration = false;
    this.isRightP1Aplasia = false;
    this.isRightP1FenestrationOrDuplication = false;
    this.isRightA1Hypoplasia = false;
    this.isRightA1Aplasia = false;
    this.isRightA1FenestrationOrDuplication = false;
    this.isRightPcomAHypoplasia = false;
    this.isRightPcomAAplasia = false;
    this.isRightPICATerminationVA = false;
    this.isRightVAHypoplasia = false;
    this.isRightVAAplasia = false;
    this.isRightTriplicatedACA = false;
    this.isRightAcomAAplasia = false;
    this.isRightAcomAFenestrationOrDuplication = false;
    this.isLeftP1HypoplasiaOrFTPConfiguration = false;
    this.isLeftP1Aplasia = false;
    this.isLeftP1FenestrationOrDuplication = false;
    this.isLeftA1Hypoplasia = false;
    this.isLeftA1Aplasia = false;
    this.isLeftA1FenestrationOrDuplication = false;
    this.isLeftPcomAHypoplasia = false;
    this.isLeftPcomAAplasia = false;
    this.isLeftPICATerminationVA = false;
    this.isLeftVAHypoplasia = false;
    this.isLeftVAAplasia = false;
    this.isLeftTriplicatedACA = false;
    this.isLeftAcomAAplasia = false;
    this.isLeftAcomAFenestrationOrDuplication = false;

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
    this.isRightTransverseSinus = false;
    this.isLeftTransverseSinus = false;
    this.isRightSigmoidSinus = false;
    this.isLeftSigmoidSinus = false;
    this.isRightPetrosalSinus = false;
    this.isLeftPetrosalSinus = false;
    this.isRightCavernousSinus = false;
    this.isLeftCavernousSinus = false;
    this.isCerebralEdema = false;
  }
}
