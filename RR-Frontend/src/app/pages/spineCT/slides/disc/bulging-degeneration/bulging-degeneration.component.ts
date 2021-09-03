import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DiscFindingUiModel } from '@models/spineCT';
import { ControlContainer, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DiscHelperService, SpineCTLargeLocalizerConfig } from '../disc-helper.service';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { nameof } from 'ts-simple-nameof';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { compact } from 'lodash';
import { BulgingDetailsTypeEnum } from '@enums/spineCT/disc/bulging-details-type.enum';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { NerveRootAffectionTypeEnum } from '@enums/spineCT/disc/nerve-root-affection-type.enum';
import { StenosisTypeEnum } from '@enums/spineCT/disc/stenosis-type.enum';

@Component({
  selector: 'rr-bulging-degeneration',
  templateUrl: './bulging-degeneration.component.html',
  styleUrls: ['./bulging-degeneration.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BulgingDegenerationComponent implements OnInit, OnDestroy {
  @Input() model: DiscFindingUiModel;

  largeLocalizerOpenedSubscription: Subscription;
  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  bulgingDetailsTypeEnum = BulgingDetailsTypeEnum;
  sideTypeEnum = SideTypeEnum;
  nerveRootAffectionTypeEnum = NerveRootAffectionTypeEnum;
  stenosisTypeEnum = StenosisTypeEnum;

  constructor(
    private discHelperService: DiscHelperService,
    private spineCtHelperService: SpineCtHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit(): void {
    this.largeLocalizerOpenedSubscription = this.discHelperService.largeLocalizerOpenedConfig.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.spineLocation) !== 'None') {
        this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.spineLocation));
      }
      if (!this.isSingleSelectOnLocalizer()) {
        this.clearDependElements();
      }
    });
    this.spineLocalizerPermittedSelectionSubscription = this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(
      v => (this.spineLocalizerPermittedSelection = v)
    );
  }

  ngOnDestroy() {
    this.largeLocalizerOpenedSubscription.unsubscribe();
    this.spineLocalizerPermittedSelectionSubscription.unsubscribe();
  }

  openLocalizer() {
    this.discHelperService.largeLocalizerOpenedConfig.next(
      new SpineCTLargeLocalizerConfig(
        SpineLocationLogicTypeEnum.DiscEach,
        'spineCT.disc.pleaseSelectIntervertebralDiscMultipleChoice.value'
      )
    );
  }

  isSingleSelectOnLocalizer(): boolean {
    return compact(Object.values(this.model.spineLocation)).length === 1;
  }

  isBuggingDetailsVisible(): boolean {
    return this.isSingleSelectOnLocalizer() && this.model.isBulging;
  }

  clearDependElements() {
    this.model.bulgingDetailsType = BulgingDetailsTypeEnum.None;
    this.model.sideType = SideTypeEnum.None;
    this.model.nerveRootAffectionType = NerveRootAffectionTypeEnum.None;
    this.model.isNerveRootAffectionRight = false;
    this.model.isNerveRootAffectionLeft = false;
    this.model.stenosisType = StenosisTypeEnum.None;
    this.model.isStenosisRight = false;
    this.model.isStenosisLeft = false;
    this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.sideType));
    this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.isNerveRootAffectionRight));
    this.validationHelperService.removeError(nameof<DiscFindingUiModel>(m => m.isStenosisRight));
  }
}
