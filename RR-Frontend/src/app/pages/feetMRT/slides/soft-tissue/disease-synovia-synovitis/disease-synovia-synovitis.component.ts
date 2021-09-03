import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DiseaseOfTheSynoviaEnum } from '@enums/feetMRT/soft-tissue';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { FootBigTendonsModel } from '@models/feetMRT/ui/localizers/foot-big-tendons.model';
import { FootBigModel } from '@models/feetMRT/ui/localizers/foot-big.model';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { Subscription } from 'rxjs';
import { ComplexLocalizerData } from '../../bones/bones-helper.service';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-disease-synovia-synovitis',
  templateUrl: './disease-synovia-synovitis.component.html',
  styleUrls: ['./disease-synovia-synovitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiseaseSynoviaSynovitisComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;
  localizationSideSubscription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  isCMYesSubscription: Subscription;
  isCMYes: boolean;
  side: 'right' | 'left';
  diseaseOfTheSynovia: DiseaseOfTheSynoviaEnum;

  diseaseOfTheSynoviaEnum: typeof DiseaseOfTheSynoviaEnum;

  constructor(
    private softTissueHelperService: SoftTissueHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService
  ) {
    this.localizationSideSubscription = this.softTissueHelperService.localizationSide.subscribe(
      value => (this.side = value as 'right' | 'left')
    );
    this.isCMYesSubscription = this.softTissueHelperService.isCMYes.subscribe(value => (this.isCMYes = value));

    this.diseaseOfTheSynoviaEnum = DiseaseOfTheSynoviaEnum;
  }

  ngOnInit() {
    this.largeLocalizerOpenSubscription = this.softTissueHelperService.largeLocalizerOpen.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.threeDimensionalLocalization) !== 'None') {
        this.validationHelperService.removeError('threeDimensionalLocalization');
      }
    });

    this.diseaseOfTheSynovia = this.model.localizationOfTheSynoviaSynovitisType;
  }

  ngOnDestroy() {
    this.localizationSideSubscription.unsubscribe();
    this.largeLocalizerOpenSubscription.unsubscribe();
    this.isCMYesSubscription.unsubscribe();
  }

  openLargeLocalizerJoints() {
    this.softTissueHelperService.largeLocalizerOpen.next(
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootJointsLocalizer, 'multi', 'L005', false, false, [
        'feetMRT.softTissue.intraarticularLocalization.value'
      ])
    );
  }

  openLargeLocalizerTendons() {
    this.softTissueHelperService.largeLocalizerOpen.next(new ComplexLocalizerData(ComplexLocalizersTypes.bigFootTendonsLocalizer));
  }

  clearDiseaseOfTheSynoviaDetails(val: DiseaseOfTheSynoviaEnum) {
    if (val !== this.diseaseOfTheSynovia) {
      this.model.threeDimensionalLocalization = new FootBigModel();
      this.model.tendonsLocalization = new FootBigTendonsModel();
      this.model.isIntraarticular = false;
      this.model.isExtraarticular = false;
      this.diseaseOfTheSynovia = val;
    }
  }

  clearThreeDimensionalLocalizer(): void {
    this.model.threeDimensionalLocalization = new FootBigModel();
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.threeDimensionalLocalization));
  }

  clearTendonsLocalizer(): void {
    this.model.tendonsLocalization = new FootBigTendonsModel();
    this.validationHelperService.removeError(nameof<SoftTissueFindingUiModel>(m => m.tendonsLocalization));
  }
}
