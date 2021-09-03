import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungSectionTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-section-type.enum';
import { TotalAtelectasisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/total-atelectasis-type.enum';
import { LungParenchymaFormTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-form-type.enum';
import { PeculiaritySegmentatelectasisTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/peculiarity-segmentatelectasis-type.enum';
import { LungParenchymaHelperService, LungParenchymaLargeLocalizerConfig } from '../lung-parenchyma-helper.service';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';

@Component({
  selector: 'rr-atelectasis',
  templateUrl: './atelectasis.component.html',
  styleUrls: ['./atelectasis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AtelectasisComponent implements OnInit, OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;
  localizerOpenSubscription: Subscription;

  lungSectionTypeEnum = LungSectionTypeEnum;
  sideTypeEnum = LocationTypeEnum;
  lungParenchymaFormTypeEnum = LungParenchymaFormTypeEnum;
  peculiaritySegmentatelectasisTypeEnum = PeculiaritySegmentatelectasisTypeEnum;

  constructor(
    private lungParenchymaHelperService: LungParenchymaHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.localizerOpenSubscription = this.lungParenchymaHelperService.largeLocalizerOpen.subscribe(() => this.checkLocalizersErrors());
  }

  openLargeLocalizer(whichLocalizer: 'segments' | 'flaps', modelPropName: string) {
    this.lungParenchymaHelperService.largeLocalizerOpen.next(new LungParenchymaLargeLocalizerConfig(whichLocalizer, true, modelPropName));
  }

  clearFlapsLocalizer() {
    this.model.mainCharacteristicsLungsFlapsLocation = new LungsFlapsModel();
    this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation));
  }

  clearSegmentalLocalizer() {
    this.model.mainCharacteristicsLungsSegmentsLocation = new LungsSegmentsModel();
    this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation));
  }

  private checkLocalizersErrors() {
    if (this.enumMapper.mapToString(this.model?.mainCharacteristicsLungsFlapsLocation) !== 'None') {
      this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation));
    }
    if (this.enumMapper.mapToString(this.model?.mainCharacteristicsLungsSegmentsLocation) !== 'None') {
      this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation));
    }
  }

  ngOnDestroy() {
    this.localizerOpenSubscription.unsubscribe();
  }
}
