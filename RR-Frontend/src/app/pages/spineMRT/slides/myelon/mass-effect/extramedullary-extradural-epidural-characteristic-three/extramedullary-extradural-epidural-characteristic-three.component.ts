import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { MyelonSpineDirectionalLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-directional-localizer-options.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { Subscription } from 'rxjs';
import { AdditionalExtensionTypeEnum } from '@enums/spineMRT/myelon/additional-extension-type.enum';

@Component({
  selector: 'rr-extramedullary-extradural-epidural-characteristic-three',
  templateUrl: './extramedullary-extradural-epidural-characteristic-three.component.html',
  styleUrls: ['./extramedullary-extradural-epidural-characteristic-three.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ExtramedullaryExtraduralEpiduralCharacteristicThreeComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUIModel;

  @Output() emitSpineComplexLocalizer = new EventEmitter<MyelonSpineComplexLocalizerOptions>();
  @Output() emitSpineDirectionalLocalizer = new EventEmitter<MyelonSpineDirectionalLocalizerOptions>();

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

  openSpineComplexLocalizer() {
    this.emitSpineComplexLocalizer.emit(
      new MyelonSpineComplexLocalizerOptions(
        SpineLocationLogicTypeEnum.VertebreEach,
        'spineMRT.spinalCanal.localizationNonTargetLesions.value',
        'spineMRT.spinalCanal.selectVertebraMultiple.value',
        true
      )
    );
  }

  openSpineDirectionalLocalizer(isDiscs?: boolean) {
    this.emitSpineDirectionalLocalizer.emit(
      new MyelonSpineDirectionalLocalizerOptions('spineMRT.spinalCanal.selectRightOrLeftSideMultiple.value', isDiscs)
    );
  }

  resetSpineLocationNonTargetLocalizer() {
    this.model.spineLocationNonTarget = new SpineLocation();
  }

  resetSpineLocationDisksLocalizer() {
    this.model.spineLocationDisks = new SpineDirectionalLocation();
  }

  resetSpineLocationBonesLocalizer() {
    this.model.spineLocationBones = new SpineDirectionalLocation();
  }

  resetSpineLocationDisksDirectionalLocalizer() {
    this.model.spineLocationDisks = new SpineDirectionalLocation();
  }
}
