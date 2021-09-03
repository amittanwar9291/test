import { Component, Input } from '@angular/core';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { MusculatureLocationTypeEnum } from '@enums/kneeMRT/soft-parts';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent {
  @Input() model: SoftPartsFindingUiModel;

  musculatureLocationTypeEnum: typeof MusculatureLocationTypeEnum;

  constructor() {
    this.musculatureLocationTypeEnum = MusculatureLocationTypeEnum;
  }
}
