import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftTissueFindingUiModel } from '@models/elbowMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { IntensityType, AssociatedFindingsType, ArticularEffusionLocalizationType } from '@enums/elbowMRT/soft-tissue/';

@Component({
  selector: 'rr-articular-effusion',
  templateUrl: './articular-effusion.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArticularEffusionComponent {
  @Input() model: SoftTissueFindingUiModel;

  intensityType: typeof IntensityType;
  associatedFindingsType: typeof AssociatedFindingsType;
  articularEffusionLocalizationType: typeof ArticularEffusionLocalizationType;

  constructor() {
    this.intensityType = IntensityType;
    this.associatedFindingsType = AssociatedFindingsType;
    this.articularEffusionLocalizationType = ArticularEffusionLocalizationType;
  }

  toggleIsExtraarticularArticularEffusion(): void {
    this.model.isExtraarticularArticularEffusion = this.model.associatedFindingsType === AssociatedFindingsType.CapsuleRupture;
  }
}
