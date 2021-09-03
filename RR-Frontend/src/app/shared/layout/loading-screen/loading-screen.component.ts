import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy } from '@angular/core';

import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';

import { LoadingScreenService } from '@services/shared/loading-screen/loading-screen.service';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rr-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent extends ResizableBaseComponent implements AfterViewInit, OnDestroy {
  debounceTime = 200;
  loading = false;
  loadingSubscription: Subscription;

  constructor(
    private loadingScreenService: LoadingScreenService,
    private elmRef: ElementRef,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super();
  }

  ngAfterViewInit(): void {
    this.elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loadingStatus
      .pipe(debounceTime(this.debounceTime))
      .subscribe((status: boolean) => {
        this.elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
