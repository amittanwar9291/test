import { FindingBase } from '@models/shared/finding/finding.base';

import { CenterspecificPreferencesSequenceApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-sequence-api.model';
import { CenterspecificPreferencesAcquisitionApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-acquisition-api.model';

export class CenterspecificPreferencesSetApiModel extends FindingBase {
  setName: string;

  // ALL MRI modules specific property
  sequences: CenterspecificPreferencesSequenceApiModel[];

  // ALL CT modules specific property
  acquisitions: CenterspecificPreferencesAcquisitionApiModel[];

  constructor() {
    super();

    this.setName = 'None';

    // ALL MRI modules specific property
    this.sequences = [new CenterspecificPreferencesSequenceApiModel()];

    // ALL CT modules specific property
    this.acquisitions = [new CenterspecificPreferencesAcquisitionApiModel()];
  }
}
