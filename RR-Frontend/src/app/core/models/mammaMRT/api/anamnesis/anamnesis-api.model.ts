import { FamilyPersonApi } from '@models/mammaMRT/api/anamnesis/family-person-api.model';
import { PreviousTherapiesApi } from '@models/mammaMRT/api/anamnesis/previous-therapies-api.model';
import { ReportModelBase } from '@models/report-model-base';

import { OwnFamilyAnamnesisPresentType } from '@enums/shared/mamma/anamnesis-medical-history';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { MenstruationTypeEnum } from '@enums/mammaMRT';

export class AnamnesisApi extends ReportModelBase {
  ownFamilyAnamnesisPresent: OwnFamilyAnamnesisPresentType;
  ownFamilyAnamnesisFindings: FamilyPersonApi[];
  menstruationType: MenstruationTypeEnum;
  calendar: string;
  pregnanciesQuantity: number;
  arePreviousTherapies: SimpleAnswerEnum;
  previousTherapiesFindings: PreviousTherapiesApi[];

  constructor() {
    super();
    this.ownFamilyAnamnesisPresent = OwnFamilyAnamnesisPresentType.None;
    this.ownFamilyAnamnesisFindings = [];
    this.menstruationType = MenstruationTypeEnum.None;
    this.calendar = null;
    this.pregnanciesQuantity = null;
    this.arePreviousTherapies = SimpleAnswerEnum.None;
    this.previousTherapiesFindings = [];
  }
}
