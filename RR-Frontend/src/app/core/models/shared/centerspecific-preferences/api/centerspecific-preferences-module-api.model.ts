import { Guid } from '@models/shared/guid/guid';
import { CenterspecificPreferencesSetApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-set-api.model';

export class CenterspecificPreferencesModuleApiModel {
  sets: CenterspecificPreferencesSetApiModel[];
  findingType: string;
  id: string;

  constructor(findingType?: string) {
    this.sets = null;
    this.findingType = findingType || 'None';
    this.id = Guid.createEmpty();
  }
}
