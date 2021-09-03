import { ModelBase } from '@models/model-base';

import { SiliconeImplantTypeEnum } from '@enums/mammaMRT/anatomy-enhancement/silicone-implant-type.enum';

export class FindingSiliconeApi extends ModelBase {
  siliconeImplantType: SiliconeImplantTypeEnum;
  capsularFibrosisType: string;
  ruptureType: string;
  longestExtent: number;
  location: string;

  constructor() {
    super();

    this.siliconeImplantType = SiliconeImplantTypeEnum.None;
    this.capsularFibrosisType = 'None';
    this.ruptureType = 'None';
    this.longestExtent = null;
    this.location = 'None';
  }
}
