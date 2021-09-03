import { FamilyPersonUi } from '@models/mammaMRT/ui/anamnesis/family-person-ui.model';
import { PreviousTherapiesUi } from '@models/mammaMRT/ui/anamnesis/previous-therapies-ui.model';
import { ReportModelBase } from '@models/report-model-base';

import { OwnFamilyAnamnesisPresentType } from '@enums/shared/mamma/anamnesis-medical-history';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { MenstruationTypeEnum } from '@enums/mammaMRT';

export class AnamnesisUi extends ReportModelBase {
  ownFamilyAnamnesisPresent: OwnFamilyAnamnesisPresentType;
  ownFamilyAnamnesisFindings: FamilyPersonUi[];
  menstruationType: MenstruationTypeEnum;
  calendar: Date;
  pregnanciesQuantity: number;
  arePreviousTherapies: SimpleAnswerEnum;
  previousTherapiesFindings: PreviousTherapiesUi[];

  constructor() {
    super();
    this.ownFamilyAnamnesisPresent = OwnFamilyAnamnesisPresentType.None;
    this.ownFamilyAnamnesisFindings = [new FamilyPersonUi()];
    this.menstruationType = MenstruationTypeEnum.None;
    this.calendar = null;
    this.pregnanciesQuantity = null;
    this.arePreviousTherapies = SimpleAnswerEnum.None;
    this.previousTherapiesFindings = [new PreviousTherapiesUi()];
  }
}
