import { ModelBase } from '@models/model-base';
import { BreastSimpleShoulder } from '@models/shared/mamma/breast/breast-simple-shoulder.model';

import { SiliconeImplantTypeEnum } from '@enums/mammaMRT/anatomy-enhancement/silicone-implant-type.enum';

export class FindingSiliconeUi extends ModelBase {
  siliconeImplantType: SiliconeImplantTypeEnum;
  capsularFibrosisType: string;
  ruptureType: string;
  longestExtent: number;
  location: BreastSimpleShoulder;

  constructor() {
    super();

    this.siliconeImplantType = SiliconeImplantTypeEnum.None;
    this.capsularFibrosisType = 'None';
    this.ruptureType = 'None';
    this.longestExtent = null;
    this.location = new BreastSimpleShoulder();
  }
}
