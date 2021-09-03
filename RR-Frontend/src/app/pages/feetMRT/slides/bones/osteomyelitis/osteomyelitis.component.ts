import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { Subscription } from 'rxjs';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { OsteomyelitisDifferentialDiagnosisTypeEnum, StageTypeEnum } from '@enums/feetMRT/bones/osteomyelitis';

@Component({
  selector: 'rr-osteomyelitis',
  templateUrl: './osteomyelitis.component.html',
  styleUrls: ['./osteomyelitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteomyelitisComponent implements OnDestroy, OnInit {
  localizationSideSubsription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  side: 'right' | 'left';
  isCmYes: boolean;

  @Input() model: BonesFindingUiModel;

  stageTypeEnum: typeof StageTypeEnum;
  osteomyelitisDifferentialDiagnosisTypeEnum: typeof OsteomyelitisDifferentialDiagnosisTypeEnum;

  constructor(
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.initializeEnums();

    this.localizationSideSubsription = this.bonesHelperService.localizationSide.subscribe(value => (this.side = value as 'right' | 'left'));
    this.isCmYes = this.bonesHelperService.isCMYes.value;
  }

  initializeEnums() {
    this.stageTypeEnum = StageTypeEnum;
    this.osteomyelitisDifferentialDiagnosisTypeEnum = OsteomyelitisDifferentialDiagnosisTypeEnum;
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
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootBonesLocalizer, 'multi', 'L005', false, true)
    );
  }
}
