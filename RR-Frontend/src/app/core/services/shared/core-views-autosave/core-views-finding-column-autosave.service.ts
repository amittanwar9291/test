import { Injectable } from '@angular/core';

import { CenterspecificPreferencesTriggerService } from '@sharedPages/centerspecific-preferences/centerspecific-preferences-trigger.service';

@Injectable({
  providedIn: 'root'
})
export class CoreViewsFindingColumnAutosaveService {
  constructor(private modelExternalChangeTriggerService: CenterspecificPreferencesTriggerService) {}

  triggerChange(): void {
    this.modelExternalChangeTriggerService.triggerExternalChanges();
  }
}
