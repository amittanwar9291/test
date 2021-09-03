import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { InjuryTypeEnum, InjuryKindEnum, BundleTypeEnum, TransplantDetailEnum } from '@enums/kneeMRT/ribbons';

import { RibbonsFindingUiModel } from '@models/kneeMRT/ui/ribbons/ribbons-finding-ui.model';

@Component({
  selector: 'rr-cruciate-ligament',
  templateUrl: './cruciate-ligament.component.html',
  styleUrls: ['./cruciate-ligament.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CruciateLigamentComponent {
  @Input() cruciateLigamentType: string;
  @Input() model: RibbonsFindingUiModel;

  injuryType: typeof InjuryTypeEnum;
  ruptureKind: typeof InjuryKindEnum;
  bundleType: typeof BundleTypeEnum;
  transplantDetail: typeof TransplantDetailEnum;

  constructor() {
    this.injuryType = InjuryTypeEnum;
    this.ruptureKind = InjuryKindEnum;
    this.bundleType = BundleTypeEnum;
    this.transplantDetail = TransplantDetailEnum;
  }
}
