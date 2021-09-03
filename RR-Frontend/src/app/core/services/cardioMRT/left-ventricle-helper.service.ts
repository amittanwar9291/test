import { isEmpty, some, flow, filter, isArray, isFinite, isNull } from 'lodash';

export class LeftVentricleHelperService {
  static calculateECV(formulaComponents): number {
    const { haematocritValue, t1ValueMyocardiumInMs, t1ValueBloodInMs, t1GdValueMyocardiumInMs, t1GdValueBloodInMs } = formulaComponents;
    const ecv =
      (1 - haematocritValue) *
      ((1 / t1GdValueMyocardiumInMs - 1 / t1ValueMyocardiumInMs) / (1 / t1GdValueBloodInMs - 1 / t1ValueBloodInMs));

    const result = isFinite(ecv) ? ecv : null;

    if (!isNull(result)) {
      const percentValue = result * 100;
      return Math.round(percentValue * 10) / 10; // final value round up to one decimal place and displayed as percent
    }
    return null;
  }

  static isLocalizerValid(localizerModel): boolean {
    const isValid = flow(
      props => filter(props, prop => isArray(prop)),
      props => some(props, prop => !isEmpty(prop))
    );
    return isValid(localizerModel);
  }
}
