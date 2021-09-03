import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';
import { MeasurementUiModel } from '@models/cardioMRT/ui/flaps/measurement-ui.model';
import { ReportModelBase } from '@models/report-model-base';
import { LVOTObstructionType } from '@enums/cardioMRT/flaps';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';

export class FlapsUiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;

  isAortaAscendens: boolean;
  aortaAscendensMeasures: MeasurementUiModel;
  isPulmonaryArtery: boolean;
  pulmonaryArteryMeasures: MeasurementUiModel;
  isMitralValve: boolean;
  mitralValveMeasures: MeasurementUiModel;
  isRVOTObstruction: boolean;
  isLVOTObstruction: boolean;
  lvotObstructionType: LVOTObstructionType;
  heartValves: HeartValvesFindingUiModel[];
  congenitalHeartDiseases: CongenitalHeartDiseasesFindingUiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;

    this.isAortaAscendens = false;
    this.aortaAscendensMeasures = new MeasurementUiModel();
    this.isPulmonaryArtery = false;
    this.pulmonaryArteryMeasures = new MeasurementUiModel();
    this.isMitralValve = false;
    this.mitralValveMeasures = new MeasurementUiModel();
    this.isRVOTObstruction = false;
    this.isLVOTObstruction = false;
    this.lvotObstructionType = LVOTObstructionType.None;
    this.heartValves = [new HeartValvesFindingUiModel()];
    this.congenitalHeartDiseases = [new CongenitalHeartDiseasesFindingUiModel()];
  }
}
