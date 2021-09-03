import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { KidneysFindingUiModel } from '@models/abdomenMRT/ui/kidneys/kidneys-finding-ui.model';
import { CalcificationTypeEnum, FatTypeEnum } from '@enums/abdomenMRT/kidneys';

@Component({
  selector: 'rr-mass-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['../../kidneys.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent {
  @Input() model: KidneysFindingUiModel;
  @Input() isCMReinforced: boolean;

  fatType = FatTypeEnum;
  calcificationType = CalcificationTypeEnum;
}
