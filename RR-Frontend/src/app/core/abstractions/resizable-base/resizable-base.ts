import { HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

export class ResizableBaseComponent implements OnInit, OnDestroy {
  zoom: number;
  private innerWidth: number;
  private innerHeight: number;
  private readonly resHorizontal = 1920;
  private readonly resVertical = 1080;

  private resizeSubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.calculateRatio();

    this.resizeSubscription = fromEvent(window, 'resize').subscribe(() => {
      this.onResize();
    });
  }

  onResize() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;

    this.calculateRatio();
  }

  protected calculateRatio() {
    const widthRatio = this.innerWidth / this.resHorizontal;
    const heightRatio = this.innerHeight / this.resVertical;

    if (widthRatio < heightRatio) {
      this.zoom = widthRatio;
    } else {
      this.zoom = heightRatio;
    }
  }

  ngOnDestroy(): void {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
