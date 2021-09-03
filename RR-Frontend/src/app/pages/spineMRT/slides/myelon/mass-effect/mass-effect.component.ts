import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { MyelonSpineDirectionalLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-directional-localizer-options.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { findingBaseProperties } from '@models/shared/finding/finding-omitted-properties.const';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SpinalCanalLocation } from '@models/shared/spine/localizers/spinal-canal-location.model';

@Component({
  selector: 'rr-mass-effect',
  templateUrl: './mass-effect.component.html',
  styleUrls: ['./mass-effect.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassEffectComponent implements OnInit, OnDestroy {
  constructor(private validationHelperService: ValidationHelperService, private spineHelperService: SpineHelperService) {}
  @Input() model: MyelonFindingUIModel;
  @Input() isCMReinforcedTypeYes: boolean;
  @Input() activeTabIndex: number;
  @Input() differentialDiagnosisSpaceDemandingIntramedullaryOptions1: DropdownGroupedModel[];
  @Input() differentialDiagnosisSpaceDemandingIntramedullaryOptions2: DropdownGroupedModel[];
  @Input() differentialDiagnosisSpaceDemandingExtramedullaryOptions1: DropdownGroupedModel[];
  @Input() differentialDiagnosisSpaceDemandingExtramedullaryOptions2: DropdownGroupedModel[];
  @Input() differentialDiagnosisSpaceDemandingEpiduralOptions1: DropdownGroupedModel[];
  @Input() differentialDiagnosisSpaceDemandingEpiduralOptions2: DropdownGroupedModel[];
  @Input() differentialDiagnosisSpaceDemandingExtraduralOptions1: DropdownGroupedModel[];
  @Input() differentialDiagnosisSpaceDemandingExtraduralOptions2: DropdownGroupedModel[];

  @Output() emitSpineComplexLocalizer = new EventEmitter<MyelonSpineComplexLocalizerOptions>();
  @Output() emitSpineDirectionalLocalizer = new EventEmitter<MyelonSpineDirectionalLocalizerOptions>();
  @Output() activeTabIndexUpdate = new EventEmitter<number>();

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;
  selectTopAndBottomVertebra;

  ngOnInit() {
    if (compact(Object.values(this.model.spineLocation)).length !== 0) {
      this.validationHelperService.removeError(nameof<MyelonFindingUIModel>(m => m.spineLocation));
    }
    this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.emitSpineComplexLocalizer.emit(
      new MyelonSpineComplexLocalizerOptions(
        SpineLocationLogicTypeEnum.VertebreRange,
        'spineMRT.spinalCanal.localizationCranialCaudalLimitation.value',
        'spineMRT.spinalCanal.selectTopAndBottomVertebra.value'
      )
    );
  }
  resetModel() {
    const clearedModel = new MyelonFindingUIModel();
    [
      nameof<MyelonFindingUIModel>(m => m.spineLocation),
      nameof<MyelonFindingUIModel>(m => m.spinalCanalLocation),
      ...findingBaseProperties
    ].forEach(e => delete clearedModel[e]);

    Object.assign(this.model, clearedModel);
  }

  getDiagnosisOptions(diagnosisIndex: number): DropdownGroupedModel[] {
    const selectedSpinalCanalLocation = Object.keys(this.model.spinalCanalLocation).find(el => this.model.spinalCanalLocation[el]);

    switch (selectedSpinalCanalLocation) {
      case nameof<SpinalCanalLocation>(m => m.intramedullary):
        return diagnosisIndex === 1
          ? this.differentialDiagnosisSpaceDemandingIntramedullaryOptions1
          : this.differentialDiagnosisSpaceDemandingIntramedullaryOptions2;
      case nameof<SpinalCanalLocation>(m => m.extramedullary):
        return diagnosisIndex === 1
          ? this.differentialDiagnosisSpaceDemandingExtramedullaryOptions1
          : this.differentialDiagnosisSpaceDemandingExtramedullaryOptions2;
      case nameof<SpinalCanalLocation>(m => m.epidural):
        return diagnosisIndex === 1
          ? this.differentialDiagnosisSpaceDemandingEpiduralOptions1
          : this.differentialDiagnosisSpaceDemandingEpiduralOptions2;
      case nameof<SpinalCanalLocation>(m => m.extradural):
        return diagnosisIndex === 1
          ? this.differentialDiagnosisSpaceDemandingExtraduralOptions1
          : this.differentialDiagnosisSpaceDemandingExtraduralOptions2;
    }
  }

  isIntramedullary(): boolean {
    return this.model.spinalCanalLocation.intramedullary;
  }

  isExtramedullaryExtraduralEpidural(): boolean {
    return (
      this.model.spinalCanalLocation.extramedullary || this.model.spinalCanalLocation.extradural || this.model.spinalCanalLocation.epidural
    );
  }

  isNoSpinalCanalSelected(): boolean {
    return (
      !this.model.spinalCanalLocation.intramedullary &&
      !this.model.spinalCanalLocation.extramedullary &&
      !this.model.spinalCanalLocation.extradural &&
      !this.model.spinalCanalLocation.epidural
    );
  }

  activeTabIndexChange(event: number) {
    this.activeTabIndexUpdate.emit(event);
  }
}
