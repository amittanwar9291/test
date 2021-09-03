import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { Subscription } from 'rxjs';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { IntensityTypeEnum } from '@enums/feetMRT/bones';
import { ArticularSurfacesTypeEnum, OuterbridgeClassificationTypeEnum } from '@enums/feetMRT/bones/osteoarthrosis';

@Component({
  selector: 'rr-osteoarthrosis',
  templateUrl: './osteoarthritis.component.html',
  styleUrls: ['./osteoarthritis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteoarthritisComponent implements OnDestroy, OnInit {
  @Input() model: BonesFindingUiModel;
  localizationSideSubsription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  side: 'right' | 'left';
  intensityType: typeof IntensityTypeEnum;
  outerbridgeClassificationType: typeof OuterbridgeClassificationTypeEnum;
  articularSurfacesType: typeof ArticularSurfacesTypeEnum;

  constructor(
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.localizationSideSubsription = this.bonesHelperService.localizationSide.subscribe(value => (this.side = value as 'right' | 'left'));
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.intensityType = IntensityTypeEnum;
    this.outerbridgeClassificationType = OuterbridgeClassificationTypeEnum;
    this.articularSurfacesType = ArticularSurfacesTypeEnum;
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
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData(ComplexLocalizersTypes.bigFootJointsLocalizer, 'multi'));
  }

  isAreaPicked(): boolean {
    const { threeDimensionalLocalization } = this.model;
    const pickedArea = Object.keys(threeDimensionalLocalization).filter(key => threeDimensionalLocalization[key]).length === 1;
    if (!pickedArea) {
      this.model.isChondropathy = false;
      this.model.isChondrocalcinosis = false;
      this.model.isSynovialCyst = false;
      this.model.outerbridgeClassificationType = this.outerbridgeClassificationType.None;
      this.model.articularSurfacesType = this.articularSurfacesType.None;
      this.model.expansionLargestDiameterInMm = null;
    }
    return pickedArea;
  }
}
