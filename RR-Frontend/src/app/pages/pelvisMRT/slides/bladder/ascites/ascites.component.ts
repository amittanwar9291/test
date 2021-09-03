import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BladderFindingUiModel } from '@models/pelvisMRT/ui/bladder/bladder-finding-ui.model';
import { AscitesCharacterizationTypeEnum } from '@enums/pelvisMRT/bladder';

@Component({
  selector: 'rr-ascites',
  templateUrl: './ascites.component.html',
  styleUrls: ['./ascites.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AscitesComponent {
  @Input() model: BladderFindingUiModel;
  ascitesCharacterizationTypeEnum = AscitesCharacterizationTypeEnum;
}
