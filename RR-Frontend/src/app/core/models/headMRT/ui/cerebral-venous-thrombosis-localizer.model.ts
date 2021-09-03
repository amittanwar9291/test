import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class CerebralVenousThrombosisLocalizerModel extends EnumBase {
  superiorSagittalSinus: boolean;
  inferiorSagittalSinus: boolean;
  greatCerebralVein: boolean;
  straightSinus: boolean;
  confluensOfSinuses: boolean;

  transverseSinusRight: boolean;
  sigmoidSinusRight: boolean;
  superiorPetrosalSinusRight: boolean;
  inferiorPetrosalSinusRight: boolean;
  internalJugularVeinRight: boolean;
  cavernousSinusRight: boolean;
  basalVeinRight: boolean;

  transverseSinusLeft: boolean;
  sigmoidSinusLeft: boolean;
  superiorPetrosalSinusLeft: boolean;
  inferiorPetrosalSinusLeft: boolean;
  internalJugularVeinLeft: boolean;
  cavernousSinusLeft: boolean;
  basalVeinLeft: boolean;

  constructor() {
    super();

    this.superiorSagittalSinus = false;
    this.inferiorSagittalSinus = false;
    this.greatCerebralVein = false;
    this.straightSinus = false;
    this.confluensOfSinuses = false;

    this.transverseSinusRight = false;
    this.sigmoidSinusRight = false;
    this.superiorPetrosalSinusRight = false;
    this.inferiorPetrosalSinusRight = false;
    this.internalJugularVeinRight = false;
    this.cavernousSinusRight = false;
    this.basalVeinRight = false;

    this.transverseSinusLeft = false;
    this.sigmoidSinusLeft = false;
    this.superiorPetrosalSinusLeft = false;
    this.inferiorPetrosalSinusLeft = false;
    this.internalJugularVeinLeft = false;
    this.cavernousSinusLeft = false;
    this.basalVeinLeft = false;
  }
}
