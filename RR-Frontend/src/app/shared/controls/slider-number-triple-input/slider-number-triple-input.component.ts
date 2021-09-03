import { Component, OnInit, OnDestroy } from '@angular/core';
import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-slider-number-triple-input',
  templateUrl: './slider-number-triple-input.component.html',
  styleUrls: ['./slider-number-triple-input.component.css'],
  providers: [MakeProvider(SliderNumberTripleInputComponent)]
})
export class SliderNumberTripleInputComponent extends NgModelAccessorBase<number> implements OnInit, OnDestroy {
  descriptionsSubscription: Subscription;
  descriptions: string[];

  constructor(private translate: TranslateService) {
    super();

    this.ngValue = 0;
  }

  ngOnInit() {
    this.descriptionsSubscription = this.translate.stream('controls.signal-three-slider').subscribe((out: string[]) => {
      this.descriptions = Object.keys(out).map(e => out[e]);
    });
  }

  ngOnDestroy() {
    this.descriptionsSubscription.unsubscribe();
  }

  valueChanged() {
    this.writeValue(this.ngValue);
  }
}
