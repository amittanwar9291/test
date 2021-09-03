import { Subject, BehaviorSubject, Subscription } from 'rxjs';

export class ChangeDetectionModel {
  changes$: Subject<void>;
  triggerSubscription: Subscription;
  triggerCallback: () => void;
  isPending$: BehaviorSubject<boolean>;
  firstSaveSubscription: Subscription;

  pageNumber: number;

  constructor(pageNumber: number) {
    this.pageNumber = pageNumber;

    this.changes$ = new Subject<void>();
    this.isPending$ = new BehaviorSubject<boolean>(false);
  }
}
