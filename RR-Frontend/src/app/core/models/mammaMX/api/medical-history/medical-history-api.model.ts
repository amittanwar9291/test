import { FamilyPersonApi } from '@models/mammaMX/api/medical-history/family-person-api.model';
import { PreviousTherapiesApi } from '@models/mammaMX/api/medical-history/previous-therapies-api.model';
import { ReportModelBase } from '@models/report-model-base';

import { OwnFamilyAnamnesisPresentType, MenstruationType } from '@enums/shared/mamma/anamnesis-medical-history';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';

export class MedicalHistoryApiModel extends ReportModelBase {
  ownFamilyAnamnesisPresent: OwnFamilyAnamnesisPresentType;
  ownFamilyAnamnesisFindings: FamilyPersonApi[];
  menstruationType: MenstruationType;
  calendar: string;
  pregnanciesQuantity: number;
  arePreviousTherapies: SimpleAnswerEnum;
  previousTherapiesFindings: PreviousTherapiesApi[];

  constructor() {
    super();

    this.ownFamilyAnamnesisPresent = OwnFamilyAnamnesisPresentType.None;
    this.ownFamilyAnamnesisFindings = [];
    this.menstruationType = MenstruationType.None;
    this.calendar = null;
    this.pregnanciesQuantity = null;
    this.arePreviousTherapies = SimpleAnswerEnum.None;
    this.previousTherapiesFindings = [];
  }
}
