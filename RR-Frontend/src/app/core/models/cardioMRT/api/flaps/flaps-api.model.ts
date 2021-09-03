import { ReportModelBase } from '@models/report-model-base';
import { MeasurementApiModel } from '@models/cardioMRT/api/flaps/measurement-api.model';
import { HeartValvesFindingApiModel } from '@models/cardioMRT/api/flaps/heart-valves-finding-api.model';
import { CongenitalHeartDiseasesFindingApiModel } from '@models/cardioMRT/api/flaps/congenital-heart-diseases-finding-api.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { LVOTObstructionType } from '@enums/cardioMRT/flaps';

export class FlapsApiModel extends ReportModelBase {
  areFindings: AreFindingsEnum;

  isAortaAscendens: boolean;
  aortaAscendensMeasures: MeasurementApiModel;
  isPulmonaryArtery: boolean;
  pulmonaryArteryMeasures: MeasurementApiModel;
  isMitralValve: boolean;
  mitralValveMeasures: MeasurementApiModel;
  isRVOTObstruction: boolean;
  isLVOTObstruction: boolean;
  lvotObstructionType: LVOTObstructionType;
  heartValves: HeartValvesFindingApiModel[];
  congenitalHeartDiseases: CongenitalHeartDiseasesFindingApiModel[];

  constructor() {
    super();
    this.areFindings = AreFindingsEnum.None;

    this.isAortaAscendens = false;
    this.aortaAscendensMeasures = new MeasurementApiModel();
    this.isPulmonaryArtery = false;
    this.pulmonaryArteryMeasures = new MeasurementApiModel();
    this.isMitralValve = false;
    this.mitralValveMeasures = new MeasurementApiModel();
    this.isRVOTObstruction = false;
    this.isLVOTObstruction = false;
    this.lvotObstructionType = LVOTObstructionType.None;
    this.heartValves = [new HeartValvesFindingApiModel()];
    this.congenitalHeartDiseases = [new CongenitalHeartDiseasesFindingApiModel()];
  }
}
