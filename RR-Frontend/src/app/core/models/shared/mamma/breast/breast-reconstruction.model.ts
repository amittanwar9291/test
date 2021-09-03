import { SideType } from '@enums/shared/mamma/anamnesis-medical-history';

export class BreastReconstruction {
  rightReconstructionLocalization: SideType;
  leftReconstructionLocalization: SideType;

  constructor() {
    this.rightReconstructionLocalization = SideType.None;
    this.leftReconstructionLocalization = SideType.None;
  }
}
