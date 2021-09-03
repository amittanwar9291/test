import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';

@Component({
  selector: 'rr-synovia-diffus',
  templateUrl: './synovia-diffus.component.html',
  styleUrls: ['./synovia-diffus.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SynoviaDiffusComponent implements OnInit {
  @Input() model: SoftPartsFindingUiModel;
  @Input() isCMReinforcedTypeYes: boolean;

  constructor() {}

  ngOnInit(): void {}
}
