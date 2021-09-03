import { LungsFlapsModel } from './lungs-flaps-model';
import { ModelBase } from '@models/model-base';

export class LungsFlapsMulticolorLocalizerUi extends ModelBase {
  lessThan50Location: LungsFlapsModel;
  moreThan50Location: LungsFlapsModel;

  constructor() {
    super();
    this.lessThan50Location = new LungsFlapsModel();
    this.moreThan50Location = new LungsFlapsModel();
  }
}
