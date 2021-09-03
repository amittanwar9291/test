import { Injectable } from '@angular/core';
import { PleuraSiteTypeEnum } from '@enums/thoraxMRT/pleura/common/pleura-site-type.enum';
import { PleuraFindingUiModel } from '@models/thoraxMRT/ui/pleura/pleura-finding-ui.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PleuraHelperService {
  largeLocalizerOpen = new BehaviorSubject<'spine' | 'rib'>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
  isWeightingTypeDWI = new BehaviorSubject<boolean>(null);

  isSiteDisabled(allFindings: PleuraFindingUiModel[], currentModel: PleuraFindingUiModel, siteValue: PleuraSiteTypeEnum): boolean {
    return (
      allFindings
        .filter(finding => finding.validationId !== currentModel.validationId)
        .filter(finding => finding.isDeleted === false)
        .filter(finding => finding.findingType === currentModel.findingType)
        .filter(finding => finding.pleuraSiteType === siteValue).length > 0
    );
  }
}
