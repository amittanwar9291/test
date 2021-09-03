import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';
import { LengthOfChangesInCmTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/segmental-bowel-findings';

@Component({
  selector: 'rr-segmental-bowel-characterization-one',
  templateUrl: './segmental-bowel-characterization-one.component.html',
  styleUrls: ['./segmental-bowel-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SegmentalBowelCharacterizationOneComponent {
  @Input() model: GastrointestinalTractFindingUiModel;
  @Input() localizationValidation;
  @Input() isDWIInAnySequence: boolean;
  lengthOfChangesInCmType = LengthOfChangesInCmTypeEnum;
}
