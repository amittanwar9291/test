import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MyelonFindingUiModel } from '@models/spineCT';
import { HomogeneityTypeEnum } from '@enums/spineCT/myelon/homogeneity-type.enum';
import { MyelonSpinalCanalCalcificationTypeEnum } from '@enums/spineCT/myelon/myelon-spinal-canal-calcification-type.enum';
import { MyelonAffectionTypeEnum } from '@enums/spineCT/myelon/myelon-affection-type.enum';
import { SpineCTMyelonHelperService } from '../../spine-ct-myelon-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

@Component({
  selector: 'rr-characteriaztion-two',
  templateUrl: './characteriaztion-two.component.html',
  styleUrls: ['./characteriaztion-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacteriaztionTwoComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUiModel;

  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  homogeneityTypeEnum = HomogeneityTypeEnum;
  myelonSpinalCanalCalcificationTypeEnum = MyelonSpinalCanalCalcificationTypeEnum;
  myelonAffectionTypeEnum = MyelonAffectionTypeEnum;

  constructor(private spineCTMyelonHelperService: SpineCTMyelonHelperService, private spineCtHelperService: SpineCtHelperService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  openLargeLocalizer(localizer: string): void {
    this.spineCTMyelonHelperService.largeLocalizerConfig.next({
      isDirectional: true,
      model:
        localizer === 'NerveRootDisplacement'
          ? this.model.localizationOfNerveRootDisplacement
          : this.model.localizationOfNeuralForaminalWidening,
      localizationDescription: 'spineCT.myelonSpinalCanal.pleaseSelectTheNumberedNerve.value'
    });
  }

  clearNeuralForaminalWideningLocalizer() {
    this.model.localizationOfNeuralForaminalWidening = new SpineDirectionalLocation();
  }

  clearNerveRootDisplacementLocalizer() {
    this.model.localizationOfNerveRootDisplacement = new SpineDirectionalLocation();
  }
}
