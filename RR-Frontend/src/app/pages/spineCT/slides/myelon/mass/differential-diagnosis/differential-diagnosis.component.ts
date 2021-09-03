import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MyelonFindingUiModel } from '@models/spineCT';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { MyelonDifferentialDiagnoseTypeEnum } from '@enums/spineCT/myelon/myelon-differential-diagnose-type.enum';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/spineCT/myelon/contrast-enhancement-quantitative-type.enum';
import { HomogeneityTypeEnum } from '@enums/spineCT/myelon/homogeneity-type.enum';
import { ContrastEnhancementDistributionTypeEnum } from '@enums/spineCT/myelon/contrast-enhancement-distribution-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineCtHelperService } from '@services/spineCT/spine-ct-helper.service';
import { SpineCTMyelonHelperService } from '../../spine-ct-myelon-helper.service';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: MyelonFindingUiModel;

  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementDistributionTypeEnum = ContrastEnhancementDistributionTypeEnum;
  myelonDifferentialDiagnoseTypeEnum = MyelonDifferentialDiagnoseTypeEnum;

  w013DifferentialDiagnose1: DropdownGroupedModel[];
  w014DifferentialDiagnose2: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];
  spineLocalizerPermittedSelection: SpineLocation;
  isCMYes: boolean;

  constructor(
    private translate: TranslateService,
    private spineCtHelperService: SpineCtHelperService,
    private spineCTMyelonHelperService: SpineCTMyelonHelperService
  ) {}

  ngOnInit(): void {
    this.initTranslations();
    this.subscriptions.push(
      this.spineCtHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
    this.subscriptions.push(this.spineCTMyelonHelperService.isCMYes.subscribe(v => (this.isCMYes = v)));
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('spineCT.myelonSpinalCanal.w013DifferentialDiagnose1.options').subscribe((out: DropdownGroupedModel[]) => {
        this.w013DifferentialDiagnose1 = out;
      }),
      this.translate.stream('spineCT.myelonSpinalCanal.w014DifferentialDiagnose2.options').subscribe((out: DropdownGroupedModel[]) => {
        this.w014DifferentialDiagnose2 = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  isCMQuantitativeNotWeakOrSignificant(): boolean {
    return (
      this.model.contrastEnhancementQuantitativeType !== ContrastEnhancementQuantitativeTypeEnum.Weak &&
      this.model.contrastEnhancementQuantitativeType !== ContrastEnhancementQuantitativeTypeEnum.Significant
    );
  }

  checkAndClearLocalizer() {
    if (!this.model.isDifferentialDiagnosisAbove1LesionOfTheSameEntity) {
      this.model.differentialDiagnosisAbove1LesionLocations = new SpineLocation();
    }
  }

  onDiagnosis1Change(): void {
    this.model.isSuspicionOf = false;
    this.model.isSubordinate = false;
  }

  openLargeLocalizer(): void {
    this.spineCTMyelonHelperService.largeLocalizerConfig.next({
      logicType: SpineLocationLogicTypeEnum.VertebreEach,
      model: this.model.differentialDiagnosisAbove1LesionLocations,
      localizationDescription: 'spineCT.myelonSpinalCanal.pleaseSelectAVertebra.value'
    });
  }
}
