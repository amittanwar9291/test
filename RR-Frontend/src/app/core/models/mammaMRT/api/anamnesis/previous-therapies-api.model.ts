import { FindingBase } from '@models/shared/finding/finding.base';

import { TheraphyType, TimeStatusType, SideType } from '@enums/shared/mamma/anamnesis-medical-history';

export class PreviousTherapiesApi extends FindingBase {
  findingType: TheraphyType;
  theraphyYear: number;
  theraphyMonth: number;
  timeStatusType: TimeStatusType;
  breastLocation: string;
  rightReconstructionLocalization: SideType;
  leftReconstructionLocalization: SideType;

  constructor() {
    super();

    this.findingType = TheraphyType.None;
    this.theraphyYear = null;
    this.theraphyMonth = null;
    this.timeStatusType = TimeStatusType.None;
    this.breastLocation = 'None';
    this.rightReconstructionLocalization = SideType.None;
    this.leftReconstructionLocalization = SideType.None;
  }
}
