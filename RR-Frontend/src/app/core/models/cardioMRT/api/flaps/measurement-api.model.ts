import { Guid } from '@models/shared/guid/guid';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

export class MeasurementApiModel {
  id: string;
  maxFlowInMlSec: number;
  minFlowInMlSec: number;
  positiveFlowInMl: number;
  negativeFlowInMl: number;
  regurgitantFractionInPercent: number;
  flowCurveImage: FileApiModel;
  flowCurveImageId: string;
  pcMeasurementImage: FileApiModel;
  pcMeasurementImageId: string;

  constructor() {
    this.id = Guid.createEmpty();
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
