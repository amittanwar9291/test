import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { KneeDetails } from '@models/kneeMRT/ui/knee/knee-details-ui.model';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-knee-details-simple-large',
  templateUrl: './knee-details-simple-large.component.html',
  styleUrls: ['./knee-details-simple-large.component.scss'],
  providers: [MakeProvider(KneeDetailsSimpleLargeComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KneeDetailsSimpleLargeComponent extends LocalizerBase<KneeDetails> implements OnInit {
  @Output() close = new EventEmitter();

  kneeParts: { name: string; yPosition: number }[] = [];

  constructor() {
    super(KneeDetails);
  }

  ngOnInit(): void {
    this.prepareKneeParts();
  }

  prepareKneeParts(): void {
    const kneeSingleModelKeys = Object.keys(new KneeDetails());
    let yCounter = 22;
    kneeSingleModelKeys.forEach(key => {
      this.kneeParts.push({ name: key, yPosition: yCounter });
      yCounter += 52;
    });
  }

  closeLargeLocalizer(): void {
    this.close.emit();
  }
}
