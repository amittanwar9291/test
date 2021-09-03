import { FindingBase } from '@models/shared/finding/finding.base';

import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';
import { CenterspecificPreferencesAcquisitionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-acquisition-ui.model';

export class CenterspecificPreferencesSetUiModel extends FindingBase {
  setName: string;

  // ALL MRI modules specific property
  sequences: CenterspecificPreferencesSequenceUiModel[];

  // ALL CT modules specific property
  acquisitions: CenterspecificPreferencesAcquisitionUiModel[];

  constructor() {
    super();

    this.setName = 'None';

    // ALL MRI modules specific property
    this.sequences = [new CenterspecificPreferencesSequenceUiModel()];

    // ALL CT modules specific property
    this.acquisitions = [new CenterspecificPreferencesAcquisitionUiModel()];
  }
}
