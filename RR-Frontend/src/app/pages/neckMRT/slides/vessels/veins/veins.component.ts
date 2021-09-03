import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VeinsCharacterizationTypeEnum, SideTypeEnum, VeinsPathologyTypeEnum } from '@enums/neckMRT/vessels';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';

@Component({
  selector: 'rr-veins',
  templateUrl: './veins.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VeinsComponent implements OnInit {
  @Input() model: VesselsFindingUiModel;

  previousVeinsCharacterizationType: VeinsCharacterizationTypeEnum;

  veinsCharacterizationType = VeinsCharacterizationTypeEnum;
  sideType = SideTypeEnum;
  veinsPathologyType = VeinsPathologyTypeEnum;

  ngOnInit(): void {
    this.previousVeinsCharacterizationType = this.model.veinsCharacterizationType;
  }

  clearVeinsCharacterizationTypeBlock(): void {
    if (this.model.veinsCharacterizationType !== this.previousVeinsCharacterizationType) {
      this.model.sideType = SideTypeEnum.None;
      this.model.veinsPathologyType = VeinsPathologyTypeEnum.None;
      this.model.lengthInMm = null;
      this.model.isLongDistance = false;
      this.model.isThrombusSurroundedByContrastAgent = false;
    }

    this.previousVeinsCharacterizationType = this.model.veinsCharacterizationType;
  }
}
