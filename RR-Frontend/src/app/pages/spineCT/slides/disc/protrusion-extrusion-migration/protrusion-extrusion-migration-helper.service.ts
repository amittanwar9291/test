import { Injectable } from '@angular/core';
import { DiscFindingUiModel } from '@models/spineCT';
import { compact } from 'lodash';
import { DiscFindingTypeEnum } from '@enums/spineCT/disc/disc-finding-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ProtrusionExtrusionMigrationHelperService {
  public isSingleSelectOnLocalizer(model: DiscFindingUiModel): boolean {
    return compact(Object.values(model.spineLocation)).length === 1;
  }

  public shouldBeDisplayByFindingType(items: DiscFindingTypeEnum[], model: DiscFindingUiModel): boolean {
    return items.includes(model.findingType);
  }

  public isL1dtoL5dSelectedOnLocalizerSelected(model: DiscFindingUiModel): boolean {
    return (
      model.spineLocation.l1d || model.spineLocation.l2d || model.spineLocation.l3d || model.spineLocation.l4d || model.spineLocation.l5d
    );
  }
}
