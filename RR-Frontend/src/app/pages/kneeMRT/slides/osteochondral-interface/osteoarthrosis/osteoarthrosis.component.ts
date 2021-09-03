import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { OsteochondralInterfaceFindingUiModel } from '@models/kneeMRT/ui/osteochondral-interface/osteochondral-interface-finding-ui.model';

import { OuterbridgeClassicifationTypeEnum } from '@enums/kneeMRT/outerbridge-classicifation-type.enum';
import {
  FormOfArthrosisTypeEnum,
  JointSurfaceTypeEnum,
  UnipolarJointSurfaceTypeEnum
} from '@enums/kneeMRT/osteochondral-interface/osteoarthrosis';

@Component({
  selector: 'rr-osteoarthrosis',
  templateUrl: 'osteoarthrosis.component.html',
  styleUrls: ['./../osteochondral-interface.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class OsteoarthrosisComponent {
  @Input() model: OsteochondralInterfaceFindingUiModel;

  outerbridgeClassificationType: typeof OuterbridgeClassicifationTypeEnum;
  jointSurfaceType: typeof JointSurfaceTypeEnum;
  unipolarJointSurfaceType: typeof UnipolarJointSurfaceTypeEnum;
  formOfArthrosisType: typeof FormOfArthrosisTypeEnum;

  constructor() {
    this.outerbridgeClassificationType = OuterbridgeClassicifationTypeEnum;
    this.jointSurfaceType = JointSurfaceTypeEnum;
    this.unipolarJointSurfaceType = UnipolarJointSurfaceTypeEnum;
    this.formOfArthrosisType = FormOfArthrosisTypeEnum;
  }
}
