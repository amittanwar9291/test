import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ArteriopathyTypeEnum, PathologyTypeEnum, VesselsSideTypeEnum, VesselsUretersTypeEnum } from '@enums/spineMRT/soft-tissues';
import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';

@Component({
  selector: 'rr-vessels-ureters',
  templateUrl: './vessels-ureters.component.html',
  styleUrls: ['./vessels-ureters.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VesselsUretersComponent {
  @Input() model: SoftTissuesFindingUiModel;

  vesselsUretersTypeEnum: typeof VesselsUretersTypeEnum = VesselsUretersTypeEnum;
  vesselsSideTypeEnum: typeof VesselsSideTypeEnum = VesselsSideTypeEnum;
  arteriopathyTypeEnum: typeof ArteriopathyTypeEnum = ArteriopathyTypeEnum;
  pathologyTypeEnum: typeof PathologyTypeEnum = PathologyTypeEnum;

  getAneurysmMaximumDiameterMaxValue(): number {
    return this.model.vesselsUretersType === this.vesselsUretersTypeEnum.AortaThoracica ? 80 : 100;
  }
}
