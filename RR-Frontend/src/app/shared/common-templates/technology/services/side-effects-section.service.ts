import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SideEffectUiBaseModel } from '@models/shared/newTechnology/ui/side-effect-ui-base.model';

@Injectable({
  providedIn: 'root'
})
export class SideEffectsSectionService {
  private sideEffectsReinitialization$: Subject<SideEffectUiBaseModel[]>;
  private sideEffectsDeletedItemsRemoval$: Subject<SideEffectUiBaseModel[]>;
  private sideEffectsPreSaveCleanup$: Subject<void>;
  private contrastEnhancedChange$: Subject<void>;

  constructor() {
    this.sideEffectsReinitialization$ = new Subject<SideEffectUiBaseModel[]>();
    this.sideEffectsDeletedItemsRemoval$ = new Subject<SideEffectUiBaseModel[]>();
    this.contrastEnhancedChange$ = new Subject<void>();
    this.sideEffectsPreSaveCleanup$ = new Subject<void>();
  }

  // streams getters
  getHandlerReinitializeStream(): Subject<SideEffectUiBaseModel[]> {
    return this.sideEffectsReinitialization$;
  }

  getSideEffectsDeletedItemsRemovalStream(): Subject<SideEffectUiBaseModel[]> {
    return this.sideEffectsDeletedItemsRemoval$;
  }

  getContrastEnhancedStream(): Subject<void> {
    return this.contrastEnhancedChange$;
  }

  getPreSaveCleanupStream(): Subject<void> {
    return this.sideEffectsPreSaveCleanup$;
  }

  // streams updaters
  triggerSideEffectsReinitialization(sideEffectsModel: SideEffectUiBaseModel[]): void {
    this.sideEffectsReinitialization$.next(sideEffectsModel);
  }

  triggerSideEffectsDeletedItemsRemoval(sideEffectsModel: SideEffectUiBaseModel[]): void {
    this.sideEffectsDeletedItemsRemoval$.next(sideEffectsModel);
  }

  triggerSideEffectsPreSaveCleanup(): void {
    return this.sideEffectsPreSaveCleanup$.next();
  }

  triggerContrastEnhancedChange(): void {
    this.contrastEnhancedChange$.next();
  }
}
