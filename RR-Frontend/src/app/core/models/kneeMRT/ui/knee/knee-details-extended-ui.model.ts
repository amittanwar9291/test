import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class KneeDetailsExtended extends EnumBase {
  femurMetaphyseal: boolean;
  femurLatCondyle: boolean;
  femurMedCondyle: boolean;
  patella: boolean;
  tibiaLatPlateau: boolean;
  tibiaMedPlateau: boolean;
  tibiaMetaphyseal: boolean;
  fibulaHead: boolean;
  fibulaMetaphyseal: boolean;

  constructor() {
    super();

    this.femurMetaphyseal = false;
    this.femurLatCondyle = false;
    this.femurMedCondyle = false;
    this.patella = false;
    this.tibiaLatPlateau = false;
    this.tibiaMedPlateau = false;
    this.tibiaMetaphyseal = false;
    this.fibulaHead = false;
    this.fibulaMetaphyseal = false;
  }
}
