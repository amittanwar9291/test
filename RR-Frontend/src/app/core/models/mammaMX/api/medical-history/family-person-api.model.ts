import { FindingBase } from '@models/shared/finding/finding.base';

import { BreastCarcinomaType, MenopauseType, OwnFamilyAnamnesisType } from '@enums/shared/mamma/anamnesis-medical-history';

export class FamilyPersonApi extends FindingBase {
  findingType: OwnFamilyAnamnesisType;
  isBreastCarcinoma: boolean;
  breastCarcinomaType: BreastCarcinomaType;
  breastCarcinomaAge: number;
  isOvarianCancer: boolean;
  ovarianCancerAge: number;
  ownAnamnesisMonth: number;
  ownAnamnesisYear: number;
  menopauseType: MenopauseType;
  breastLocation: string;

  constructor() {
    super();
    this.findingType = OwnFamilyAnamnesisType.None;
    this.isBreastCarcinoma = false;
    this.breastCarcinomaType = BreastCarcinomaType.None;
    this.breastCarcinomaAge = null;
    this.isOvarianCancer = false;
    this.ovarianCancerAge = null;
    this.ownAnamnesisMonth = null;
    this.ownAnamnesisYear = null;
    this.menopauseType = MenopauseType.None;
    this.breastLocation = 'None';
  }
}
