import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { Subscription } from 'rxjs';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { FormValidationService } from '@services/shared/validation/form-validation.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { OsteochondralLesionClassificationTypeEnum } from '@enums/feetMRT/bones/osteochondral-lesion/osteochondral-lesion-classification-type.enum';
import { DetectionDissekatTypeEnum } from '@enums/feetMRT/bones/osteochondral-lesion/detection-dissekat-type.enum';
import { EpiphysealJointsTypeEnum } from '@enums/feetMRT/bones/osteochondral-lesion/epiphyseal-joints-type.enum';

@Component({
  selector: 'rr-osteochondral-lesion',
  templateUrl: './osteochondral-lesion.component.html',
  styleUrls: ['./osteochondral-lesion.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteochondralLesionComponent implements OnDestroy, OnInit {
  @Input() model: BonesFindingUiModel;
  localizationSideSubsription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  side: 'right' | 'left';

  osteochondralLesionClassificationType: typeof OsteochondralLesionClassificationTypeEnum;
  detectionDissekatType: typeof DetectionDissekatTypeEnum;
  epiphysealJointsType: typeof EpiphysealJointsTypeEnum;

  constructor(
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.localizationSideSubsription = this.bonesHelperService.localizationSide.subscribe(value => (this.side = value as 'right' | 'left'));
    this.osteochondralLesionClassificationType = OsteochondralLesionClassificationTypeEnum;
    this.detectionDissekatType = DetectionDissekatTypeEnum;
    this.epiphysealJointsType = EpiphysealJointsTypeEnum;
  }

  ngOnInit() {
    this.largeLocalizerOpenSubscription = this.bonesHelperService.largeLocalizerOpen.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.threeDimensionalLocalization) !== 'None') {
        this.validationHelperService.removeError('threeDimensionalLocalization');
      }
    });
  }

  ngOnDestroy() {
    this.localizationSideSubsription.unsubscribe();
    this.largeLocalizerOpenSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootBonesLocalizer, 'single', 'L006', false)
    );
  }
}
