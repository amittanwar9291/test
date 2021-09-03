import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class FootThreeSidesViewModel extends EnumBase {
  oSSupranaviculare: boolean; // 0
  oSPeroneum: boolean; // 1
  oSSustentaculi: boolean; // 2
  oSTrigonum: boolean; // 3
  oSVesalinum: boolean; // 4
  oSTibialeExternum: boolean; // 5
  parsLateralisOssisWetatarsalisOne: boolean; // 6
  oSIntercuneiforme: boolean; // 7
  oSIntermetatarsale: boolean; // 8
  secundariusCalcaneus: boolean; // 9
  talusAccessorius: boolean; // 10
  oSCuboideumSecundarium: boolean; // 11

  constructor() {
    super();
    this.oSSupranaviculare = false;
    this.oSPeroneum = false;
    this.oSSustentaculi = false;
    this.oSTrigonum = false;
    this.oSVesalinum = false;
    this.oSTibialeExternum = false;
    this.parsLateralisOssisWetatarsalisOne = false;
    this.oSIntercuneiforme = false;
    this.oSIntermetatarsale = false;
    this.secundariusCalcaneus = false;
    this.talusAccessorius = false;
    this.oSCuboideumSecundarium = false;
  }
}
