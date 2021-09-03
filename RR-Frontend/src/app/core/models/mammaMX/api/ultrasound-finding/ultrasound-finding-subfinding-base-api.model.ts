import { FindingBase } from '@models/shared/finding/finding.base';
import {
  EchoContentTypeEnum,
  EnvironmentalReactionTypeEnum,
  ExitEchoDorsalSoundPatternsTypeEnum,
  FormTypeEnum,
  MarginEchoDelimitationTypeEnum,
  MassDiagnosisTypeEnum,
  UltrasoundFindingTypeEnum,
  VascularDrawingLesionTypeEnum
} from '@enums/mammaMX/ultrasound-finding';

export class UltrasoundFindingSubfindingBaseApiModel extends FindingBase {
  findingType: UltrasoundFindingTypeEnum;
  differentialDiagnosis: MassDiagnosisTypeEnum;
  isPartiallyWithinTheSkin: boolean;
  formType: FormTypeEnum;
  marginEchodelimitationType: MarginEchoDelimitationTypeEnum;
  echoContentType: EchoContentTypeEnum;
  exitEchodorsalSoundPatternsType: ExitEchoDorsalSoundPatternsTypeEnum;
  environmentalReactionType: EnvironmentalReactionTypeEnum;
  vascularDrawingLesionType: VascularDrawingLesionTypeEnum;

  constructor() {
    super();
    this.findingType = UltrasoundFindingTypeEnum.None;
    this.differentialDiagnosis = MassDiagnosisTypeEnum.None;
    this.isPartiallyWithinTheSkin = false;
    this.formType = FormTypeEnum.None;
    this.marginEchodelimitationType = MarginEchoDelimitationTypeEnum.None;
    this.echoContentType = EchoContentTypeEnum.None;
    this.exitEchodorsalSoundPatternsType = ExitEchoDorsalSoundPatternsTypeEnum.None;
    this.environmentalReactionType = EnvironmentalReactionTypeEnum.None;
    this.vascularDrawingLesionType = VascularDrawingLesionTypeEnum.None;
  }
}
