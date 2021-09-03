import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IndicationFindingUiModel } from '@models/neckMRT/ui/indication/indication-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import {
  IndicationTypeEnum,
  GoiterTypeEnum,
  MetabolismTypeEnum,
  AbscessTypeEnum,
  ArterialPathologyTypeEnum
} from '@enums/neckMRT/indication';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { values } from 'lodash';

@Component({
  selector: 'rr-indication-fiding',
  templateUrl: './indication-fiding.component.html',
  styleUrls: ['../indication.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class IndicationFidingComponent implements OnInit, OnDestroy {
  @Input() model: IndicationFindingUiModel;
  @Input() header: string;

  tumorEntitySub: Subscription;
  tumorEntityOptions: DropdownModel[];

  detailsSub: Subscription;
  detailsOptions: DropdownModel[];

  indicationType = IndicationTypeEnum;
  goiterType = GoiterTypeEnum;
  metabolismType = MetabolismTypeEnum;
  abscessType = AbscessTypeEnum;
  arterialPathologyType = ArterialPathologyTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initTranslations();
  }

  ngOnDestroy(): void {
    this.tumorEntitySub.unsubscribe();
  }

  private initTranslations(): void {
    this.tumorEntitySub = this.translate
      .stream('neckMRT.indication.tumorEntityDropdown.options')
      .subscribe((out: DropdownModel[]) => (this.tumorEntityOptions = values(out)));
    this.detailsSub = this.translate
      .stream('neckMRT.indication.detailsDropdown.options')
      .subscribe((out: DropdownModel[]) => (this.detailsOptions = values(out)));
  }

  get isHoarsenessOrLymphadenopathyOrStagingOrFollowUp(): boolean {
    return [
      IndicationTypeEnum.Hoarseness,
      IndicationTypeEnum.Lymphadenopathy,
      IndicationTypeEnum.Staging,
      IndicationTypeEnum.FollowUp
    ].includes(this.model.indicationType);
  }

  get isRecurrentLaryngealOrVenousThrombosis(): boolean {
    return [IndicationTypeEnum.RecurrentLaryngealNerveParalysis, IndicationTypeEnum.VenousThrombosis].includes(this.model.indicationType);
  }

  get isPostoperativeImagingOrStatusPostTrauma(): boolean {
    return [IndicationTypeEnum.PostoperativeImaging, IndicationTypeEnum.StatusPostTrauma].includes(this.model.indicationType);
  }
}
