import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CenterspecificPreferencesTriggerService {
  private modelExternalChangesTrigger$: Subject<void>;

  constructor() {
    this.modelExternalChangesTrigger$ = new Subject<void>();
  }

  getModelExternalChangesTriggerStream(): Subject<void> {
    return this.modelExternalChangesTrigger$;
  }

  triggerExternalChanges(): void {
    this.modelExternalChangesTrigger$.next();
  }
}
