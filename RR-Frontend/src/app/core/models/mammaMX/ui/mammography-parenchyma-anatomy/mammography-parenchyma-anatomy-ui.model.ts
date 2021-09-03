import { ReportModelBase } from '@models/report-model-base';
import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { BreastCross } from '@models/shared/mamma/breast/breast-cross.model';
import {
  VolumeType,
  ParenchymaDensityBreastCompositionType,
  PectoralisMuscleType,
  SubcutaneousFattyTissueType
} from '@enums/mammaMX/mammography-parenchyma-anatomy';

export class MammographyParenchymaAnatomyUiModel extends ReportModelBase {
  volumeType: VolumeType;
  volumeLocalization: BreastSimple;
  subcutaneousFattyTissueType: SubcutaneousFattyTissueType;
  subcutaneousAdiposeTissueLocalization: BreastCross;
  rightParenchymaDensityBreastCompositionType: ParenchymaDensityBreastCompositionType;
  leftParenchymaDensityBreastCompositionType: ParenchymaDensityBreastCompositionType;
  pectoralisMuscleType: PectoralisMuscleType;
  pectoralisMuscleLocalization: BreastSimple;

  constructor() {
    super();
    this.volumeType = VolumeType.None;
    this.volumeLocalization = new BreastSimple();
    this.subcutaneousFattyTissueType = SubcutaneousFattyTissueType.None;
    this.subcutaneousAdiposeTissueLocalization = new BreastCross();
    this.rightParenchymaDensityBreastCompositionType = ParenchymaDensityBreastCompositionType.None;
    this.leftParenchymaDensityBreastCompositionType = ParenchymaDensityBreastCompositionType.None;
    this.pectoralisMuscleType = PectoralisMuscleType.None;
    this.pectoralisMuscleLocalization = new BreastSimple();
  }
}
