import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { InterventionTypesEnum } from '@enums/spineMRT/anamnesis/intervention-types.enum';
import { DetailInterventionTypesEnum } from '@enums/spineMRT/anamnesis/detail-intervention-types.enum';
import { FindingBase } from '@models/shared/finding/finding.base';

export class AnamnesisInterventionUiModel extends FindingBase {
  interventionType: InterventionTypesEnum;
  spineLocation: SpineLocation;
  detailInterventionType: DetailInterventionTypesEnum;

  constructor() {
    super();
    this.interventionType = InterventionTypesEnum.None;
    this.spineLocation = new SpineLocation();
    this.detailInterventionType = DetailInterventionTypesEnum.None;
  }
}
