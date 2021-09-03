import { ReportModelBase } from '@models/report-model-base';
import {
  VolumeType,
  ParenchymaDensityBreastCompositionType,
  PectoralisMuscleType,
  SubcutaneousFattyTissueType
} from '@enums/mammaMX/mammography-parenchyma-anatomy';

export class MammographyParenchymaAnatomyApiModel extends ReportModelBase {
  volumeType: VolumeType;
  volumeLocalization: string;
  subcutaneousFattyTissueType: SubcutaneousFattyTissueType;
  subcutaneousAdiposeTissueLocalization: string;
  rightParenchymaDensityBreastCompositionType: ParenchymaDensityBreastCompositionType;
  leftParenchymaDensityBreastCompositionType: ParenchymaDensityBreastCompositionType;
  pectoralisMuscleType: PectoralisMuscleType;
  pectoralisMuscleLocalization: string;

  constructor() {
    super();
    this.volumeType = VolumeType.None;
    this.volumeLocalization = 'None';
    this.subcutaneousFattyTissueType = SubcutaneousFattyTissueType.None;
    this.subcutaneousAdiposeTissueLocalization = 'None';
    this.rightParenchymaDensityBreastCompositionType = ParenchymaDensityBreastCompositionType.None;
    this.leftParenchymaDensityBreastCompositionType = ParenchymaDensityBreastCompositionType.None;
    this.pectoralisMuscleType = PectoralisMuscleType.None;
    this.pectoralisMuscleLocalization = 'None';
  }
}
