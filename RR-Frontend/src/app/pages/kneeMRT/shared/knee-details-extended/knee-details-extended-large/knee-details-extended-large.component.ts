import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';

import { KneeDetailsExtended } from '@models/kneeMRT/ui/knee/knee-details-extended-ui.model';
import { LocalizerBase } from '@abstractions/localizer-base/localizer-base';

@Component({
  selector: 'rr-knee-details-complex-large',
  templateUrl: './knee-details-extended-large.component.html',
  styleUrls: ['./knee-details-extended-large.component.scss'],
  providers: [MakeProvider(KneeDetailsExtendedLargeComponent)],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class KneeDetailsExtendedLargeComponent extends LocalizerBase<KneeDetailsExtended> implements OnInit {
  @Input() isClosable = true;
  @Output() close = new EventEmitter();

  kneeParts: { name: string; yPosition: number }[] = [];

  constructor() {
    super(KneeDetailsExtended);
  }

  ngOnInit() {
    this.prepareKneeParts();
  }

  prepareKneeParts(): void {
    const kneeModelKeys = Object.keys(new KneeDetailsExtended());
    let yCounter = 22;
    kneeModelKeys.forEach(key => {
      this.kneeParts.push({ name: key, yPosition: yCounter });
      yCounter += 52;
    });
  }

  closeLargeLocalizer(): void {
    this.close.emit();
  }
}
