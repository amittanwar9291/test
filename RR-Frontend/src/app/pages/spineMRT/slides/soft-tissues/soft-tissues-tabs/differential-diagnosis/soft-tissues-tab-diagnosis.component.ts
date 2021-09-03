import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { NeurofibromatosisTypeEnum, SoftTissueDiagnosisTypeEnum, SoftTissueFindingTypeEnum } from '@enums/spineMRT/soft-tissues';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SpineDirectionalLocation } from '@models/shared/spine/localizers/spine-directional-location.model';
import { SpineLocation } from '@models/shared/spine/localizers/spine-location.model';

import { SoftTissuesFindingUiModel } from '@models/spineMRT/ui/soft-tissues/soft-tissues-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SpineLocationLogicTypeEnum } from '@enums/shared/spine/spine-location-logic-type.enum';
import { SpineSoftTissueLocalizerConfig } from '@models/spineMRT/ui/soft-tissues/spine-soft-tissue-localizer-config';
import { SpineHelperService } from '@services/spineMRT/spine-helper.service';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-spine-mrt-soft-tissues-tab-diagnosis',
  templateUrl: './soft-tissues-tab-diagnosis.component.html',
  styleUrls: ['./soft-tissues-tab-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SoftTissuesTabDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissuesFindingUiModel;
  @Output() emitLocalizer = new EventEmitter<SpineSoftTissueLocalizerConfig>();

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions1: DropdownModel[];
  differentialDiagnosisOptions2: DropdownModel[];

  softTissueFindingTypeEnum: typeof SoftTissueFindingTypeEnum = SoftTissueFindingTypeEnum;
  softTissueDiagnosisTypeEnum: typeof SoftTissueDiagnosisTypeEnum = SoftTissueDiagnosisTypeEnum;
  neurofibromatosisTypeEnum: typeof NeurofibromatosisTypeEnum = NeurofibromatosisTypeEnum;

  spineLocalizerPermittedSelectionSubscription: Subscription;
  spineLocalizerPermittedSelection: SpineLocation;

  constructor(private translate: TranslateService, private spineHelperService: SpineHelperService) {}

  ngOnInit(): void {
    this.initTranslations();

    this.subscriptions.push(
      (this.spineLocalizerPermittedSelectionSubscription = this.spineHelperService.spineLocalizerPermittedSelection.subscribe(
        v => (this.spineLocalizerPermittedSelection = v)
      ))
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(item => item.unsubscribe());
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

  disabledDiagnosis(): boolean {
    return this.model.descriptionType === 'IKnow';
  }

  openLargeLocalizer(
    isSides,
    sidesLocalizerModel?: SpineDirectionalLocation,
    sidesLocalizerModelProp?: string,
    isDiscLocalization?: boolean
  ) {
    let spineSoftTissueLocalizerConfig: SpineSoftTissueLocalizerConfig;

    if (!isSides) {
      this.model.spineLocationShown = !this.model.spineLocationShown;

      spineSoftTissueLocalizerConfig = new SpineSoftTissueLocalizerConfig(
        this.model.spineLocation2,
        SpineLocationLogicTypeEnum.VertebreEach,
        'spineMRT.softTissues.localizationNontargetLesionsNoBreak.value',
        'spineMRT.softTissues.selectVertebraMultiple.value',
        nameof<SoftTissuesFindingUiModel>(m => m.spineLocation2),
        null
      );
    } else {
      this.model.directionalLocationShown = !this.model.directionalLocationShown;
      spineSoftTissueLocalizerConfig = new SpineSoftTissueLocalizerConfig(
        sidesLocalizerModel,
        null,
        null,
        'spineMRT.softTissues.selectRightOrLeftMultiple.value',
        sidesLocalizerModelProp,
        isDiscLocalization
      );
    }

    this.emitLocalizer.emit(spineSoftTissueLocalizerConfig);
  }

  getDiagnosisType(): DropdownModel[] {
    return this.model.findingType === this.softTissueFindingTypeEnum.ParaspinalMass
      ? this.differentialDiagnosisOptions1
      : this.differentialDiagnosisOptions2;
  }

  clearDifferentialDiagnosis() {
    this.model.isSecondary = false;
  }

  clearLocalizer(triggerCheckbox: string, localizer: string, isStandard?: boolean) {
    if (!this.model[triggerCheckbox]) {
      this.model[localizer] = isStandard ? new SpineLocation() : new SpineDirectionalLocation();
    }
  }
}
