import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { StructureTypeEnum } from '@enums/thoraxCT/lung-interstitium';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';

@Component({
  selector: 'rr-reticulations',
  templateUrl: './reticulations.component.html',
  styleUrls: ['./reticulations.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ReticulationsComponent {
  @Input() model: LungInterstitiumFindingUiModel;

  structureTypeEnum = StructureTypeEnum;
}
