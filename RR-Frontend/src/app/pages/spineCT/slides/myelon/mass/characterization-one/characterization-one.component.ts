import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MyelonFindingUiModel } from '@models/spineCT';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { Subscription } from 'rxjs/internal/Subscription';
import { nameof } from 'ts-simple-nameof';
import { SpineCTMyelonHelperService } from '../../spine-ct-myelon-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { CharacterizationTypeEnum } from '@enums/spineCT/myelon/characterization-type.enum';
import { MarginTypeEnum } from '@enums/spineCT/myelon/margin-type.enum';
import { MyelonSpinalCanalDensityTypeEnum } from '@enums/spineCT/myelon/myelon-spinal-canal-density-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'rr-characterization-one',
  templateUrl: './characterization-one.component.html',
  styleUrls: ['./characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUiModel;
  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;

  characterizationTypeEnum = CharacterizationTypeEnum;
  myelonSpinalCanalDensityTypeEnum = MyelonSpinalCanalDensityTypeEnum;
  marginTypeEnum = MarginTypeEnum;

  constructor(
    private spineCTMyelonHelperService: SpineCTMyelonHelperService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
    this.subscriptions.push(
      this.spineCTMyelonHelperService.largeLocalizerConfig.subscribe(() => {
        if (this.enumMapper.mapToString(this.model.spineLocation) !== 'None') {
          this.validationHelperService.removeError(nameof<MyelonFindingUiModel>(m => m.spineLocation));
        }
        if (this.enumMapper.mapToString(this.model.localizationTopOrBottomVertebra) !== 'None') {
          this.validationHelperService.removeError(nameof<MyelonFindingUiModel>(m => m.localizationTopOrBottomVertebra));
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clear2ndAnd3rdPlane() {
    if (!this.model.expansionMaxDiameterInMm) {
      this.model.expansion2ndPlaneInMm = null;
      this.model.expansion3rdPlaneInMm = null;
    }
  }

  clear3rdPlane() {
    if (!this.model.expansion2ndPlaneInMm) {
      this.model.expansion3rdPlaneInMm = null;
    }
  }

  openLargeLocalizer(): void {
    this.spineCTMyelonHelperService.largeLocalizerConfig.next({
      title: 'spineCT.myelonSpinalCanal.localizationtopbottomVertebra.value',
      logicType: SpineLocationLogicTypeEnum.VertebreRange,
      model: this.model.localizationTopOrBottomVertebra,
      localizationDescription: 'spineCT.myelonSpinalCanal.pleaseSelectTheTopAndBottomVertebra.value'
    });
  }
}
