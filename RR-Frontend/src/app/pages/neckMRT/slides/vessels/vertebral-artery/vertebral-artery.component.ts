import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import {
  DifferentialDiagnosisTypeEnum,
  ExtentTypeEnum,
  FormTypeEnum,
  PathologyTypeEnum,
  ShapeTypeEnum,
  SideTypeEnum
} from '@enums/neckMRT/vessels';
import { VesselsBaseComponent } from '../vessels-base.component';

@Component({
  selector: 'rr-vertebral-artery',
  templateUrl: './vertebral-artery.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VertebralArteryComponent extends VesselsBaseComponent {
  @Input() model: VesselsFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  sideType = SideTypeEnum;
  pathologyType = PathologyTypeEnum;
  extentType = ExtentTypeEnum;
  formType = FormTypeEnum;
  shapeType = ShapeTypeEnum;
  differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
}
