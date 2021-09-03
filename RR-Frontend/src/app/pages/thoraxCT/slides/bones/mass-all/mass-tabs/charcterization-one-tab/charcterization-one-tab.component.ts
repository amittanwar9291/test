import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BonesFindingUiModel } from '@models/thoraxCT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { HomogeneityTypeEnum } from '@enums/thoraxCT/bones/homogeneity-type.enum';
import { CorticalBoneTypeEnum } from '@enums/thoraxCT/bones/cortical-bone-type.enum';
import { FormTypeEnum } from '@enums/thoraxCT/bones/form-type.enum';
import { DensityTypeEnum } from '@enums/thoraxCT/bones/density-type.enum';
import { MatrixTypeEnum } from '@enums/thoraxCT/bones/matrix-type.enum';
import { ThoraxBonesFindingsTypeEnum } from '@enums/thoraxCT/bones/thorax-bones-findings-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { BonesHelperService, largeLocalizers } from '../../../bones-helper.service';
import { compact, isUndefined, isNull } from 'lodash';
import { DiscGeneralLocationModel } from '@models/shared/spine/localizers/disc-general-location.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BonesDifferentialDiagnosisTypeEnum } from '@enums/thoraxCT/bones/bones-differential-diagnosis-type.enum';

@Component({
  selector: 'rr-charcterization-one-tab',
  templateUrl: './charcterization-one-tab.component.html',
  styleUrls: ['./charcterization-one-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharcterizationOneTabComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  ddW052: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  thoraxBonesFindingsTypeEnum = ThoraxBonesFindingsTypeEnum;
  bonesDifferentialDiagnosisTypeEnum = BonesDifferentialDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  corticalBoneTypeEnum = CorticalBoneTypeEnum;
  formTypeEnum = FormTypeEnum;
  densityTypeEnum = DensityTypeEnum;
  matrixTypeEnum = MatrixTypeEnum;
  locationTypeEnum = LocationTypeEnum;
  largeLocalizers = largeLocalizers;
  spineSelectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  constructor(
    private translate: TranslateService,
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('thoraxCT.bones.differentialDiagnoseW052.options').subscribe((out: DropdownGroupedModel[]) => {
        this.ddW052 = this.model.findingType === ThoraxBonesFindingsTypeEnum.MassSpine ? out : this.removeSchmorlsNodeDiagnosis(out);
      })
    );
    this.subscriptions.push(
      this.bonesHelperService.isLargeLocalizerOpened.subscribe(() =>
        this.checkAndClearLocalizers(this.bonesHelperService.previousSpineLocalizerSelection)
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  openLargeLocalizer(localizerType: largeLocalizers): void {
    this.bonesHelperService.previousSpineLocalizerSelection = this.enumMapper.mapToString(this.model.vertebralColumnLocalization);
    this.bonesHelperService.isLargeLocalizerOpened.next(localizerType);
  }

  disabledDiscLocalizer(): boolean {
    return compact(Object.values(this.model.vertebralColumnLocalization)).length > 0;
  }

  private checkAndClearLocalizers(previousSpineLocalizerSelection) {
    this.bonesHelperService.previousSpineLocalizerSelection = this.enumMapper.mapToString(this.model.vertebralColumnLocalization);
    const currentSpineLocalizerSelection: string = this.enumMapper.mapToString(this.model.vertebralColumnLocalization);
    const constPreviousSpineLocalizerSelection = previousSpineLocalizerSelection;
    if (
      !isUndefined(constPreviousSpineLocalizerSelection) &&
      !isNull(constPreviousSpineLocalizerSelection) &&
      currentSpineLocalizerSelection !== constPreviousSpineLocalizerSelection
    ) {
      this.model.vertebralBodyLocalization = new DiscGeneralLocationModel();
    }
    if (compact(Object.values(this.model.ribLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.ribLocation));
    }
    if (compact(Object.values(this.model.vertebralColumnLocalization)).length !== 0) {
      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.vertebralColumnLocalization));
    }
  }

  checkAndClearTwoAndThree() {
    if (!this.model.sizeInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    }
  }

  checkAndClearThree() {
    if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }

  removeSchmorlsNodeDiagnosis(options: DropdownGroupedModel[]): DropdownGroupedModel[] {
    return options.map((grouped: DropdownGroupedModel) => ({
      label: grouped.label,
      items: grouped.items.filter((item: DropdownModel) => item.value !== this.bonesDifferentialDiagnosisTypeEnum.SchmorlsNode)
    }));
  }

  clearDDCheckboxes() {
    this.model.isSuspected = false;
    this.model.isSubordinated = false;
  }
}
