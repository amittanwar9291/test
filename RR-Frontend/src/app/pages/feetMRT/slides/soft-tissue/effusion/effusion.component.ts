import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DimensionTypeEnum, QualityTypeEnum } from '@enums/feetMRT/soft-tissue';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { FormValidationService } from '@services/shared/validation/form-validation.service';
import { Subscription } from 'rxjs';
import { ComplexLocalizerData } from '../../bones/bones-helper.service';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-effusion',
  templateUrl: './effusion.component.html',
  styleUrls: ['./effusion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class EffusionComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;
  localizationSideSubscription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  side: 'right' | 'left';

  dimensionTypeEnum: typeof DimensionTypeEnum;
  qualityTypeEnum: typeof QualityTypeEnum;

  constructor(
    private softTissueHelperService: SoftTissueHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.localizationSideSubscription = this.softTissueHelperService.localizationSide.subscribe(
      value => (this.side = value as 'right' | 'left')
    );

    this.dimensionTypeEnum = DimensionTypeEnum;
    this.qualityTypeEnum = QualityTypeEnum;
  }

  ngOnInit() {
    this.largeLocalizerOpenSubscription = this.softTissueHelperService.largeLocalizerOpen.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.threeDimensionalLocalization) !== 'None') {
        this.validationHelperService.removeError('threeDimensionalLocalization');
      }
    });
  }

  ngOnDestroy() {
    this.localizationSideSubscription.unsubscribe();
    this.largeLocalizerOpenSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.softTissueHelperService.largeLocalizerOpen.next(
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootJointsLocalizer, 'multi', 'L005', false)
    );
  }

  isSingleChoice(): boolean {
    const { threeDimensionalLocalization } = this.model;
    const pickedAreas = Object.keys(threeDimensionalLocalization).filter(key => threeDimensionalLocalization[key]).length;

    if (pickedAreas === 1) {
      return true;
    } else {
      this.model.dimensionType = this.dimensionTypeEnum.None;
      this.model.qualityType = this.qualityTypeEnum.None;
      this.model.isExtravasationArticularEffusion = false;
      this.model.isFreeJointBody = false;
      this.model.freeJointBodyDiameterInMm = null;
      return false;
    }
  }
}
