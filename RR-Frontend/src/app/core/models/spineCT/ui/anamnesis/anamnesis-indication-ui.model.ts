import { AnamnesisIndicationTypeEnum } from '@enums/spineCT/anamnesis/anamnesis-indication-type.enum';
import { IntracranialHypotensionSyndromeTypeEnum } from '@enums/spineCT/anamnesis/intracranial-hypotension-syndrome-type.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

export class AnamnesisIndicationUiModel extends FindingBase {
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

  spineLocationBones: SpineDirectionalLocation;
  isPain: boolean;
  isMotorDeficit: boolean;
  isSensoryDeficit: boolean;
  isConusCaudaSyndrome: boolean;

  // VertebralBodyFracture

  isSuspicionOf: boolean;
  spineLocation: SpineLocation;
  isTrauma: boolean;
  isMinorInjury: boolean;
  dateOfVertebralBodyFracture: MonthYearModel;

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

    this.spineLocationBones = new SpineDirectionalLocation();
    this.isPain = false;
    this.isMotorDeficit = false;
    this.isSensoryDeficit = false;
    this.isConusCaudaSyndrome = false;

    // VertebralBodyFracture

    this.isSuspicionOf = false;
    this.spineLocation = new SpineLocation();
    this.isTrauma = false;
    this.isMinorInjury = false;
    this.dateOfVertebralBodyFracture = new MonthYearModel();

    // IntracranialHypotensionSyndrome

    this.intracranialHypotensionSyndromeType = IntracranialHypotensionSyndromeTypeEnum.None;
    this.isCSFLeakage = false;
  }
}
