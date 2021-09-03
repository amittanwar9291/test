import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import {
  DifferentialDiagnosisTypeEnum,
  ExtentTypeEnum,
  FormTypeEnum,
  PathologyTypeEnum,
  ShapeTypeEnum,
  SideTypeEnum,
  SubarachnoidHemorrhageTypeEnum
} from '@enums/neckMRT/vessels';
import { SupraaorticVesselsHelperService, SupraaorticVesselsLocalizerType } from '../supraaortic-vessels-helper.service';
import { VesselsBaseComponent } from '../vessels-base.component';

@Component({
  selector: 'rr-internal-carotid-artery',
  templateUrl: './internal-carotid-artery.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InternalCarotidArteryComponent extends VesselsBaseComponent {
  @Input() model: VesselsFindingUiModel;
  @Output() emitLocalizer = new EventEmitter();
  @Input() isContrastEnhanced: boolean;

  sideType = SideTypeEnum;
  pathologyType = PathologyTypeEnum;
  extentType = ExtentTypeEnum;
  formType = FormTypeEnum;
  shapeType = ShapeTypeEnum;
  differentialDiagnosisType = DifferentialDiagnosisTypeEnum;
  subarachnoidHemorrhageType = SubarachnoidHemorrhageTypeEnum;

  supraaorticVesselsLocalizerType = SupraaorticVesselsLocalizerType;

  constructor(
    toastMessageService: ToastMessageService,
    translate: TranslateService,
    validationHelperService: ValidationHelperService,
    private supraaorticVesselsHelperService: SupraaorticVesselsHelperService
  ) {
    super(toastMessageService, translate, validationHelperService);
  }

  openLargeLocalizer(type: SupraaorticVesselsLocalizerType): void {
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(type);
  }
}
