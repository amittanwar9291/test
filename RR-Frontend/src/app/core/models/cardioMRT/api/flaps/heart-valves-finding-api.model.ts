import { FindingBase } from '@models/shared/finding/finding.base';
import { HeartValveFindingType, VariantType, RegurgitationVolumeType } from '@enums/cardioMRT/flaps';

export class HeartValvesFindingApiModel extends FindingBase {
  findingType: HeartValveFindingType;

  // Common
  isStenosis: boolean;
  isInsufficiency: boolean;
  isCalcification: boolean;

  // ValvaAortae
  stenosisType: string;
  insufficiencyType: string;
  isVariant: boolean;
  variantType: VariantType;
  classificationType: string;
  classificationPhenotype: string;

  // ValvaMitralis
  isQuantification: boolean;
  quantificationInMm: number;
  isSAMPhenomenon: boolean;
  regurgitationVolumeTypeInMl: RegurgitationVolumeType;
  regurgitationVolumeTypeInPercent: RegurgitationVolumeType;
  constructor() {
    super();

    this.findingType = HeartValveFindingType.None;

    // Common
    this.isStenosis = false;
    this.isInsufficiency = false;
    this.isCalcification = false;

    // ValvaAortae
    this.stenosisType = 'None';
    this.insufficiencyType = 'None';
    this.isVariant = false;
    this.variantType = VariantType.None;
    this.classificationType = 'None';
    this.classificationPhenotype = 'None';

    // ValvaMitralis
    this.isQuantification = false;
    this.quantificationInMm = null;
    this.isSAMPhenomenon = false;
    this.regurgitationVolumeTypeInMl = RegurgitationVolumeType.None;
    this.regurgitationVolumeTypeInPercent = RegurgitationVolumeType.None;
  }
}
