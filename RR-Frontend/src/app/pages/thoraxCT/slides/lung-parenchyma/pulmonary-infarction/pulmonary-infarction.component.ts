import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LungParenchymaFindingUiModel } from '@models/thoraxCT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';
import { LungParenchymaLocalizationTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-localization-type.enum';
import { LungParenchymaFormTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/lung-parenchyma-form-type.enum';
import { LungParenchymaHelperService, LungParenchymaLargeLocalizerConfig } from '../lung-parenchyma-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { LungsSegmentsModel } from '@models/thoraxCT/ui/thorax/lungs-segments.model';
import { nameof } from 'ts-simple-nameof';
import { SimpleAnswerEnum } from '@enums/shared/simple-answer.enum';
import { PulmonaryInfarctionTypeEnum } from '@enums/thoraxCT/lung-parenchyma-focal/pulmonary-infarction-type.enum';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Component({
  selector: 'rr-pulmonary-infarction',
  templateUrl: './pulmonary-infarction.component.html',
  styleUrls: ['./pulmonary-infarction.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PulmonaryInfarctionComponent implements OnInit, OnDestroy {
  @Input() model: LungParenchymaFindingUiModel;
  localizerOpenSubscription: Subscription;

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  pulmonaryInfarctionTypeEnum = PulmonaryInfarctionTypeEnum;
  lungParenchymaLocalizationTypeEnum = LungParenchymaLocalizationTypeEnum;
  lungParenchymaFormTypeEnum = LungParenchymaFormTypeEnum;

  constructor(
    private lungParenchymaHelperService: LungParenchymaHelperService,
    private validationHelperService: ValidationHelperService,
    private enumMapper: EnumMapper
  ) {}

  ngOnInit() {
    this.isCMYesSubscription = this.lungParenchymaHelperService.isCM.subscribe(v => (this.isCMYes = v === SimpleAnswerEnum.Yes));
    this.localizerOpenSubscription = this.lungParenchymaHelperService.largeLocalizerOpen.subscribe(() => this.checkLocalizersErrors());
  }

  openLargeLocalizer(whichLocalizer: 'segments' | 'flaps', modelPropName: string) {
    this.lungParenchymaHelperService.largeLocalizerOpen.next(new LungParenchymaLargeLocalizerConfig(whichLocalizer, false, modelPropName));
  }

  clearSegmentalLocalizer() {
    this.model.mainCharacteristicsLungsSegmentsLocation = new LungsSegmentsModel();
    this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsSegmentsLocation));
  }

  clearFlapsLocalizer() {
    this.model.mainCharacteristicsLungsFlapsLocation = new LungsFlapsModel();
    this.validationHelperService.removeError(nameof<LungParenchymaFindingUiModel>(m => m.mainCharacteristicsLungsFlapsLocation));
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
    this.isCMYesSubscription.unsubscribe();
    this.localizerOpenSubscription.unsubscribe();
  }
}
