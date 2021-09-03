import { Subject } from 'rxjs';
import { IModuleLifecycle } from '@interfaces/module-lifecycle.interface';

export class MockModuleLifecycleService implements IModuleLifecycle {
  onDestroy$: Subject<void>;
  onInit$: Subject<void>;

  constructor() {
    this.onDestroy$ = new Subject<void>();
    this.onInit$ = new Subject<void>();
  }

  triggerDestroy() {
    this.onDestroy$.next();
  }

  triggerInit() {
    this.onInit$.next();
  }

  getOnDestroyStream() {
    return this.onDestroy$;
  }

  getOnInitStream() {
    return this.onInit$;
  }
}
