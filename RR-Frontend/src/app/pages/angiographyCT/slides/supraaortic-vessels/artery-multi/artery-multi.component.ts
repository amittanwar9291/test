import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SupraaorticVesselsFindingUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { SupraaorticVesselsHelperService, SupraaorticVesselsLoclizerType } from '../supraaortic-vessels-helper.service';
import { SupraaorticVesselsFindingTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/supraaortic-vessels-finding-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { AffectedBranchTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/affected-branch-type.enum';
import { PathologyTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/pathology-type.enum';
import { SeverityTypeEnum } from '@enums/shared/angiography/severity-type.enum';
import { FormTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/form-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/differential-diagnosis-type.enum';
import { ShapeTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/shape-type.enum';
import { SubarachnoidHemorrhageTypeEnum } from '@enums/shared/angiography/supraaortic-vessels/subarachnoid-hemorrhage-type.enum';
import { Subscription } from 'rxjs';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-artery-multi',
  templateUrl: './artery-multi.component.html',
  styleUrls: ['./artery-multi.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArteryMultiComponent implements OnInit {
  @Input() model: SupraaorticVesselsFindingUiModel;
  @Input() isCMYes: boolean;

  supraaorticVesselsLoclizerType = SupraaorticVesselsLoclizerType;

  supraaorticVesselsFindingTypeEnum = SupraaorticVesselsFindingTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  affectedBranchTypeEnum = AffectedBranchTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;
  severityTypeEnum = SeverityTypeEnum;
  formTypeEnum = FormTypeEnum;
  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;
  subarachnoidHemorrhageTypeEnum = SubarachnoidHemorrhageTypeEnum;

  bigLocalizerOpenSubscription: Subscription;

  constructor(
    private supraaorticVesselsHelperService: SupraaorticVesselsHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper,
    private toastMessageService: ToastMessageService
  ) {}

  ngOnInit() {
    this.bigLocalizerOpenSubscription = this.supraaorticVesselsHelperService.isLargeLocalizerOpened.subscribe(() => {
      const selection = this.enumMapper.mapToString(this.model.affectedSegmentsOrVesselsLocation);
      if (selection !== 'None') {
        this.validationHelperService.removeError(nameof<SupraaorticVesselsFindingUiModel>(m => m.affectedSegmentsOrVesselsLocation));
      }
    });
  }

  isFindingType(findings: SupraaorticVesselsFindingTypeEnum[]) {
    return findings.includes(this.model.findingType);
  }

  openLargeLocalizer(type: SupraaorticVesselsLoclizerType) {
    this.supraaorticVesselsHelperService.isLargeLocalizerOpened.next(type);
  }

  calculate() {
    const A = this.model.diameterDiseaseFreePoststenoticSegment;
    const B = this.model.diameterStenosis;
    if (A && B && Number.isInteger(A) && Number.isInteger(B)) {
      const baseCalculation = Math.round(((A - B) / A) * 100);
      if (baseCalculation > 0 && baseCalculation < 100) {
        this.model.degreeOfStenosisCalculatedInNASCET = baseCalculation;
        this.validationHelperService.removeError(nameof<SupraaorticVesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCET));
      } else {
        this.model.degreeOfStenosisCalculatedInNASCET = null;
        this.toastMessageService.showErrorToast('errors.angiographyCT.nascetCalculation', null);
      }
    } else {
      this.model.degreeOfStenosisCalculatedInNASCET = null;
      this.validationHelperService.removeError(nameof<SupraaorticVesselsFindingUiModel>(m => m.degreeOfStenosisCalculatedInNASCET));
    }
  }
}
