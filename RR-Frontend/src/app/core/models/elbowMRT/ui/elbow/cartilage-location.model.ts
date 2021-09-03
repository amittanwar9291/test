import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class CartilageLocationModel extends EnumBase {
  anteriorHumeralCapitulum: boolean;
  posteriorHumeralCapitulum: boolean;
  anteriorHumeralTrochlea: boolean;
  posteriorHumeralTrochlea: boolean;
  ulnaTrochlearNotch: boolean;
  ulnaRadialNotch: boolean;
  radiusFoveaCapitis: boolean;
  radiusCircumferentiaRadii: boolean;

  constructor() {
    super();

    this.anteriorHumeralCapitulum = false;
    this.posteriorHumeralCapitulum = false;
    this.anteriorHumeralTrochlea = false;
    this.posteriorHumeralTrochlea = false;
    this.ulnaTrochlearNotch = false;
    this.ulnaRadialNotch = false;
    this.radiusFoveaCapitis = false;
    this.radiusCircumferentiaRadii = false;
  }
}
