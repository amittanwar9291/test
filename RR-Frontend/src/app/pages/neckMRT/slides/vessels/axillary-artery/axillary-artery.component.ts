import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import {
  DifferentialDiagnosisTypeEnum,
  ExtentTypeEnum,
  FormTypeEnum,
  PathologyTypeEnum,
  ShapeTypeEnum,
  SideTypeEnum,
  SubarachnoidHemorrhageTypeEnum,
  CharacterizationTypeEnum,
  DetailsVascularMalformationTypeEnum,
  ArteriovenousMalformationTypeEnum
} from '@enums/neckMRT/vessels';
import { VesselsBaseComponent } from '../vessels-base.component';

@Component({
  selector: 'rr-axillary-artery',
  templateUrl: './axillary-artery.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AxillaryArteryComponent extends VesselsBaseComponent {
  @Input() model: VesselsFindingUiModel;

  sideType = SideTypeEnum;
  pathologyType = PathologyTypeEnum;
  extentType = ExtentTypeEnum;
  formType = FormTypeEnum;
  shapeType = ShapeTypeEnum;
  differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  subarachnoidHemorrhageType = SubarachnoidHemorrhageTypeEnum;
  characterizationType = CharacterizationTypeEnum;
  detailsVascularMalformationType = DetailsVascularMalformationTypeEnum;
  arteriovenousMalformationType = ArteriovenousMalformationTypeEnum;
}
