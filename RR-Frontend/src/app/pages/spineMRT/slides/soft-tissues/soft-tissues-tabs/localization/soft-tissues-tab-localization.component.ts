import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ContrastEnhancementTypeEnum, HomogeneityTypeEnum, SoftTissueFindingTypeEnum } from '@enums/spineMRT/soft-tissues';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SpineSoftTissueLocalizerConfig } from '@models/spineMRT/ui/soft-tissues/spine-soft-tissue-localizer-config';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { nameof } from 'ts-simple-nameof';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';

@Component({
  selector: 'rr-spine-mrt-soft-tissues-tab-localization',
  templateUrl: './soft-tissues-tab-localization.component.html',
  styleUrls: ['./soft-tissues-tab-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissuesTabLocalizationComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissuesFindingUiModel;
  @Input() isCMYes: boolean;
  @Output() emitLocalizer = new EventEmitter<SpineSoftTissueLocalizerConfig>();

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions1: DropdownModel[];
  differentialDiagnosisOptions2: DropdownModel[];

  softTissueFindingTypeEnum: typeof SoftTissueFindingTypeEnum = SoftTissueFindingTypeEnum;
  homogeneityTypeEnum: typeof HomogeneityTypeEnum = HomogeneityTypeEnum;
  contrastEnhancementTypeEnum: typeof ContrastEnhancementTypeEnum = ContrastEnhancementTypeEnum;

  spineLocalizerPermittedSelection: SpineLocation;

  constructor(private translate: TranslateService, private spineHelperService: SpineHelperService) {}

  ngOnInit(): void {
    this.initTranslations();
    this.subscriptions.push(
      this.spineHelperService.spineLocalizerPermittedSelection.subscribe(v => (this.spineLocalizerPermittedSelection = v))
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  isContrastTypePowerfulOrWeak(): boolean {
    return [this.contrastEnhancementTypeEnum.Powerful, this.contrastEnhancementTypeEnum.Weak].includes(this.model.contrastEnhancementType);
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translate.stream('spineMRT.softTissues.differentialDiagnosisOptions1.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions1 = Object.values(out);
      })
    );

    this.subscriptions.push(
      this.translate.stream('spineMRT.softTissues.differentialDiagnosisOptions2.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosisOptions2 = Object.values(out);
      })
    );
  }

  clearDifferentialDiagnosis() {
    this.model.isSecondary = false;
    this.model.spineLocationBones = new SpineDirectionalLocation();
    this.model.spineLocation2 = new SpineLocation();
  }

  openLargeLocalizer(isSides: boolean) {
    let spineSoftTissueLocalizerConfig: SpineSoftTissueLocalizerConfig;
    if (!isSides) {
      this.model.spineLocationShown = !this.model.spineLocationShown;
      spineSoftTissueLocalizerConfig = new SpineSoftTissueLocalizerConfig(
        this.model.spineLocation1,
        SpineLocationLogicTypeEnum.VertebreEach,
        'spineMRT.softTissues.localization.value',
        'spineMRT.softTissues.selectVertebraMultiple.value',
        nameof<SoftTissuesFindingUiModel>(m => m.spineLocation1),
        null
      );
    } else {
      this.model.directionalLocationShown = !this.model.directionalLocationShown;
      spineSoftTissueLocalizerConfig = new SpineSoftTissueLocalizerConfig(
        this.model.spineLocationDisks1,
        null,
        null,
        'spineMRT.softTissues.selectRightOrLeftMultiple.value',
        nameof<SoftTissuesFindingUiModel>(m => m.spineLocationDisks1),
        true
      );
    }
    this.emitLocalizer.emit(spineSoftTissueLocalizerConfig);
  }

  disabledDiagnosis(): boolean {
    return this.model.descriptionType !== DescriptionTypeEnum.IKnow;
  }

  maxInputValue(): number {
    return this.model.findingType === this.softTissueFindingTypeEnum.ParaspinalMass ? 40 : 50;
  }
}
