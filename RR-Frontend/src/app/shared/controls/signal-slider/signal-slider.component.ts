import { Component, OnInit, OnDestroy } from '@angular/core';
import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-signal-slider',
  templateUrl: './signal-slider.component.html',
  styleUrls: ['./signal-slider.component.scss'],
  providers: [MakeProvider(SignalSliderComponent)]
})
export class SignalSliderComponent extends NgModelAccessorBase<number> implements OnInit, OnDestroy {
  descriptionsSubscription: Subscription;
  descriptions: string[];

  constructor(private translate: TranslateService) {
    super();

    this.ngValue = 0;
  }

  ngOnInit(): void {
    this.descriptionsSubscription = this.translate.stream('controls.signal-five-slider').subscribe((out: string[]) => {
      this.descriptions = Object.keys(out).map(e => out[e]);
    });
  }

  ngOnDestroy(): void {
    this.descriptionsSubscription.unsubscribe();
  }

  valueChanged() {
    this.writeValue(this.ngValue);
  }
}
