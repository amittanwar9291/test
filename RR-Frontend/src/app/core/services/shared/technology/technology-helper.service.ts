import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyHelperService {
  private moduleChanged$: ReplaySubject<string>;

  constructor() {
    this.moduleChanged$ = new ReplaySubject<string>();
  }

  // streams getters
  getActiveModuleChangedStream(): ReplaySubject<string> {
    return this.moduleChanged$;
  }

  // streams updaters
  triggerActiveModuleChanged(moduleName: string): void {
    this.moduleChanged$.next(moduleName);
  }
}
