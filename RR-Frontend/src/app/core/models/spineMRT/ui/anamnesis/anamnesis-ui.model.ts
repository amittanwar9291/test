import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisInterventionUiModel } from './anamnesis-intervention-ui.model';
import { ComplaintsTypesEnum } from '@enums/spineMRT/anamnesis/complaints-types.enum';
import { SideTypesEnum } from '@enums/spineMRT/anamnesis/side-types.enum';

export class AnamnesisUiModel extends ReportModelBase {
  complaintsType: ComplaintsTypesEnum;
  lumbagoSideType: SideTypesEnum;
  neurologySideType: SideTypesEnum;
  interventions: AnamnesisInterventionUiModel[];

  constructor() {
    super();
    this.complaintsType = ComplaintsTypesEnum.None;
    this.lumbagoSideType = SideTypesEnum.None;
    this.neurologySideType = SideTypesEnum.None;
    this.interventions = [new AnamnesisInterventionUiModel()];
  }
}
