import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisInterventionApiModel } from './anamnesis-intervention-api.model';
import { ComplaintsTypesEnum } from '@enums/spineMRT/anamnesis/complaints-types.enum';
import { SideTypesEnum } from '@enums/spineMRT/anamnesis/side-types.enum';

export class AnamnesisApiModel extends ReportModelBase {
  complaintsType: ComplaintsTypesEnum;
  lumbagoSideType: SideTypesEnum;
  neurologySideType: SideTypesEnum;
  interventions: AnamnesisInterventionApiModel[];

  constructor() {
    super();
    this.complaintsType = ComplaintsTypesEnum.None;
    this.lumbagoSideType = SideTypesEnum.None;
    this.neurologySideType = SideTypesEnum.None;
    this.interventions = [];
  }
}
