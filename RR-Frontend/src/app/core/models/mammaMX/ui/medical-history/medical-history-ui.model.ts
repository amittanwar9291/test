import { ReportModelBase } from '@models/report-model-base';
import { FamilyPersonUi } from '@models/mammaMX/ui/medical-history/family-person-ui.model';
import { PreviousTherapiesUi } from '@models/mammaMX/ui/medical-history/previous-therapies-ui.model';

import { MenstruationType } from '@enums/mammaMX/medical-history/menstruation-type.enum';

import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { OwnFamilyAnamnesisPresentType } from '@enums/shared/mamma/anamnesis-medical-history';

export class MedicalHistoryUiModel extends ReportModelBase {
  ownFamilyAnamnesisPresent: OwnFamilyAnamnesisPresentType;
  ownFamilyAnamnesisFindings: FamilyPersonUi[];
  menstruationType: MenstruationType;
  calendar: Date;
  pregnanciesQuantity: number;
  arePreviousTherapies: SimpleAnswerEnum;
  previousTherapiesFindings: PreviousTherapiesUi[];

  constructor() {
    super();

    this.ownFamilyAnamnesisPresent = OwnFamilyAnamnesisPresentType.None;
    this.ownFamilyAnamnesisFindings = [new FamilyPersonUi()];
    this.menstruationType = MenstruationType.None;
    this.calendar = null;
    this.pregnanciesQuantity = null;
    this.arePreviousTherapies = SimpleAnswerEnum.None;
    this.previousTherapiesFindings = [new PreviousTherapiesUi()];
  }
}
