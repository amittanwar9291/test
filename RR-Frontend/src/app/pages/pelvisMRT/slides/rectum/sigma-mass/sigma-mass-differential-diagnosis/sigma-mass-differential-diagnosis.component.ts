import { Component, Input } from '@angular/core';
import { RectumFindingUiModel } from '@models/pelvisMRT/ui/rectum/rectum-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { DifferentialDiagnosisTStadiumTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/differential-diagnosis-tstadium-type.enum';
import { TstadiumInfiltrationTypeEnum } from '@enums/pelvisMRT/rectum/sigma-mass/tstadium-infiltration-type.enum';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/common/differential-diagnosis-type.enum';
import { nameof } from 'ts-simple-nameof';

@Component({
  selector: 'rr-sigma-mass-differential-diagnosis',
  templateUrl: './sigma-mass-differential-diagnosis.component.html',
  styleUrls: ['./sigma-mass-differential-diagnosis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SigmaMassDifferentialDiagnosisComponent {
  @Input() model: RectumFindingUiModel;
  @Input() differential01Options: DropdownModel[];
  @Input() differential02Options: DropdownModel[];
  @Input() localizationModel: LocalizationUiModel;

  differentialDiagnosisTypeEnum = DifferentialDiagnosisTypeEnum;
  differentialDiagnosisTStadiumTypeEnum = DifferentialDiagnosisTStadiumTypeEnum;
  infiltrationTypeEnum = TstadiumInfiltrationTypeEnum;
  gender = GenderTypeEnum;

  validationElements = [
    nameof<RectumFindingUiModel>(m => m.isUrinaryBladder),
    nameof<RectumFindingUiModel>(m => m.isProstate),
    nameof<RectumFindingUiModel>(m => m.isSeminalVesicles),
    nameof<RectumFindingUiModel>(m => m.isUterus),
    nameof<RectumFindingUiModel>(m => m.isVagina),
    nameof<RectumFindingUiModel>(m => m.isPeritoneum),
    nameof<RectumFindingUiModel>(m => m.isAbdomenPelvicWall),
    nameof<RectumFindingUiModel>(m => m.isSmallIntestine),
    nameof<RectumFindingUiModel>(m => m.isLeftExternalIliacVessels)
  ];

  get isMale(): boolean {
    return this.localizationModel?.patientInformation.gender === GenderTypeEnum.Male ? true : false;
  }

  get isFemale(): boolean {
    return this.localizationModel?.patientInformation.gender === GenderTypeEnum.Female ? true : false;
  }

  getAlwaysExcludedDiagnosis(): DifferentialDiagnosisTypeEnum[] {
    if (this.localizationModel?.patientInformation?.gender === GenderTypeEnum.Female) {
      return [];
    } else {
      return [DifferentialDiagnosisTypeEnum.Endometriosis];
    }
  }

  clearDifferentialDiagnosis01() {
    this.model.isSuspicionOf = false;

    this.clearDifferentialDiagnosis02();
    this.clearColumns();
  }

  clearColumns() {
    this.model.differentialDiagnosisTStadiumType = this.differentialDiagnosisTStadiumTypeEnum.None;
    this.model.tstadiumInfiltrationType = this.infiltrationTypeEnum.None;
    this.clearFifthColumn();
  }

  clearDifferentialDiagnosis02() {
    this.model.isSubordinated = false;
  }

  isThirdColumnVisible() {
    return (
      this.model.sigmaMassDifferentialDiagnosisType === DifferentialDiagnosisTypeEnum.SigmoidColonCancer ||
      this.model.sigmaMassDifferentialDiagnosis02Type === DifferentialDiagnosisTypeEnum.SigmoidColonCancer
    );
  }

  isFourthColumnVisible() {
    return this.isThirdColumnVisible() && this.model.differentialDiagnosisTStadiumType === DifferentialDiagnosisTStadiumTypeEnum.T4;
  }

  isFifthColumnVisible() {
    return this.isFourthColumnVisible() && this.model.tstadiumInfiltrationType === this.infiltrationTypeEnum.T4bAdjacentOrgan;
  }

  private clearFifthColumn() {
    this.model.isUrinaryBladder = false;
    this.model.isProstate = false;
    this.model.isSeminalVesicles = false;
    this.model.isUterus = false;
    this.model.isVagina = false;
    this.model.isPeritoneum = false;
    this.model.isAbdomenPelvicWall = false;
    this.model.isSmallIntestine = false;
    this.model.isLeftExternalIliacVessels = false;
  }
}
