import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, Subject, merge, Subscription, BehaviorSubject, EMPTY } from 'rxjs';
import { concatMap, finalize, withLatestFrom, map, scan, distinctUntilChanged } from 'rxjs/operators';

import { IHttpService } from '@interfaces/http-service.interface';
import { IModel } from '@interfaces/model.interface';
import { Guid } from '@models/shared/guid/guid';

// TODO:
// block updated while post is going
// add error handling
export class SafeHttpRequest {
  // http request blockades
  private blockade$: Subject<boolean>;

  private wasPosted: boolean;
  private updateBlockade: boolean;
  private saveBlockade: boolean;

  // http request triggering streams
  private postTrigger$: Subject<{ model: IModel; headers: any }>;
  private updateTrigger$: Subject<{ model: IModel; headers: any }>;

  // http result subcriptions
  private postSubscription: Subscription;
  private updateSubscription: Subscription;

  // http result streams
  private postResults$: Subject<IModel>;
  private updateResults$: Subject<IModel>;

  // save await logic variables
  private saveAwaitSubscription: Subscription;
  private saveStream$: BehaviorSubject<boolean>;

  constructor(private httpService: IHttpService) {
    this.assignStreams();
    this.wasPosted = false;
    this.updateBlockade = false;
    this.saveBlockade = false;
  }

  public getPostStream(): Observable<IModel> {
    return this.postResults$;
  }

  public getUpdateStream(): Observable<IModel> {
    return this.updateResults$;
  }

  public getSaveAwaitStream() {
    return this.saveStream$;
  }

  public get(id: any, params?: HttpParams): Observable<IModel> {
    this.saveBlockade = true;

    return this.httpService.get(id, params).pipe(
      finalize(() => {
        this.saveBlockade = false;
      })
    );
  }

  public post(model: IModel, headers?: HttpHeaders) {
    if (this.saveBlockade) {
      return;
    }

    if (Guid.isEmpty(model.id) && !this.wasPosted) {
      this.wasPosted = true; // TODO: add reseting in case of error
      this.updateBlockade = true;
      this.postTrigger$.next({ model, headers });
    } else {
      throw new Error(); // TODO: when i know what to do
    }
  }

  public update(model: IModel, headers?: HttpHeaders) {
    if (this.updateBlockade || this.saveBlockade) {
      return;
      // TODO: add some message
    }

    if (!Guid.isEmpty(model.id)) {
      this.updateTrigger$.next({ model, headers });
    } else {
      throw new Error(); // TODO: todo when i know what to do
    }
  }

  public disable() {
    this.blockade$.next(false);
  }

  public enable() {
    this.blockade$.next(true);
  }

  public resetPostBlockade() {
    this.wasPosted = false;
  }

  public destroy() {
    this.updateSubscription.unsubscribe();
    this.postSubscription.unsubscribe();
    this.saveAwaitSubscription.unsubscribe();
  }

  private assignStreams() {
    this.blockade$ = new Subject<boolean>();

    this.postTrigger$ = new Subject<{ model: IModel; headers: any }>();
    this.updateTrigger$ = new Subject<{ model: IModel; headers: any }>();

    this.postResults$ = new Subject<IModel>();
    this.updateResults$ = new Subject<IModel>();

    this.postSubscription = this.buildSafeStream(this.httpService.post.bind(this.httpService), this.postTrigger$).subscribe({
      complete: () => this.postResults$.complete(),
      error: err => this.postResults$.error(err),
      next: output => {
        this.postResults$.next(output);
        this.updateBlockade = false;
      }
    });

    this.updateSubscription = this.buildSafeStream(this.httpService.update.bind(this.httpService), this.updateTrigger$).subscribe({
      complete: () => this.updateResults$.complete(),
      error: err => this.updateResults$.error(err),
      next: output => this.updateResults$.next(output)
    });

    this.saveStream$ = new BehaviorSubject<boolean>(false);
    this.saveAwaitSubscription = this.buildAwaitStream().subscribe({
      complete: () => this.saveStream$.complete(),
      error: err => this.saveStream$.error(err),
      next: output => this.saveStream$.next(output)
    });

    this.enable();
  }

  // builds stream that can be canceled and behaves as concatMap
  // request that is running while .next() is triggered will be canceled and new one will be created
  // deprecated combineLatest is being used due to static one having unpredicted behavior
  private buildSafeStream(
    request: (model: IModel, headers: any) => Observable<IModel>,
    triggeringStream$: Subject<{ model: IModel; headers: any }>
  ): Observable<IModel> {
    return triggeringStream$.pipe(
      withLatestFrom(this.blockade$),
      concatMap(([requestVal, blockade]) => (blockade ? request(requestVal.model, requestVal.headers) : EMPTY))
    );
  }

  // return true if there are requests pending, false otherwise
  private buildAwaitStream() {
    return merge(
      merge(this.postResults$, this.updateResults$).pipe(map(() => 1)), // reduce each update and post to 1 in shared stream
      merge(this.postTrigger$, this.updateTrigger$).pipe(map(() => -1)) // reduce each update and post to -1 in shared stream
    ).pipe(
      scan((sum, val) => sum + val), // adds all 1 and -1 (0 => no pending requests, > 0 penging requests, < 0 error)
      map(value => !!value), // true -> some are pending, false -> all closed
      distinctUntilChanged()
    );
  }
}
