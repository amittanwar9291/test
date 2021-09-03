import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import {
  AffectedBranchTypeEnum,
  DifferentialDiagnosisTypeEnum,
  ExtentTypeEnum,
  FormTypeEnum,
  PathologyTypeEnum,
  ShapeTypeEnum,
  SideTypeEnum
} from '@enums/neckMRT/vessels';
import { VesselsBaseComponent } from '../vessels-base.component';

@Component({
  selector: 'rr-external-carotid-artery',
  templateUrl: './external-carotid-artery.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExternalCarotidArteryComponent extends VesselsBaseComponent {
  @Input() model: VesselsFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  sideType = SideTypeEnum;
  pathologyType = PathologyTypeEnum;
  extentType = ExtentTypeEnum;
  formType = FormTypeEnum;
  shapeType = ShapeTypeEnum;
  differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  affectedBranchType = AffectedBranchTypeEnum;
}
