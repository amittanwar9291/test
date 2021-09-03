import { BreastSimple } from '@models/shared/mamma/breast/breast-simple.model';
import { FindingBase } from '@models/shared/finding/finding.base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';

import { BreastCarcinomaType, MenopauseType } from '@enums/shared/mamma/anamnesis-medical-history';
import { OwnFamilyAnamnesisType } from '@enums/mammaMX/medical-history/own-family-anamnesis-type.enum';

export class FamilyPersonUi extends FindingBase {
  findingType: OwnFamilyAnamnesisType;
  isBreastCarcinoma: boolean;
  breastCarcinomaType: BreastCarcinomaType;
  breastCarcinomaAge: string;
  isOvarianCancer: boolean;
  ovarianCancerAge: string;
  ownAnamnesisDate: MonthYearModel;
  menopauseType: MenopauseType;
  breastLocation: BreastSimple;

  constructor() {
    super();

    this.findingType = OwnFamilyAnamnesisType.None;
    this.isBreastCarcinoma = false;
    this.breastCarcinomaType = BreastCarcinomaType.None;
    this.breastCarcinomaAge = '0';
    this.isOvarianCancer = false;
    this.ovarianCancerAge = '0';
    this.ownAnamnesisDate = new MonthYearModel();
    this.menopauseType = MenopauseType.None;
    this.breastLocation = new BreastSimple();
  }
}
