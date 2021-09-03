import { IntracranialHypotensionSyndromeTypeEnum } from '@enums/spineCT/anamnesis/intracranial-hypotension-syndrome-type.enum';
import { AnamnesisIndicationTypeEnum } from '@enums/spineCT/anamnesis/anamnesis-indication-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class AnamnesisIndicationApiModel extends FindingBase {
  anamnesisIndicationType: AnamnesisIndicationTypeEnum;

  // Lumbago

  isRadiculopathy: boolean;
  isRadiculopathyRight: boolean;
  isRadiculopathyLeft: boolean;
  isPseudoradicularSymptoms: boolean;
  isPseudoradicularSymptomsRight: boolean;
  isPseudoradicularSymptomsLeft: boolean;
  isDiffuseLumbago: boolean;
  isDiffuseLumbagoRight: boolean;
  isDiffuseLumbagoLeft: boolean;

  // Neurology

  spineLocationBones: string;
  isPain: boolean;
  isMotorDeficit: boolean;
  isSensoryDeficit: boolean;
  isConusCaudaSyndrome: boolean;

  // VertebralBodyFracture

  isSuspicionOf: boolean;
  spineLocation: string;
  isTrauma: boolean;
  isMinorInjury: boolean;
  monthOfVertebralBodyFracture: number;
  yearOfVertebralBodyFracture: number;

  // IntracranialHypotensionSyndrome

  intracranialHypotensionSyndromeType: IntracranialHypotensionSyndromeTypeEnum;
  isCSFLeakage: boolean;
  constructor() {
    super();
    this.anamnesisIndicationType = AnamnesisIndicationTypeEnum.None;

    // Lumbago

    this.isRadiculopathy = false;
    this.isRadiculopathyRight = false;
    this.isRadiculopathyLeft = false;
    this.isPseudoradicularSymptoms = false;
    this.isPseudoradicularSymptomsRight = false;
    this.isPseudoradicularSymptomsLeft = false;
    this.isDiffuseLumbago = false;
    this.isDiffuseLumbagoRight = false;
    this.isDiffuseLumbagoLeft = false;

    // Neurology

    this.spineLocationBones = null;
    this.isPain = false;
    this.isMotorDeficit = false;
    this.isSensoryDeficit = false;
    this.isConusCaudaSyndrome = false;

    // VertebralBodyFracture

    this.isSuspicionOf = false;
    this.spineLocation = null;
    this.isTrauma = false;
    this.isMinorInjury = false;
    this.monthOfVertebralBodyFracture = 0;
    this.yearOfVertebralBodyFracture = 0;

    // IntracranialHypotensionSyndrome

    this.intracranialHypotensionSyndromeType = IntracranialHypotensionSyndromeTypeEnum.None;
    this.isCSFLeakage = false;
  }
}
