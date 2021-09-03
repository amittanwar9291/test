import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { Subscription } from 'rxjs';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { HomogeneityTypeEnum } from '@enums/spineMRT/myelon/homogeneity-type.enum';
import { ContrastEnhancementTypeEnum } from '@enums/spineMRT/myelon/contrast-enhancement-type.enum';
import { AdditionalExtensionTypeEnum } from '@enums/spineMRT/myelon/additional-extension-type.enum';

@Component({
  selector: 'rr-intramedullary-characteristic-two',
  templateUrl: './intramedullary-characteristic-two.component.html',
  styleUrls: ['./intramedullary-characteristic-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IntramedullaryCharacteristicTwoComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUIModel;
  @Input() isCMReinforcedTypeYes: boolean;

  @Output() emitLocalizer = new EventEmitter<MyelonSpineComplexLocalizerOptions>();

  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;
  additionalExtensionTypeEnum = AdditionalExtensionTypeEnum;

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
}
