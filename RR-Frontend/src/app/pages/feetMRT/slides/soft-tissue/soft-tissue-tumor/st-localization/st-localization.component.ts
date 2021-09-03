import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DetailTypeEnum, DifferentialDiagnosisEnum } from '@enums/feetMRT/soft-tissue';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ComplexLocalizerData } from '../../../bones/bones-helper.service';
import { SoftTissueHelperService } from '../../soft-tissue-helper.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { HistologyKnownTypeEnum } from '@enums/feetMRT/soft-tissue/histology-known-type.enum';

@Component({
  selector: 'rr-st-localization',
  templateUrl: './st-localization.component.html',
  styleUrls: ['./st-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StLocalizationComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;
  localizationSideSubsription: Subscription;
  largeLocalizerOpenSubscription: Subscription;
  side: 'right' | 'left';

  translationSubscriptions: Subscription[] = [];
  differentialDiagnosis: DropdownModel[];

  detailTypeEnum: typeof DetailTypeEnum;
  descriptionTypeEnum: typeof DescriptionTypeEnum;
  histologyKnownTypeEnum: typeof HistologyKnownTypeEnum;

  constructor(
    private softTissueHelperService: SoftTissueHelperService,
    private enumMapper: EnumMapper,
    private validationHelperService: ValidationHelperService,
    private translate: TranslateService
  ) {
    this.localizationSideSubsription = this.softTissueHelperService.localizationSide.subscribe(
      value => (this.side = value as 'right' | 'left')
    );

    this.detailTypeEnum = DetailTypeEnum;
    this.descriptionTypeEnum = DescriptionTypeEnum;
    this.histologyKnownTypeEnum = HistologyKnownTypeEnum;
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
      this.translate.stream('feetMRT.softTissue.differentialDiagnosisList3.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosis = Object.keys(out).map(e => out[e]);
      })
    );
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

  clearSubordinated() {
    this.model.isSubordinated = false;
  }
}
