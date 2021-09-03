import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { LarynxFindingUiModel } from '@models/neckMRT/ui/larynx/larynx-finding-ui.model';

@Component({
  selector: 'rr-trauma',
  templateUrl: './trauma.component.html',
  styleUrls: ['./trauma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TraumaComponent {
  @Input() model: LarynxFindingUiModel;

  subscriptions: Subscription[] = [];

  constructor() {}
}
