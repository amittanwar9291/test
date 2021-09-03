import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MediastinumDifferentialDiagnosisTypeEnum } from '@enums/thoraxMRT/mediastinum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { MediastinumFindingUiModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-differential-diagnosis',
  templateUrl: './differential-diagnosis.component.html',
  styleUrls: ['./differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisComponent implements OnInit, OnDestroy {
  @Input() model: MediastinumFindingUiModel;

  mediastinumDiagnosisTypeEnum = MediastinumDifferentialDiagnosisTypeEnum;

  diagnosisDetailsConfig = {
    1: {
      headerID: 'tho_m_040365',
      headerTranslation: 'thoraxMRT.mediastinum.differentialDiagnosisDetails.value',
      noDetailsID: 'tho_m_040369',
      caudalExtensionHeaderID: 'tho_m_040366',
      caudalExtensionModelName: 'caudalExtensionInMmDiagnosis01',
      inputRrId: 'tho_m_040367',
      labelRrId: 'tho_m_040368'
    },
    2: {
      headerID: 'tho_m_040486',
      headerTranslation: 'thoraxMRT.mediastinum.differentialDiagnosisDetails2.value',
      noDetailsID: 'tho_m_040487',
      caudalExtensionHeaderID: 'tho_m_040488',
      caudalExtensionModelName: 'caudalExtensionInMmDiagnosis02',
      inputRrId: 'tho_m_040489',
      labelRrId: 'tho_m_040490'
    },
    3: {
      headerID: 'tho_m_040557',
      headerTranslation: 'thoraxMRT.mediastinum.differentialDiagnosisDetails3.value',
      noDetailsID: 'tho_m_040558',
      caudalExtensionHeaderID: 'tho_m_040559',
      caudalExtensionModelName: 'caudalExtensionInMmDiagnosis03',
      inputRrId: 'tho_m_040560',
      labelRrId: 'tho_m_040561'
    }
  };

  subscriptions: Subscription[] = [];
  ddlW008: DropdownModel[];
  ddlW009: DropdownModel[];

  constructor(private translateService: TranslateService) {}

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
      this.translateService.stream('thoraxMRT.mediastinum.W008.options').subscribe((out: DropdownModel[]) => {
        this.ddlW008 = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translateService.stream('thoraxMRT.mediastinum.W009.options').subscribe((out: DropdownModel[]) => {
        this.ddlW009 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  isDiagnosisChecked(key: number): boolean {
    switch (key) {
      case 1:
        return this.isDifferentialDiagnosis1Checked();
      case 2:
        return this.model.diagnosisType3 !== this.mediastinumDiagnosisTypeEnum.None;
      case 3:
        return this.model.diagnosisType4 !== this.mediastinumDiagnosisTypeEnum.None;
    }
  }

  isNoDetails(key: number): boolean {
    switch (key) {
      case 1:
        return ![this.model.diagnosisType1, this.model.diagnosisType2].includes(this.mediastinumDiagnosisTypeEnum.GoiterRetrosternal);
      case 2:
        return ![this.mediastinumDiagnosisTypeEnum.GoiterRetrosternal].includes(this.model.diagnosisType3);
      case 3:
        return ![this.mediastinumDiagnosisTypeEnum.GoiterRetrosternal].includes(this.model.diagnosisType4);
    }
  }

  isGoiterRetrosternal(key: number): boolean {
    switch (key) {
      case 1:
        return [this.model.diagnosisType1, this.model.diagnosisType2].includes(this.mediastinumDiagnosisTypeEnum.GoiterRetrosternal);
      case 2:
        return this.model.diagnosisType3 === this.mediastinumDiagnosisTypeEnum.GoiterRetrosternal;
      case 3:
        return this.model.diagnosisType4 === this.mediastinumDiagnosisTypeEnum.GoiterRetrosternal;
    }
  }

  isDifferentialDiagnosis1Checked(): boolean {
    return (
      this.model.diagnosisType1 !== this.mediastinumDiagnosisTypeEnum.None ||
      this.model.diagnosisType2 !== this.mediastinumDiagnosisTypeEnum.None
    );
  }

  clearDropdownCheckboxes() {
    this.model.isSubordinated = false;
    this.model.isSuspected = false;
    this.model.caudalExtensionInMmDiagnosis01 = null;
    this.model.caudalExtensionInMmDiagnosis02 = null;
    this.model.caudalExtensionInMmDiagnosis03 = null;
  }

  clearDDL2Details() {
    this.model.isSubordinated = false;
    this.model.caudalExtensionInMmDiagnosis02 = null;
    this.model.caudalExtensionInMmDiagnosis03 = null;
  }

  clearDDL3Details() {
    this.model.caudalExtensionInMmDiagnosis03 = null;
  }
}
