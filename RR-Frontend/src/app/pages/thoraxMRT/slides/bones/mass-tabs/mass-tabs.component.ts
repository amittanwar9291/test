import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/thoraxMRT/ui/bones/bones-finding-ui.model';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-mass-tabs',
  templateUrl: './mass-tabs.component.html',
  styleUrls: ['./mass-tabs.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassTabsComponent {
  @Input() model: BonesFindingUiModel;

  firstTabValidatedFields = [
    nameof<BonesFindingUiModel>(m => m.characterizationOneDifferentialDiagnosis),
    nameof<BonesFindingUiModel>(m => m.sideType),
    nameof<BonesFindingUiModel>(m => m.extensionSize),
    nameof<BonesFindingUiModel>(m => m.marginType),
    nameof<BonesFindingUiModel>(m => m.corticalBone),
    nameof<BonesFindingUiModel>(m => m.ribLocalization),
    nameof<BonesFindingUiModel>(m => m.spineLocalization),
    [
      nameof<BonesFindingUiModel>(m => m.isSternalManubriumLocalized),
      nameof<BonesFindingUiModel>(m => m.isSternalBodyLocalized),
      nameof<BonesFindingUiModel>(m => m.isXiphoidProcessLocalized)
    ].join(' ')
  ];
}
