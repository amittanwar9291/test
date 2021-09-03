import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import {
  ChronicThromboembolicTypeEnum,
  CurvatureOfInterventricularSeptumTypeEnum,
  LocalizationWithinVesselTypeEnum,
  MediastinumDifferentialDiagnosisTypeEnum
} from '@enums/thoraxMRT/mediastinum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LungsModel } from '@models/thoraxCT/ui/thorax/lungs.model';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { MediastinumLargeLocalizerConfigModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-large-localizer-config.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { MediastinumHelperService } from '../mediastinum-helper.service';

@Component({
  selector: 'rr-cardio-pulmonary-arteries',
  templateUrl: './cardio-pulmonary-arteries.component.html',
  styleUrls: ['./cardio-pulmonary-arteries.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class CardioPulmonaryArteriesComponent implements OnInit, OnDestroy {
  @Input() model: MediastinumFindingUiModel;

  subscriptions: Subscription[] = [];
  ddlW005: DropdownModel[];

  localizationWithinVesselTypeEnum = LocalizationWithinVesselTypeEnum;
  curvatureOfInterventricularSeptumTypeEnum = CurvatureOfInterventricularSeptumTypeEnum;
  chronicThromboembolicTypeEnum = ChronicThromboembolicTypeEnum;
  mediastinumDifferentialDiagnosisTypeEnum = MediastinumDifferentialDiagnosisTypeEnum;

  constructor(private translateService: TranslateService, private mediastinumHelperService: MediastinumHelperService) {}

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.mediastinum.W005.options').subscribe((out: DropdownModel[]) => {
        this.ddlW005 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  openLargeLocalizer(modelPropName: string) {
    this.mediastinumHelperService.largeLocalizerOpen.next(new MediastinumLargeLocalizerConfigModel(modelPropName));
  }

  clearLocalizer() {
    this.model.lungsLocation = new LungsModel();
  }

  isPulmonaryHypertensionGroup4(): boolean {
    return [this.model.diagnosisType1, this.model.diagnosisType2].includes(
      this.mediastinumDifferentialDiagnosisTypeEnum.PulmonaryHypertensionGroup4ChronicThromboembolicCteph
    );
  }

  clearDDLCheckboxes() {
    this.model.isSuspected = false;
    this.clearIsSubordinated();
  }

  clearIsSubordinated() {
    this.model.isSubordinated = false;
  }
}
