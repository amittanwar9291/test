import { FindingBase } from '@models/shared/finding/finding.base';

export class AnamnesisClinicFindingApiModel extends FindingBase {
  findingType: string;
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

    this.findingType = 'None';
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
