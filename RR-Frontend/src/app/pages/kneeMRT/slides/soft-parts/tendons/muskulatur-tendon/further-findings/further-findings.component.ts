import { Component, Input } from '@angular/core';
import { SoftPartsFindingUiModel } from '@models/kneeMRT/ui/soft-parts/soft-parts-finding-ui.model';
import { FurtherFindingsMusculatureTypeEnum, MuscularAtrophyTypeEnum } from '@enums/kneeMRT/soft-parts';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-further-findings',
  templateUrl: './further-findings.component.html',
  styleUrls: ['./further-findings.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FurtherFindingsComponent {
  @Input() model: SoftPartsFindingUiModel;

  furtherFindingsMusculatureTypeEnum: typeof FurtherFindingsMusculatureTypeEnum;
  muscularAtrophyTypeEnum: typeof MuscularAtrophyTypeEnum;

  constructor() {
    this.furtherFindingsMusculatureTypeEnum = FurtherFindingsMusculatureTypeEnum;
    this.muscularAtrophyTypeEnum = MuscularAtrophyTypeEnum;
  }
}
