import { ModelBase } from '@models/model-base';
import { Guid } from '@models/shared/guid/guid';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';

export class MeasurementUiModel extends ModelBase {
  maxFlowInMlSec: number;
  minFlowInMlSec: number;
  positiveFlowInMl: number;
  negativeFlowInMl: number;
  regurgitantFractionInPercent: number;
  flowCurveImage: FileUiModel;
  flowCurveImageId: string;
  pcMeasurementImage: FileUiModel;
  pcMeasurementImageId: string;

  constructor() {
    super();

    this.maxFlowInMlSec = null;
    this.minFlowInMlSec = null;
    this.positiveFlowInMl = null;
    this.negativeFlowInMl = null;
    this.regurgitantFractionInPercent = null;
    this.flowCurveImage = null;
    this.flowCurveImageId = '';
    this.pcMeasurementImage = null;
    this.pcMeasurementImageId = '';
  }
}
