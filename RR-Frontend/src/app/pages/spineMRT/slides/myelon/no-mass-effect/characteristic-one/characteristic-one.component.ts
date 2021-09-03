import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { PialTypeEnum } from '@enums/spineMRT/myelon/pial-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineMRT/myelon/homogeneity-type.enum';
import { SpinalCanalDifferentialDiagnosisTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-differential-diagnosis-type.enum';
import { LocalizationInTheSpinalCordTypeEnum } from '@enums/spineMRT/myelon/localization-in-the-spinal-cord-type.enum';
import { QuantityTransverseTypeEnum } from '@enums/spineMRT/myelon/quantity-transverse-type.enum';
import { LongitudinalExpansionInMyelonEnum } from '@enums/spineMRT/myelon/longitudinal-expansion-in-myelon.enum';
import { ContrastEnhancementTypeEnum } from '@enums/spineMRT/myelon/contrast-enhancement-type.enum';

@Component({
  selector: 'rr-characteristic-one',
  templateUrl: './characteristic-one.component.html',
  styleUrls: ['./characteristic-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacteristicOneComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUIModel;
  @Input('diffDiagnosisNonSpaceDemandingOptions1') set _diffDiagnosisNonSpaceDemandingOptions1(value: DropdownGroupedModel[]) {
    this.diffDiagnosisNonSpaceDemandingOptions1 = value;
    this.differentialDiagnosis1WithoutEpendymoma = value ? this.removeEpendymomaMyxopapillaryOption(value) : null;
  }
  @Input() isCMReinforcedTypeYes: boolean;
  @Input() diffDiagnosisNonSpaceDemandingOptions2: DropdownGroupedModel[];

  @Output() emitLocalizer = new EventEmitter<MyelonSpineComplexLocalizerOptions>();

  spinalCanalDifferentialDiagnosisTypeEnum = SpinalCanalDifferentialDiagnosisTypeEnum;
  descriptionTypeEnum = DescriptionTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  pialTypeEnum = PialTypeEnum;
  localizationInTheSpinalCordTypeEnum = LocalizationInTheSpinalCordTypeEnum;
  quantityTransverseTypeEnum = QuantityTransverseTypeEnum;
  longitudinalExpansionInMyelonEnum = LongitudinalExpansionInMyelonEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;

  differentialDiagnosis1WithoutEpendymoma: DropdownGroupedModel[];
  diffDiagnosisNonSpaceDemandingOptions1: DropdownGroupedModel[];

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper,
    private spineHelperService: SpineHelperService
  ) {}

  ngOnInit() {
    const numberOfSelectedSpineLocationElements = compact(Object.values(this.model.spineLocation)).length;

    if (numberOfSelectedSpineLocationElements === 0) {
      this.model.longitudinalExpansionInMyelon = this.longitudinalExpansionInMyelonEnum.None;
    } else {
      this.validationHelperService.removeError(nameof<MyelonFindingUIModel>(m => m.spineLocation));
      if (numberOfSelectedSpineLocationElements <= 2) {
        this.model.longitudinalExpansionInMyelon = this.longitudinalExpansionInMyelonEnum.LessOrEqual2Segments;
      } else {
        this.model.longitudinalExpansionInMyelon = this.longitudinalExpansionInMyelonEnum.MoreThan2Segments;
      }
    }

    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.emitLocalizer.emit(
      new MyelonSpineComplexLocalizerOptions(
        SpineLocationLogicTypeEnum.VertebreRange,
        'spineMRT.spinalCanal.localizationCranialCaudalLimitation.value',
        'spineMRT.spinalCanal.selectTopAndBottomVertebra.value'
      )
    );
  }

  clearSubordinated() {
    this.model.isSecondary = false;
  }

  getPresetParams(): HttpParams {
    return new HttpParams().set('spinalCanalLocation', this.enumMapper.mapToString(this.model.spinalCanalLocation));
  }

  getDiagnosisOptions(): DropdownGroupedModel[] {
    if (!this.isLWSSelected()) {
      return this.differentialDiagnosis1WithoutEpendymoma;
    }
    return this.diffDiagnosisNonSpaceDemandingOptions1;
  }

  isLWSSelected(toOsSacrum?: boolean): boolean {
    const { l1, l2, l3, l4, l5, osSacrum, osCoccygis } = this.model.spineLocation;
    const isL1toOsSacrum = l1 || l2 || l3 || l4 || l5 || osSacrum;
    return toOsSacrum ? isL1toOsSacrum : isL1toOsSacrum || osCoccygis;
  }

  removeEpendymomaMyxopapillaryOption(arr: DropdownGroupedModel[]): DropdownGroupedModel[] {
    return arr.map((grouped: DropdownGroupedModel) => ({
      label: grouped.label,
      items: grouped.items.filter(
        (item: DropdownModel) => item.value !== this.spinalCanalDifferentialDiagnosisTypeEnum.EpendymomaMyxopapillaryType
      )
    }));
  }
}
