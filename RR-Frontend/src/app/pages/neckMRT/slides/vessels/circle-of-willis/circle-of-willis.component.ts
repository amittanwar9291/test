import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { ExtentTypeEnum, FormTypeEnum, PathologyTypeEnum, ShapeTypeEnum, SubarachnoidHemorrhageTypeEnum } from '@enums/neckMRT/vessels';
import { SupraaorticVesselsHelperService, SupraaorticVesselsLocalizerType } from '../supraaortic-vessels-helper.service';
import { VesselsBaseComponent } from '../vessels-base.component';

@Component({
  selector: 'rr-circle-of-willis',
  templateUrl: './circle-of-willis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CircleOfWillisComponent extends VesselsBaseComponent implements OnInit {
  @Input() model: VesselsFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  supraaorticVesselsLocalizerType = SupraaorticVesselsLocalizerType;
  bigLocalizerOpenSubscription: Subscription;

  pathologyType = PathologyTypeEnum;
  extentType = ExtentTypeEnum;
  formType = FormTypeEnum;
  shapeType = ShapeTypeEnum;
  subarachnoidHemorrhageType = SubarachnoidHemorrhageTypeEnum;

  constructor(
    toastMessageService: ToastMessageService,
    translate: TranslateService,
    validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper,
    private supraaorticVesselsHelperService: SupraaorticVesselsHelperService
  ) {
    super(toastMessageService, translate, validationHelperService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.bigLocalizerOpenSubscription = this.supraaorticVesselsHelperService.isLargeLocalizerOpened.subscribe(() => {
      const selection = this.enumMapper.mapToString(this.model.arteriesSegmentType);
      if (selection !== 'None') {
        this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.arteriesSegmentType));
      }
    });
  }

  openLargeLocalizer(type: SupraaorticVesselsLocalizerType): void {
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(type);
  }
}
