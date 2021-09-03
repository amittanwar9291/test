import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

@Injectable({
  providedIn: 'root'
})
export class SlideFormService {
  private slideRef: SlideBaseComponent<any>; // for future use
  private slideForm$: BehaviorSubject<NgForm>;

  constructor() {
    this.slideForm$ = new BehaviorSubject<NgForm>(null);
  }

  pushCurrentSlideFormRef(slideRef: SlideBaseComponent<any>) {
    if (!slideRef || !slideRef.ngForm) {
      throw new Error('Current slide reference error: null reference');
    }

    this.slideRef = slideRef;
    this.slideForm$.next(slideRef.ngForm);
  }

  getCurrentSlideFormStream() {
    return this.slideForm$;
  }
}
