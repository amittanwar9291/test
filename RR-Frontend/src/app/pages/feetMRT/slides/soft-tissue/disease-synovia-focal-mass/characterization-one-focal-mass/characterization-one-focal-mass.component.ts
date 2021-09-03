import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DifferentialDiagnosisEnum, DiseaseOfTheSynoviaEnum, QuantitativeTypeEnum } from '@enums/feetMRT/soft-tissue';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { FootBigTendonsModel } from '@models/feetMRT/ui/localizers/foot-big-tendons.model';
import { FootBigModel } from '@models/feetMRT/ui/localizers/foot-big.model';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ComplexLocalizerData } from '../../../bones/bones-helper.service';
import { SoftTissueHelperService } from '../../soft-tissue-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { HistologyKnownTypeEnum } from '@enums/feetMRT/soft-tissue/histology-known-type.enum';
import { SynoviaFormTypeEnum } from '@enums/feetMRT/soft-tissue/synoviaFocal/synovia-form-type.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-characterization-one-focal-mass',
  templateUrl: './characterization-one-focal-mass.component.html',
  styleUrls: ['./characterization-one-focal-mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CharacterizationOneFocalMassComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;
  localizationSideSubscription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  side: 'right' | 'left';
  isContrastMediumType: boolean;
  isContrastMediumTypeSubscription: Subscription;
  translationSubscriptions: Subscription[] = [];
  differentialDiagnosisW027: DropdownModel[];

  diseaseOfTheSynovia: DiseaseOfTheSynoviaEnum;

  descriptionTypeEnum: typeof DescriptionTypeEnum;
  diseaseOfTheSynoviaEnum: typeof DiseaseOfTheSynoviaEnum;
  quantitativeTypeEnum: typeof QuantitativeTypeEnum;
  histologyKnownTypeEnum: typeof HistologyKnownTypeEnum;
  synoviaFormType: typeof SynoviaFormTypeEnum;

  constructor(
    private softTissueHelperService: SoftTissueHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService,
    private translate: TranslateService
  ) {
    this.localizationSideSubscription = this.softTissueHelperService.localizationSide.subscribe(
      value => (this.side = value as 'right' | 'left')
    );

    this.isContrastMediumTypeSubscription = this.softTissueHelperService.isContrastMediumType.subscribe(
      value => (this.isContrastMediumType = value)
    );

    this.descriptionTypeEnum = DescriptionTypeEnum;
    this.diseaseOfTheSynoviaEnum = DiseaseOfTheSynoviaEnum;
    this.quantitativeTypeEnum = QuantitativeTypeEnum;
    this.histologyKnownTypeEnum = HistologyKnownTypeEnum;
    this.synoviaFormType = SynoviaFormTypeEnum;
  }

  ngOnInit() {
    this.largeLocalizerOpenSubscription = this.softTissueHelperService.largeLocalizerOpen.subscribe(() => {
      if (this.enumMapper.mapToString(this.model.threeDimensionalLocalization) !== 'None') {
        this.validationHelperService.removeError('threeDimensionalLocalization');
      }
    });

    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('feetMRT.softTissue.differentialDiagnosis5.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisW027 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.localizationSideSubscription.unsubscribe();
    this.largeLocalizerOpenSubscription.unsubscribe();
    this.isContrastMediumTypeSubscription.unsubscribe();
  }

  openLargeLocalizerJoints() {
    this.softTissueHelperService.largeLocalizerOpen.next(
      new ComplexLocalizerData(ComplexLocalizersTypes.bigFootJointsLocalizer, 'multi', 'L005', false, false, [
        'footBigLocalizer.titleIntraArticular'
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
      this.model.signalT1w = 0;
      this.model.signalT2w = 0;
      this.model.isBloomingArtifact = false;
      this.model.differentialDiagnosis = DifferentialDiagnosisEnum.None;
      this.model.quantitativeType = QuantitativeTypeEnum.None;
      this.diseaseOfTheSynovia = val;
    }
  }

  clearDiagnosis2() {
    this.model.isSubordinated = false;
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
