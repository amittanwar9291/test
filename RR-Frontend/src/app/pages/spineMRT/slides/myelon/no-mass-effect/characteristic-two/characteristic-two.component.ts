import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { Subscription } from 'rxjs';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpinalCanalDifferentialDiagnosisTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-differential-diagnosis-type.enum';
import { AberrantCourseTypeEnum } from '@enums/spineMRT/myelon/aberrant-course-type.enum';

@Component({
  selector: 'rr-characteristic-two',
  templateUrl: './characteristic-two.component.html',
  styleUrls: ['./characteristic-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacteristicTwoComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUIModel;
  @Input('diffDiagnosisNonSpaceDemandingOptions1') set _diffDiagnosisNonSpaceDemandingOptions1(value: DropdownGroupedModel[]) {
    this.diffDiagnosisNonSpaceDemandingOptions1 = value;
    this.diffDiagnosisWithoutEpendymomaOptions1 = value ? this.removeEpendymomaMyxopapillaryOption(value) : null;
  }
  @Input('diffDiagnosisNonSpaceDemandingOptions2') set _diffDiagnosisNonSpaceDemandingOptions2(value: DropdownGroupedModel[]) {
    this.diffDiagnosisNonSpaceDemandingOptions2 = value;
    this.diffDiagnosisWithoutEpendymomaOptions2 = value ? this.removeEpendymomaMyxopapillaryOption(value) : null;
  }

  @Output() emitLocalizer = new EventEmitter<MyelonSpineComplexLocalizerOptions>();

  descriptionTypeEnum = DescriptionTypeEnum;
  spinalCanalDifferentialDiagnosisTypeEnum = SpinalCanalDifferentialDiagnosisTypeEnum;
  aberrantCourseTypeEnum = AberrantCourseTypeEnum;

  diffDiagnosisNonSpaceDemandingOptions1: DropdownGroupedModel[];
  diffDiagnosisNonSpaceDemandingOptions2: DropdownGroupedModel[];
  diffDiagnosisWithoutEpendymomaOptions1: DropdownGroupedModel[];
  diffDiagnosisWithoutEpendymomaOptions2: DropdownGroupedModel[];

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(private spineHelperService: SpineHelperService) {}

  ngOnInit() {
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
        SpineLocationLogicTypeEnum.VertebreEach,
        'spineMRT.spinalCanal.localizationNonTargetLesions.value',
        'spineMRT.spinalCanal.selectVertebraMultiple.value',
        true
      )
    );
  }

  resetLocalizer() {
    this.model.spineLocationNonTarget = new SpineLocation();
  }

  clearSubordinated() {
    this.model.isSecondary = false;
  }

  getDiagnosisOptions(set: 1 | 2): DropdownGroupedModel[] {
    if (!this.isLWSSelected()) {
      return set === 1 ? this.diffDiagnosisWithoutEpendymomaOptions1 : this.diffDiagnosisWithoutEpendymomaOptions2;
    }
    return set === 1 ? this.diffDiagnosisNonSpaceDemandingOptions1 : this.diffDiagnosisNonSpaceDemandingOptions2;
  }

  isLWSSelected(): boolean {
    const { l1, l2, l3, l4, l5, osSacrum, osCoccygis } = this.model.spineLocation;
    return l1 || l2 || l3 || l4 || l5 || osSacrum || osCoccygis;
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
