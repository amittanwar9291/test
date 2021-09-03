import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { Subscription } from 'rxjs';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { FormValidationService } from '@services/shared/validation/form-validation.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { RadioulnarSynostosisTypeEnum, StandardVariantTypeEnum, SynarthrosisTypeEnum } from '@enums/feetMRT/bones/standard-variant';
import { FootThreeSidesViewModel } from '@models/feetMRT/ui/localizers/foot-three-sides-view.model';

@Component({
  selector: 'rr-standard-variant',
  templateUrl: './standard-variant.component.html',
  styleUrls: ['./standard-variant.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StandardVariantComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  isLargeLocalizerOpenedSubscription: Subscription;
  standardVariantType: typeof StandardVariantTypeEnum;
  radioulnarSynostosisType: typeof RadioulnarSynostosisTypeEnum;
  synarthrosisType: typeof SynarthrosisTypeEnum;

  constructor(
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.standardVariantType = StandardVariantTypeEnum;
    this.radioulnarSynostosisType = RadioulnarSynostosisTypeEnum;
    this.synarthrosisType = SynarthrosisTypeEnum;
  }

  ngOnInit(): void {
    this.isLargeLocalizerOpenedSubscription = this.bonesHelperService.largeLocalizerOpen.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.footThreeSidesLocalization) !== 'None') {
        this.validationHelperService.removeError('footThreeSidesLocalization');
      }
    });
  }

  resetRadioulnarSynostosisBlock(value: RadioulnarSynostosisTypeEnum) {
    return value !== this.model.radioulnarSynostosisType ? 'radioulnarSynostosisBlock' : '';
  }

  resetCoalitionBlock(value: StandardVariantTypeEnum) {
    return value !== this.model.standardVariantType ? 'coalitionBlock' : '';
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData(ComplexLocalizersTypes.threeSidesLocalizer));
  }

  ngOnDestroy() {
    this.isLargeLocalizerOpenedSubscription.unsubscribe();
  }

  clearLocalizer() {
    this.model.footThreeSidesLocalization = new FootThreeSidesViewModel();
  }
}
