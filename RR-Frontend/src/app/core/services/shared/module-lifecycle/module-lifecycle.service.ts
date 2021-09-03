import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { NavigationRestoreService } from '../navigation/navigation-restore.service';
import { IModuleLifecycle } from '@interfaces/module-lifecycle.interface';

@Injectable({
  providedIn: 'root'
})
export class ModuleLifecycleService implements IModuleLifecycle {
  onDestroy$: Subject<void>;
  onInit$: Subject<void>;

  constructor(private navRestoreService: NavigationRestoreService) {
    this.onDestroy$ = new Subject<void>();
    this.onInit$ = new Subject<void>();
  }

  triggerDestroy() {
    if (this.canEmit()) {
      this.onDestroy$.next();
    }
  }

  triggerInit() {
    if (this.canEmit()) {
      this.onInit$.next();
    }
  }

  getOnDestroyStream() {
    return this.onDestroy$;
  }

  getOnInitStream() {
    return this.onInit$;
  }

  private canEmit() {
    return !this.navRestoreService.getRestoreStream().value;
  }
}
