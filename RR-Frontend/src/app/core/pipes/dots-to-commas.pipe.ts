import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotsToCommas'
})
export class DotsToCommasPipe implements PipeTransform {
  // custom pipe that replaces dots with commas in decimal values (1.23 => 1,23)
  // and adds dot every 3 digits in values equal or greater than 1000 (1200250 => 1.200.250)

  transform(value) {
    return this.dotsToCommas(value.toString());
  }

  checkIfOneDecimalAfterComma(valueToTransform) {
    const numberAfterComma = valueToTransform.split(',')[1];
    return numberAfterComma && numberAfterComma.length === 1;
  }

  checkIfNoDecimalsAfterComma(valueToTransform) {
    const numberAfterComma = valueToTransform.split(',')[1];
    return !numberAfterComma;
  }

  dotsToCommas(valueToTransform) {
    if (valueToTransform === '') {
      return '';
    }

    let transformedValue = valueToTransform.split('.');
    let numberBeforeDot = transformedValue[0];
    const valueAfterComma = transformedValue.length > 1 ? ',' + transformedValue[1] : '';
    const regexPattern = /(\d+)(\d{3})/;

    while (regexPattern.test(numberBeforeDot)) {
      numberBeforeDot = numberBeforeDot.replace(regexPattern, '$1' + '.' + '$2');
    }

    if (numberBeforeDot.indexOf(',') !== -1) {
      const valueBeforeComma = numberBeforeDot.split(',')[0];
      const commaPlusValueAfterComma = numberBeforeDot.slice(numberBeforeDot.lastIndexOf(',')).replace(/\./g, '');

      transformedValue = valueBeforeComma + commaPlusValueAfterComma;
    } else {
      transformedValue = numberBeforeDot + valueAfterComma;

      if (this.checkIfOneDecimalAfterComma(transformedValue) || this.checkIfNoDecimalsAfterComma(transformedValue)) {
        return transformedValue;
      }
    }

    return transformedValue;
  }
}
