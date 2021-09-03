import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import {
  ContrastEnhancementQuantitativeTypeEnum,
  HistologySecuredTypeEnum,
  HomogeneityTypeEnum,
  InfiltrationPatternTypeEnum
} from '@enums/spineMRT/bones';
import { BonesDiagnosisTypeEnum } from '@enums/spineMRT/bones/bones-diagnosis-type.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { BonesFindingUiModel } from '@models/spineMRT/ui/bones/bones-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { BonesHelperService } from '../../bones-helper.service';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';
import { compact } from 'lodash';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-tumor-diffuse-characterization',
  templateUrl: './tumor-diffuse-characterization.component.html',
  styleUrls: ['./tumor-diffuse-characterization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TumorDiffuseCharacterizationComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Input() isCMYes: boolean;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions1: DropdownModel[];

  spineLocalizerPermittedSelection: SpineLocation;

  descriptionTypeEnum = DescriptionTypeEnum;
  histologySecuredTypeEnum = HistologySecuredTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  infiltrationPatternTypeEnum = InfiltrationPatternTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;
  bonesDiagnosisTypeEnum = BonesDiagnosisTypeEnum;

  constructor(
    private validationHelperService: ValidationHelperService,
    private translate: TranslateService,
    private bonesHelperService: BonesHelperService,
    private spineHelperService: SpineHelperService
  ) {}

  ngOnInit(): void {
    this.initTranslations();
    this.subscriptions.push(
      this.bonesHelperService.largeLocalizerOpenConfig.subscribe(value => {
        if (!value && compact(Object.values(this.model.spineLocation2)).length !== 0) {
          this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.spineLocation2));
        }
      })
    );
    this.subscriptions.push(
      this.spineHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineMRT.bones.differentialDiagnosisDiffuseOptions.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions1 = Object.values(out);
      })
    );
  }

  openLargeLocalizer(localizerModel: string) {
    this.bonesHelperService.largeLocalizerOpenConfig.next(
      new SpineBonesLocalizerConfig(localizerModel, SpineLocationLogicTypeEnum.VertebreEach, 'spineMRT.bones.selectVertebraMultiple.value')
    );
  }

  clearLocalizer() {
    this.model.spineLocation2 = new SpineLocation();
    this.validationHelperService.removeError('spineLocation2');
  }

  onDiagnosisChanged() {
    if (this.model.mainCharacteristicsDifferentialDiagnosis01 === BonesDiagnosisTypeEnum.None) {
      this.model.isHistologyProven = false;
      this.model.histologySecuredType = this.histologySecuredTypeEnum.None;
    }
  }
}
