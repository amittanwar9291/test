import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MyelonFindingUiModel } from '@models/spineCT';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { nameof } from 'ts-simple-nameof';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SpineCTMyelonHelperService } from '../spine-ct-myelon-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpinalCanalStenosisDetailTypeEnum } from '@enums/spineCT/myelon/spinal-canal-stenosis-detail-type.enum';

@Component({
  selector: 'rr-spinal-canal-stenosis',
  templateUrl: './spinal-canal-stenosis.component.html',
  styleUrls: ['./spinal-canal-stenosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SpinalCanalStenosisComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUiModel;

  spinalCanalStenosisDetailTypeEnum = SpinalCanalStenosisDetailTypeEnum;

  subscriptions: Subscription[] = [];

  w011SpondylarthrosisDetails: DropdownModel[];
  w012AccordingToMeyerding: DropdownModel[];

  spineLocalizerPermittedSelection: SpineLocation;

  constructor(
    private translate: TranslateService,
    private spineCTMyelonHelperService: SpineCTMyelonHelperService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit(): void {
    this.initTranslation();
    this.subscriptions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
    this.subscriptions.push(
      this.spineCTMyelonHelperService.largeLocalizerConfig.subscribe(() => {
        if (this.enumMapper.mapToString(this.model.spineLocation) !== 'None') {
          this.validationHelperService.removeError(nameof<MyelonFindingUiModel>(m => m.spineLocation));
        }
      })
    );
  }

  private initTranslation(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.myelonSpinalCanal.w011SpondylarthrosisDetails.options').subscribe((out: DropdownModel[]) => {
        this.w011SpondylarthrosisDetails = out;
      }),
      this.translate.stream('spineCT.myelonSpinalCanal.w012AccordingToMeyerding.options').subscribe((out: DropdownModel[]) => {
        this.w012AccordingToMeyerding = out;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  openLargeLocalizer(): void {
    this.spineCTMyelonHelperService.largeLocalizerConfig.next({
      title: 'spineCT.myelonSpinalCanal.localization.value',
      logicType: SpineLocationLogicTypeEnum.DiscEachIntervertebre,
      model: this.model.spineLocation,
      localizationDescription: 'spineCT.myelonSpinalCanal.pleaseSelectTheIntervertebral.value'
    });
  }
}
