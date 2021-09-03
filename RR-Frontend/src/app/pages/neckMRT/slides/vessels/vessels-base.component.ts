import { Input, OnInit } from '@angular/core';
import { ExtentTypeEnum, PathologyTypeEnum } from '@enums/neckMRT/vessels';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

export class VesselsBaseComponent implements OnInit {
  @Input() model: VesselsFindingUiModel;

  previousExtentType: ExtentTypeEnum;
  isContrastEnhanced: boolean;

  constructor(
    private toastMessageService: ToastMessageService,
    private translate: TranslateService,
    public validationHelperService: ValidationHelperService
  ) {}

  get isPathologyTypeNone(): boolean {
    return this.model.pathologyType === PathologyTypeEnum.None;
  }

  ngOnInit(): void {
    this.previousExtentType = this.model.extentType;
  }

  calculateDegreeOfStenosisInPercent(): void {
    const A = this.model.diameterStenosisInMm;
    const B = this.model.diameterDiseaseFreePoststenoticSegmentInMm;

    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((B - A) / B) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisInPercent = baseCalculation;
        this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent));
      } else {
        this.model.degreeOfStenosisInPercent = null;
        this.toastMessageService.showErrorToast('errors.neckMRT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisInPercent = null;
      this.validationHelperService.removeError(nameof<VesselsFindingUiModel>(m => m.degreeOfStenosisInPercent));
    }
  }

  resetExtentTypeBlock(): void {
    if (this.model.extentType !== this.previousExtentType) {
      this.model.isHemodynamicallyRelevant = false;
    }

    this.previousExtentType = this.model.extentType;
  }
}
