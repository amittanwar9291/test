import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { MediastinumDiagnosisTypeEnum } from '@enums/thoraxCT/mediastinum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import { MediastinumFindingUiModel } from '@models/thoraxCT/ui/mediastinum/mediastinum-finding-ui.model';

@Component({
  selector: 'rr-differential-diagnosis-tab',
  templateUrl: './differential-diagnosis-tab.component.html',
  styleUrls: ['./differential-diagnosis-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DifferentialDiagnosisTabComponent {
  @Input() diagnosisList: DropdownModel[];
  @Input() extendedDiagnosisList: DropdownModel[];
  @Input() model: MediastinumFindingUiModel;

  mediastinumDiagnosisTypeEnum = MediastinumDiagnosisTypeEnum;

  diagnosisDetailsConfig = {
    1: {
      headerID: 'tho_c_040366',
      headerTranslation: 'thoraxCT.mediastinum.differentialDiagnosis1Details.value',
      noDetailsID: 'tho_c_0403109',
      caudalExtensionHeaderID: 'tho_c_040367',
      caudalExtensionModelName: 'caudalExtensionInMmDiagnosis01',
      inputRrId: 'tho_c_040368',
      labelRrId: 'tho_c_040369'
    },
    2: {
      headerID: 'tho_c_040455',
      headerTranslation: 'thoraxCT.mediastinum.differentialDiagnosis2Details.value',
      noDetailsID: 'tho_c_040456',
      caudalExtensionHeaderID: 'tho_c_040457',
      caudalExtensionModelName: 'caudalExtensionInMmDiagnosis02',
      inputRrId: 'tho_c_040458',
      labelRrId: 'tho_c_040459'
    },
    3: {
      headerID: 'tho_c_040531',
      headerTranslation: 'thoraxCT.mediastinum.differentialDiagnosis3Details.value',
      noDetailsID: 'tho_c_040532',
      caudalExtensionHeaderID: 'tho_c_040533',
      caudalExtensionModelName: 'caudalExtensionInMmDiagnosis03',
      inputRrId: 'tho_c_040534',
      labelRrId: 'tho_c_040535'
    }
  };

  isDiagnosisChecked(key: number): boolean {
    switch (key) {
      case 1:
        return this.isDifferentialDiagnosis1Checked();
      case 2:
        return this.model.differentialDiagnosis02 !== this.mediastinumDiagnosisTypeEnum.None;
      case 3:
        return this.model.differentialDiagnosis03 !== this.mediastinumDiagnosisTypeEnum.None;
    }
  }

  isNoDetails(key: number): boolean {
    switch (key) {
      case 1:
        return ![this.model.mainCharacteristicsDifferentialDiagnosis01, this.model.differentialDiagnosis01].includes(
          this.mediastinumDiagnosisTypeEnum.RetrosternalGoiter
        );
      case 2:
        return ![this.mediastinumDiagnosisTypeEnum.RetrosternalGoiter].includes(this.model.differentialDiagnosis02);
      case 3:
        return ![this.mediastinumDiagnosisTypeEnum.RetrosternalGoiter].includes(this.model.differentialDiagnosis03);
    }
  }

  isStrumaRetrosternal(key: number): boolean {
    switch (key) {
      case 1:
        return [this.model.mainCharacteristicsDifferentialDiagnosis01, this.model.differentialDiagnosis01].includes(
          this.mediastinumDiagnosisTypeEnum.RetrosternalGoiter
        );
      case 2:
        return this.model.differentialDiagnosis02 === this.mediastinumDiagnosisTypeEnum.RetrosternalGoiter;
      case 3:
        return this.model.differentialDiagnosis03 === this.mediastinumDiagnosisTypeEnum.RetrosternalGoiter;
    }
  }

  isDifferentialDiagnosis1Checked(): boolean {
    return (
      this.model.mainCharacteristicsDifferentialDiagnosis01 !== this.mediastinumDiagnosisTypeEnum.None ||
      this.model.differentialDiagnosis01 !== this.mediastinumDiagnosisTypeEnum.None
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
    this.model.caudalExtensionInMmDiagnosis02 = null;
    this.model.caudalExtensionInMmDiagnosis03 = null;
    this.model.isSubordinated = false;
  }

  clearDDL3Details() {
    this.model.caudalExtensionInMmDiagnosis03 = null;
  }
}
