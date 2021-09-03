import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DetailTypeEnum } from '@enums/feetMRT/soft-tissue';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { Subscription } from 'rxjs';
import { ComplexLocalizerData } from '../../bones/bones-helper.service';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-abscess',
  templateUrl: './abscess.component.html',
  styleUrls: ['./abscess.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AbscessComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;
  localizationSideSubsription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  side: 'right' | 'left';

  detailTypeEnum: typeof DetailTypeEnum;
  isLocalizationSelected: boolean;

  constructor(
    private softTissueHelperService: SoftTissueHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.localizationSideSubsription = this.softTissueHelperService.localizationSide.subscribe(
      value => (this.side = value as 'right' | 'left')
    );
    this.detailTypeEnum = DetailTypeEnum;
  }

  ngOnInit() {
    this.largeLocalizerOpenSubscription = this.softTissueHelperService.largeLocalizerOpen.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.threeDimensionalLocalization) !== 'None') {
        this.validationHelperService.removeError('threeDimensionalLocalization');
        this.isLocalizationSelected = true;
      } else {
        this.isLocalizationSelected = false;
        this.clearDetails();
      }
    });
  }

  ngOnDestroy() {
    this.localizationSideSubsription.unsubscribe();
    this.largeLocalizerOpenSubscription.unsubscribe();
  }

  openLargeLocalizer() {
    this.softTissueHelperService.largeLocalizerOpen.next(
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootBonesLocalizer, 'single', 'L005', false, false, [
        'feetMRT.softTissue.centerOfTheLesionProjection1.value',
        'feetMRT.softTissue.centerOfTheHematomaProjection2.value'
      ])
    );
  }

  clearDetails() {
    this.model.detailType = DetailTypeEnum.None;
    this.model.detailMaxDiameterInMm = null;
  }
}
