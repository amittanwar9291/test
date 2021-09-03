import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';
import { MyelonFindingUIModel } from '@models/spineMRT/ui/myelon/myelon-finding-ui.model';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { MyelonSpineComplexLocalizerOptions } from '@models/spineMRT/ui/myelon/localizer-options/myelon-spine-complex-localizer-options.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpinalCanalStenosisDetailTypeEnum } from '@enums/spineMRT/myelon/spinal-canal-stenosis-detail-type.enum';

@Component({
  selector: 'rr-spinalkanalstenose',
  templateUrl: './spinalkanalstenose.component.html',
  styleUrls: ['./spinalkanalstenose.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SpinalkanalstenoseComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUIModel;

  @Output() emitLocalizer = new EventEmitter<MyelonSpineComplexLocalizerOptions>();

  spinalCanalStenosisDetailTypeEnum = SpinalCanalStenosisDetailTypeEnum;

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

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
}
