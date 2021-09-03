import { FindingBase } from '@models/shared/finding/finding.base';
import { PreviousOperationTypeEnum } from '@enums/pelvisMRT/anamnesis/previous-operation-type.enum';
import { ClinicTypeEnum } from '@enums/pelvisMRT/anamnesis/clinic-type.enum';

export class AnamnesisClinicFindingUiModel extends FindingBase {
  findingType: ClinicTypeEnum;
  isDigitalRectalExam: boolean;
  isPressurePainLowerAbdomen: boolean;
  isPressurePainRight: boolean;
  isPressurePainLeft: boolean;
  isBonePain: boolean;
  isStressIncontinence: boolean;
  isUrgeIncontinence: boolean;
  isParadoxical: boolean;
  isAnemiaDueToBleeding: boolean;

  constructor() {
    super();

    this.findingType = ClinicTypeEnum.None;
    this.isDigitalRectalExam = false;
    this.isPressurePainLowerAbdomen = false;
    this.isPressurePainRight = false;
    this.isPressurePainLeft = false;
    this.isBonePain = false;
    this.isStressIncontinence = false;
    this.isUrgeIncontinence = false;
    this.isParadoxical = false;
    this.isAnemiaDueToBleeding = false;
  }
}
