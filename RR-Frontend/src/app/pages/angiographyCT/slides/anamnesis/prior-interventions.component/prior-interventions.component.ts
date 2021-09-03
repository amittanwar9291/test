import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnamnesisUiModel } from '@models/angiographyCT/ui/anamnesis/anamnesis-ui.model';
import { FindingColumnConfig } from '@controls/finding-column/finding-column-config';
import { DynamicComponentHandler } from '@abstractions/dynamic-base/dynamic-component-handler';
import { PriorInterventionsFindingUiModel } from '@models/angiographyCT/ui/anamnesis/prior-interventions-finding-ui.model';
import { PriorInterventionsFindingTypeEnum } from '@enums/angiographyCT/anamnesis';

@Component({
  selector: 'rr-prior-interventions',
  templateUrl: './prior-interventions.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PriorInterventionsComponent {
  @Input() model: AnamnesisUiModel;
  @Input() priorIntervestionFindingHandler: DynamicComponentHandler<PriorInterventionsFindingUiModel>;
  @Input() priorIntervestionFindingDropdownConfig: FindingColumnConfig;

  priorInterventionsFindingType = PriorInterventionsFindingTypeEnum;

  isPtaLysisThoracotomyPacemaker(): boolean {
    return [
      PriorInterventionsFindingTypeEnum.PTAOrStent,
      PriorInterventionsFindingTypeEnum.Lysis,
      PriorInterventionsFindingTypeEnum.Thoracotomy,
      PriorInterventionsFindingTypeEnum.Pacemaker
    ].includes(this.priorIntervestionFindingHandler.currentItem.priorInterventionsFindingType);
  }
}
