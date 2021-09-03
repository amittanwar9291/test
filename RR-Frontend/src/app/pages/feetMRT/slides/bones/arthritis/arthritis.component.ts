import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import {
  ComplexLocalizersTypes,
  DifferentialDiagnosisTypes,
  EnflammatoryBoneMarrowEdemaLocalizationTypes,
  ErosionsLocalizationTypes,
  IntensityTypes
} from '@models/feetMRT/ui/bones/bones.enum';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { Subscription } from 'rxjs';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { IntensityTypeEnum } from '@enums/feetMRT/bones';

@Component({
  selector: 'rr-arthritis',
  templateUrl: './arthritis.component.html',
  styleUrls: ['./arthritis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ArthritisComponent implements OnDestroy, OnInit {
  @Input() model: BonesFindingUiModel;
  helperServiceSubsriptions: Subscription[] = [];
  side: 'right' | 'left';
  isCMYes: boolean;
  intensityType: typeof IntensityTypeEnum;

  readonly erosionsLocalizationTypes = ErosionsLocalizationTypes;
  readonly enflammatoryBoneMarrowEdemaLocalizationTypes = EnflammatoryBoneMarrowEdemaLocalizationTypes;
  readonly differentialDiagnosisTypes = DifferentialDiagnosisTypes;
  readonly intensityTypes = IntensityTypes;

  constructor(
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.initializeEnums();
    this.helperServiceSubsriptions.push(
      this.bonesHelperService.localizationSide.subscribe(value => (this.side = value as 'right' | 'left'))
    );
    this.helperServiceSubsriptions.push(this.bonesHelperService.isCMYes.subscribe(value => (this.isCMYes = value)));
  }

  initializeEnums(): void {
    this.intensityType = IntensityTypeEnum;
  }

  ngOnInit() {
    this.helperServiceSubsriptions.push(
      this.bonesHelperService.largeLocalizerOpen.subscribe(() => {
        if (this.enumMapper.mapToString(this.model.threeDimensionalLocalization) !== 'None') {
          this.validationHelperService.removeError('threeDimensionalLocalization');
        }
      })
    );
  }

  ngOnDestroy() {
    this.helperServiceSubsriptions.forEach(sub => sub.unsubscribe());
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData(ComplexLocalizersTypes.bigFootJointsLocalizer, 'multi'));
  }
}
