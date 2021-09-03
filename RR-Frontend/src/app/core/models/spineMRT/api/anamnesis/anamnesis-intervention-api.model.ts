import { InterventionTypesEnum } from '@enums/spineMRT/anamnesis/intervention-types.enum';
import { DetailInterventionTypesEnum } from '@enums/spineMRT/anamnesis/detail-intervention-types.enum';
import { FindingBase } from '@models/shared/finding/finding.base';
export class AnamnesisInterventionApiModel extends FindingBase {
  interventionType: InterventionTypesEnum;
  spineLocation: string;
  detailInterventionType: DetailInterventionTypesEnum;

  constructor() {
    super();
    this.interventionType = InterventionTypesEnum.None;
    this.spineLocation = 'None';
    this.detailInterventionType = DetailInterventionTypesEnum.None;
  }
}
