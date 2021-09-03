import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';

import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { MalformationTypeEnum } from '@enums/spineMRT/myelon/malformation-type.enum';
import { CharacterizationTypeEnum } from '@enums/spineMRT/myelon/characterization-type.enum';
import { CharacterizationOpenTypeEnum } from '@enums/spineMRT/myelon/characterization-open-type.enum';
import { LocalizationTypeEnum } from '@enums/spineMRT/myelon/localization-type.enum';
import { DetailsClosedDysraphismTypeEnum } from '@enums/spineMRT/myelon/details-closed-dysraphism-type.enum';
import { ClassificationSubcutaneousMassTypeEnum } from '@enums/spineMRT/myelon/classification-subcutaneous-mass-type.enum';
import { ClassificationDysraphyTypeEnum } from '@enums/spineMRT/myelon/classification-dysraphy-type.enum';
import { DifferentialDiagnosesTypeEnum } from '@enums/spineMRT/myelon/differential-diagnoses-type.enum';

@Component({
  selector: 'rr-development-disorder',
  templateUrl: './development-disorder.component.html',
  styleUrls: ['./development-disorder.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DevelopmentDisorderComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUIModel;

  @Output() emitLocalizer = new EventEmitter<MyelonSpineComplexLocalizerOptions>();

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  malformationTypeEnum = MalformationTypeEnum;
  characterizationTypeEnum = CharacterizationTypeEnum;
  characterizationOpenTypeEnum = CharacterizationOpenTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;
  detailsClosedDysraphismTypeEnum = DetailsClosedDysraphismTypeEnum;
  classificationSubcutaneousMassTypeEnum = ClassificationSubcutaneousMassTypeEnum;
  classificationDysraphyTypeEnum = ClassificationDysraphyTypeEnum;
  differentialDiagnosesTypeEnum = DifferentialDiagnosesTypeEnum;

  constructor(private validationHelperService: ValidationHelperService, private spineHelperService: SpineHelperService) {}

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
    this.emitLocalizer.emit(
      new MyelonSpineComplexLocalizerOptions(
        SpineLocationLogicTypeEnum.VertebreRange,
        'spineMRT.spinalCanal.localizationCranialCaudalLimitation.value',
        'spineMRT.spinalCanal.selectTopAndBottomVertebra.value'
      )
    );
  }

  resetLocalizer(selectedSpinalCanalStenosisType: MalformationTypeEnum) {
    if (this.model.malformationType !== selectedSpinalCanalStenosisType) {
      this.model.spineLocation = new SpineLocation();
      this.validationHelperService.removeError(nameof<MyelonFindingUIModel>(m => m.spineLocation));
    }
  }
}
