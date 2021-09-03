import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {
  private loader = false;
  private showRequestCount = 0;
  loadingStatus: Subject<boolean> = new Subject();

  get loading(): boolean {
    return this.loader;
  }

  set loading(value) {
    this.loader = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.showRequestCount++;
    if (!this.loader) {
      this.loading = true;
    }
  }

  stopLoading() {
    this.showRequestCount = this.showRequestCount > 0 ? this.showRequestCount - 1 : 0;
    if (this.showRequestCount === 0) {
      this.loading = false;
    }
  }
}
