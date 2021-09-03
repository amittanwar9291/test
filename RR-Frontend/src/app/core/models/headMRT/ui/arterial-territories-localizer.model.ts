import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class ArterialTerritoriesLocalizerModel extends EnumBase {
  // Right
  anteriorCerebralArteryACARight: boolean; // 1
  medialLenticulostriateRight: boolean; // 2
  lateralLenticulostriateRight: boolean; // 3
  middleCerebralArteryRight: boolean; // 4
  posteriorCerebralArteryPCARight: boolean; // 5
  anteriorChoroidalArteryAChARight: boolean; // 6
  superiorCerebellarArterySCARight: boolean; // 7
  anteriorInferiorCerebellarArteryAICARight: boolean; // 8
  posteriorInferiorCerebellarArteryPICARight: boolean; // 9
  vertebralArteryVARight: boolean; // 11
  corticalBorderZoneACAMCARight: boolean; // 12
  anteriorCorticalBorderZoneRight: boolean; // 13
  posteriorCorticalBorderZoneRight: boolean; // 14
  internalBorderZoneRight: boolean; // 15

  basilarArteryBA: boolean; // 10

  // Left
  anteriorCerebralArteryACALeft: boolean; // 1
  medialLenticulostriateLeft: boolean; // 2
  lateralLenticulostriateLeft: boolean; // 3
  middleCerebralArteryLeft: boolean; // 4
  posteriorCerebralArteryPCALeft: boolean; // 5
  anteriorChoroidalArteryAChALeft: boolean; // 6
  superiorCerebellarArterySCALeft: boolean; // 7
  anteriorInferiorCerebellarArteryAICALeft: boolean; // 8
  posteriorInferiorCerebellarArteryPICALeft: boolean; // 9
  vertebralArteryVALeft: boolean; // 11
  corticalBorderZoneACAMCALeft: boolean; // 12
  anteriorCorticalBorderZoneLeft: boolean; // 13
  posteriorCorticalBorderZoneLeft: boolean; // 14
  internalBorderZoneLeft: boolean; // 15

  constructor() {
    super();

    // Right
    this.anteriorCerebralArteryACARight = false;
    this.medialLenticulostriateRight = false;
    this.lateralLenticulostriateRight = false;
    this.middleCerebralArteryRight = false;
    this.posteriorCerebralArteryPCARight = false;
    this.anteriorChoroidalArteryAChARight = false;
    this.superiorCerebellarArterySCARight = false;
    this.anteriorInferiorCerebellarArteryAICARight = false;
    this.posteriorInferiorCerebellarArteryPICARight = false;
    this.vertebralArteryVARight = false;
    this.corticalBorderZoneACAMCARight = false;
    this.anteriorCorticalBorderZoneRight = false;
    this.posteriorCorticalBorderZoneRight = false;
    this.internalBorderZoneRight = false;

    this.basilarArteryBA = false;

    // Left
    this.anteriorCerebralArteryACALeft = false;
    this.medialLenticulostriateLeft = false;
    this.lateralLenticulostriateLeft = false;
    this.middleCerebralArteryLeft = false;
    this.posteriorCerebralArteryPCALeft = false;
    this.anteriorChoroidalArteryAChALeft = false;
    this.superiorCerebellarArterySCALeft = false;
    this.anteriorInferiorCerebellarArteryAICALeft = false;
    this.posteriorInferiorCerebellarArteryPICALeft = false;
    this.vertebralArteryVALeft = false;
    this.corticalBorderZoneACAMCALeft = false;
    this.anteriorCorticalBorderZoneLeft = false;
    this.posteriorCorticalBorderZoneLeft = false;
    this.internalBorderZoneLeft = false;
  }
}
