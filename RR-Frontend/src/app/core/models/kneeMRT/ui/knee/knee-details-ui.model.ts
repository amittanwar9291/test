import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class KneeDetails extends EnumBase {
  femur: boolean;
  patella: boolean;
  tibia: boolean;
  fibula: boolean;

  constructor() {
    super();

    this.femur = false;
    this.patella = false;
    this.tibia = false;
    this.fibula = false;
  }
}
