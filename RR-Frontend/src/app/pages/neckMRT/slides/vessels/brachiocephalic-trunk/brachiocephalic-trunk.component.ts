import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { ExtentTypeEnum, FormTypeEnum, PathologyTypeEnum, ShapeTypeEnum, CharacterizationTypeEnum } from '@enums/neckMRT/vessels';
import { VesselsBaseComponent } from '../vessels-base.component';

@Component({
  selector: 'rr-brachiocephalic-trunk',
  templateUrl: './brachiocephalic-trunk.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BrachiocephalicTrunkComponent extends VesselsBaseComponent {
  @Input() model: VesselsFindingUiModel;

  pathologyType = PathologyTypeEnum;
  extentType = ExtentTypeEnum;
  formType = FormTypeEnum;
  shapeType = ShapeTypeEnum;
  characterizationType = CharacterizationTypeEnum;
}
