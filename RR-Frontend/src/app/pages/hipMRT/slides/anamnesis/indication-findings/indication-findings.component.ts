import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AnamnesisFindingUiModel } from '@models/hipMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { AnamnesisFindingType } from '@enums/hipMRT/anamnesis/anamnesis-finding-type.enum';

@Component({
  selector: 'rr-indication-findings',
  templateUrl: './indication-findings.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IndicationFindingsComponent {
  @Input() model: AnamnesisFindingUiModel;
  @Input() currentFindingHeader: string;

  findingType: typeof AnamnesisFindingType;

  constructor() {
    this.findingType = AnamnesisFindingType;
  }

  get isViewSharedBySevenFindings(): boolean {
    return [
      AnamnesisFindingType.Osteoarthrosis,
      AnamnesisFindingType.Arthritis,
      AnamnesisFindingType.Dysplasia,
      AnamnesisFindingType.Impingement,
      AnamnesisFindingType.Luxation,
      AnamnesisFindingType.AVN,
      AnamnesisFindingType.Trauma
    ].includes(this.model.findingType);
  }

  get isViewSharedByTwoFindings(): boolean {
    return [AnamnesisFindingType.Fracture, AnamnesisFindingType.Mass].includes(this.model.findingType);
  }
}
