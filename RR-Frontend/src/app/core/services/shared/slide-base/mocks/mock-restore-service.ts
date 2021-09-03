import { of } from 'rxjs';
import { IPerformWhenReady } from '@interfaces/navigation/IPeformWhenReady';

export class MockRestoreService implements IPerformWhenReady {
  performWhenReady(callback: () => number): Promise<void> {
    callback();
    return of(null).toPromise();
  }
}
