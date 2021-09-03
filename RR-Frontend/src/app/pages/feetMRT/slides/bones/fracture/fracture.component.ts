import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesFindingUiModel } from '@models/feetMRT/ui/bones/bones-finding-ui.model';
import { Subscription } from 'rxjs';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-fracture',
  templateUrl: 'fracture.component.html',
  styleUrls: ['./fracture.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FractureComponent implements OnDestroy, OnInit {
  @Input() model: BonesFindingUiModel;
  localizationSideSubsription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  side: 'right' | 'left';

  constructor(
    private bonesHelperService: BonesHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.side = 'left';
    this.localizationSideSubsription = this.bonesHelperService.localizationSide.subscribe(value => (this.side = value as 'right' | 'left'));
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
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootBonesLocalizer, 'single', 'L005', true, true)
    );
  }

  isPickedArea(...areas): boolean {
    let isPickedGivenArea;
    const { threeDimensionalLocalization } = this.model;
    const pickedArea = Object.keys(threeDimensionalLocalization).filter(key => threeDimensionalLocalization[key])[0];
    if (pickedArea) {
      isPickedGivenArea = areas.map(area => pickedArea.includes(area));
    }
    return isPickedGivenArea && isPickedGivenArea.filter(area => area).length;
  }

  localizerEmpty(): boolean {
    return !Object.values(this.model.threeDimensionalLocalization).filter(value => value).length;
  }
}
