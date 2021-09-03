import { Guid } from '@models/shared/guid/guid';
import { CenterspecificPreferencesSetUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-set-ui.model';

export class CenterspecificPreferencesModuleUiModel {
  sets: CenterspecificPreferencesSetUiModel[];
  findingType: string;
  id: string;

  constructor(findingType?: string) {
    this.sets = null;
    this.findingType = findingType || 'None';
    this.id = Guid.createEmpty();
  }
}
