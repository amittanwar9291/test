import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class FootBigTendonsModel extends EnumBase {
  achillesTendon: boolean;
  tendonOfMPeroneusLongus: boolean;
  tendonOfThePosteriorTibialisMuscle: boolean;
  tendonOfMFlexorDigitorumLongus: boolean;
  tendonOfMFlexorHallucisLongus: boolean;
  tendonOfTheAnteriorTibialisMuscle: boolean;
  tendonOfMPeroneusBrevis: boolean;
  tendonExtensorDigitorumLongusMuscle: boolean;
  tendonExtensorHallucisLongusMuscle: boolean;

  constructor() {
    super();
    this.achillesTendon = false;
    this.tendonOfMPeroneusLongus = false;
    this.tendonOfThePosteriorTibialisMuscle = false;
    this.tendonOfMFlexorDigitorumLongus = false;
    this.tendonOfMFlexorHallucisLongus = false;
    this.tendonOfTheAnteriorTibialisMuscle = false;
    this.tendonOfMPeroneusBrevis = false;
    this.tendonExtensorDigitorumLongusMuscle = false;
    this.tendonExtensorHallucisLongusMuscle = false;
  }
}
