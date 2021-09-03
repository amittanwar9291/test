import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class CarpalBonesFrequentlyTypeModel extends EnumBase {
  paratrapezium: boolean;
  trapeziumSecundarium: boolean;
  styloidum: boolean;
  capitatumSecundarium: boolean;
  radialExternum: boolean;
  centralOffice: boolean;
  triangularForms: boolean;
  hypotriquetrum: boolean;
  constructor() {
    super();
    this.paratrapezium = false;
    this.trapeziumSecundarium = false;
    this.styloidum = false;
    this.capitatumSecundarium = false;
    this.radialExternum = false;
    this.centralOffice = false;
    this.triangularForms = false;
    this.hypotriquetrum = false;
  }
}
