import { Injectable } from '@angular/core';
import { SoftPartsSiteTypeEnum } from '@enums/thoraxCT/soft-parts';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftPartsHelperService {
  isLargeLocalizerOpen = new BehaviorSubject<boolean>(false);
  isCMYes = new BehaviorSubject<boolean>(null);

  isSiteDisabled(allFindings: SoftPartsFindingUiModel[], currentModel: SoftPartsFindingUiModel, siteValue: SoftPartsSiteTypeEnum): boolean {
    return (
      allFindings
        .filter(finding => finding.id !== currentModel.id)
        .filter(finding => finding.findingType === currentModel.findingType)
        .filter(finding => finding.siteType === siteValue).length > 0
    );
  }
}
