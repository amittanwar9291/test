import { Component } from '@angular/core';

import { LocalizationUiModel } from '@models/pelvisMRT/ui/localization/localization-ui.model';
import { AnamnesisUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-ui.model';
import { BladderUiModel } from '@models/pelvisMRT/ui/bladder/bladder-ui.model';

import { SlideBaseComponent } from '@abstractions/slide-base/slide-base.component';

import { NavigationService } from '@services/shared';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';
import { SlideCommonService } from '@services/shared/slide-base/slide-common.service';
import { ControlContainer, NgForm } from '@angular/forms';

import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { LocalizationValidationModel } from '@models/pelvisMRT/ui/localization/localization-validation.model';
import { InvestigationTypeEnum } from '@enums/pelvisMRT/localization/investigation-type.enum';
import { PelvicFloorUiModel } from '@models/pelvisMRT/ui/pelvic-floor/pelvic-floor-ui.model';
import { PhaseTypeEnum } from '@enums/pelvisMRT/pelvic-floor/phase-type.enum';
import { MlpPositionTypeEnum } from '@enums/pelvisMRT/pelvic-floor/mlp-position-type.enum';
import { RectumUiModel } from '@models/pelvisMRT/ui/rectum/rectum-ui.model';
import { FistulaTypeEnum } from '@enums/pelvisMRT/rectum/fistula/fistula-type.enum';
import { SummaryUiModel } from '@models/pelvisMRT/ui/summary/summary-ui.model';
import { TnStagingTypeEnum } from '@enums/pelvisMRT/summary/tn-staging-type.enum';
import { TStageTypeEnum } from '@enums/pelvisMRT/summary/t-stage-type.enum';
import { NStageTypeEnum } from '@enums/pelvisMRT/summary/n-stage-type.enum';
import { MStageTypeEnum } from '@enums/pelvisMRT/summary/m-stage-type.enum';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { TechnologyUiModel } from '@models/pelvisMRT/ui/technology/technology-ui.model';
import { ParityTypeEnum } from '@enums/pelvisMRT/anamnesis/parity-type.enum';
import { MaleSexUiModel } from '@models/pelvisMRT/ui/male-sex/male-sex-ui.model';
import { AreFindingsEnum } from '@enums/shared/are-findings.enum';
import { ProstateUiModel } from '@models/pelvisMRT/ui/prostate/prostate-ui.model';
import { VolumeTypeEnum } from '@enums/pelvisMRT/prostate/volume-type.enum';
import { PsaVolumeTypeEnum } from '@enums/pelvisMRT/prostate/psa-volume-type.enum';
import { FemaleSexUiModel } from '@models/pelvisMRT/ui/female-sex/female-sex-ui.model';
import { ComplicationsFistulaTypeEnum } from '@enums/pelvisMRT/rectum/sigmoid-diverticulosis/complications-fistula-type.enum';
import { AnamnesisClinicFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-clinic-finding-ui.model';
import { ClinicTypeEnum } from '@enums/pelvisMRT/anamnesis/clinic-type.enum';
import { AnamnesisPreviousOperationFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-previous-operation-finding-ui.model';
import { PreviousOperationTypeEnum } from '@enums/pelvisMRT/anamnesis/previous-operation-type.enum';
import { BladderDiagnosisTypeEnum, BladderFindingTypeEnum, InfiltrativeGrowthTypeEnum } from '@enums/pelvisMRT/bladder';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { nameof } from 'ts-simple-nameof';
import { DifferentialDiagnosisTypeEnum } from '@enums/pelvisMRT/rectum/common/differential-diagnosis-type.enum';
import { PelvicFloorFindingTypeEnum } from '@enums/pelvisMRT/pelvic-floor/pelvic-floor-finding-type.enum';

@Component({
  selector: 'rr-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LocalizationComponent extends SlideBaseComponent<LocalizationUiModel> {
  genderTypeEnum: typeof GenderTypeEnum;
  investigationType: typeof InvestigationTypeEnum;
  phaseTypeEnum: typeof PhaseTypeEnum;
  mlpPositionType: typeof MlpPositionTypeEnum;
  tStageType: typeof TStageTypeEnum;
  nStageType: typeof NStageTypeEnum;
  mStageType: typeof MStageTypeEnum;

  constructor(
    public navService: NavigationService,
    public slideRequestService: SlideRequestService,
    public changeDetectionService: ChangeDetectionService,
    public commonServices: SlideCommonService,
    public validationHelperService: ValidationHelperService
  ) {
    super(navService, slideRequestService, changeDetectionService, LocalizationUiModel, commonServices, LocalizationValidationModel);
    this.registerGetCallback(() => {
      if (this.navService.getReportData()) {
        this.model.patientInformation.age = this.navService.getReportData().patientAge;
      }
    });

    this.addPageConnection(
      3,
      TechnologyUiModel,
      () => {
        return this.model.patientInformation.gender !== GenderTypeEnum.Female;
      },
      (model: TechnologyUiModel) => {
        model.isVaginalContrast = false;
      }
    );

    this.addPageConnection(
      2,
      AnamnesisUiModel,
      () => {
        return true;
      },
      (model: AnamnesisUiModel) => {
        if (this.model.patientInformation.gender === 'Female') {
          model.psaLevel = null;
          model.psaLevelTestData = new MonthYearModel();
          model.biopsyDate = new MonthYearModel();
          model.isCryptorchidismLeft = false;
          model.isCryptorchidismRight = false;

          model.previousOperationFindings.map((previousOperationFinding: AnamnesisPreviousOperationFindingUiModel) => {
            if (
              [PreviousOperationTypeEnum.Prostatectomy, PreviousOperationTypeEnum.Hemiorchiectomy].includes(
                previousOperationFinding.findingType
              )
            ) {
              previousOperationFinding.isDeleted = true;
            }
          });
          if (
            model.previousOperationFindings.every(
              (previousOperationFinding: AnamnesisPreviousOperationFindingUiModel) => previousOperationFinding.isDeleted
            )
          ) {
            model.previousOperationFindings.push(new AnamnesisPreviousOperationFindingUiModel());
          }
        } else {
          model.parityType = ParityTypeEnum.None;
          model.isHypermenorrhea = false;
          model.isMenorrhagia = false;
          model.isMetrorrhagia = false;

          model.clinicFindings.map((clinicFinding: AnamnesisClinicFindingUiModel) => {
            if (clinicFinding.findingType === ClinicTypeEnum.VaginalDischarge) {
              clinicFinding.isDeleted = true;
            }
          });
          if (model.clinicFindings.every((clinicFinding: AnamnesisClinicFindingUiModel) => clinicFinding.isDeleted)) {
            model.clinicFindings.push(new AnamnesisClinicFindingUiModel());
          }

          model.clinicFindings
            .filter(f => !f.isDeleted)
            .forEach((element, i) => {
              element.number = i + 1;
            });

          model.previousOperationFindings.map((previousOperationFinding: AnamnesisPreviousOperationFindingUiModel) => {
            if (
              [
                PreviousOperationTypeEnum.Hysterectomy,
                PreviousOperationTypeEnum.Conisation,
                PreviousOperationTypeEnum.RadicalTrachelectomy
              ].includes(previousOperationFinding.findingType)
            ) {
              previousOperationFinding.isDeleted = true;
            }
          });
          if (
            model.previousOperationFindings.every(
              (previousOperationFinding: AnamnesisPreviousOperationFindingUiModel) => previousOperationFinding.isDeleted
            )
          ) {
            model.previousOperationFindings.push(new AnamnesisPreviousOperationFindingUiModel());
          }
        }

        model.previousOperationFindings
          .filter(f => !f.isDeleted)
          .forEach((element, i) => {
            element.number = i + 1;
          });
      }
    );

    this.addPageConnection(
      4,
      ProstateUiModel,
      () => {
        return true;
      },
      (model: ProstateUiModel) => {
        if (this.model.patientInformation.gender === GenderTypeEnum.Female) {
          model.findings.map(finding => {
            finding.isDeleted = true;
          });
          model.areFindings = AreFindingsEnum.None;
          model.psaVolumeType = PsaVolumeTypeEnum.None;
          model.volumeType = VolumeTypeEnum.None;
          model.widthInMm = null;
          model.heightInMm = null;
          model.aPdiameterInMm = null;
          model.volumeInCm3 = null;
          model.psaVolume = null;
        }
      }
    );

    this.addPageConnection(
      5,
      MaleSexUiModel,
      () => {
        return true;
      },
      (model: MaleSexUiModel) => {
        if (this.model.patientInformation.gender === GenderTypeEnum.Female) {
          model.findings.map(finding => {
            finding.isDeleted = true;
          });
          model.areFindings = AreFindingsEnum.None;
        }
      }
    );

    this.addPageConnection(
      6,
      FemaleSexUiModel,
      () => {
        return true;
      },
      (model: FemaleSexUiModel) => {
        if (this.model.patientInformation.gender === GenderTypeEnum.Male) {
          model.findings.map(finding => {
            finding.isDeleted = true;
          });
          model.areFindings = AreFindingsEnum.None;
        }
      }
    );

    this.addPageConnection(
      7,
      PelvicFloorUiModel,
      () => {
        return true;
      },
      (model: PelvicFloorUiModel) => {
        if (!this.model.isDynamic) {
          model.findings.map(finding => {
            finding.craniocaudalExtensioToPlcPhaseType = PhaseTypeEnum.None;
            finding.craniocaudalExtensionInReferenceToMlpPhaseType = PhaseTypeEnum.None;
            finding.craniocaudalExtensioToPlcPhaseType = PhaseTypeEnum.None;
            finding.craniocaudalExtensionInReferenceToMlpPhaseType = PhaseTypeEnum.None;
            finding.middleCraniocaudalExtensionToPclPhaseType = PhaseTypeEnum.None;
            finding.middleCraniocaudalExtensionToMplPhaseType = PhaseTypeEnum.None;
            finding.enterocelePhaseType = PhaseTypeEnum.None;
            finding.peritoneocelePhaseType = PhaseTypeEnum.None;
            finding.sigmoidocelePhaseType = PhaseTypeEnum.None;
            finding.anteriorRectocelePhaseType = PhaseTypeEnum.None;
            finding.isIntraluminalCmRetentionAfterDefecation = false;
            finding.isHiatalExtension = false;
            finding.isDescendingPelvicFloor = false;
            finding.hiatalExtensionInMm = null;
            finding.descendingPelvicFloorInMm = null;

            if (finding.findingType === PelvicFloorFindingTypeEnum.DyssynergicDefecationAnism) {
              finding.isDeleted = true;
            }
          });
        }
      }
    );

    this.addPageConnection(
      8,
      RectumUiModel,
      () => {
        return true;
      },
      (model: RectumUiModel) => {
        if (this.model.patientInformation.gender !== GenderTypeEnum.Female) {
          model.findings.map(finding => {
            finding.isUterus = false;
            finding.isVagina = false;
            finding.isUterineCervix = false;
            finding.complicationsFistulaType = ComplicationsFistulaTypeEnum.None;
            if (
              finding.fistulaType === FistulaTypeEnum.Rectovaginal ||
              finding.fistulaType === FistulaTypeEnum.Colovaginal ||
              finding.fistulaType === FistulaTypeEnum.Vesicovaginal ||
              finding.fistulaType === FistulaTypeEnum.Vesicocervical
            ) {
              finding.fistulaType = FistulaTypeEnum.None;
            }

            if (finding.sigmaMassDifferentialDiagnosisType === DifferentialDiagnosisTypeEnum.Endometriosis) {
              finding.sigmaMassDifferentialDiagnosisType = DifferentialDiagnosisTypeEnum.None;
              finding.isSuspicionOf = false;
              finding.sigmaMassDifferentialDiagnosis02Type = DifferentialDiagnosisTypeEnum.None;
              finding.isSubordinated = false;
            }
            if (finding.sigmaMassDifferentialDiagnosis02Type === DifferentialDiagnosisTypeEnum.Endometriosis) {
              finding.sigmaMassDifferentialDiagnosis02Type = DifferentialDiagnosisTypeEnum.None;
              finding.isSubordinated = false;
            }
          });
        }
        if (this.model.patientInformation.gender !== GenderTypeEnum.Male) {
          model.findings.map(finding => {
            finding.isProstate = false;
            finding.isSeminalVesicles = false;
          });
        }
      }
    );

    this.addPageConnection(
      9,
      BladderUiModel,
      () => {
        return true;
      },
      (model: BladderUiModel) => {
        if (this.model.patientInformation.gender !== GenderTypeEnum.Male) {
          model.findings
            .filter(finding => finding.findingType === BladderFindingTypeEnum.UrinaryBladderWallThickening)
            .map(finding => {
              if (finding.infiltrativeGrowthType === InfiltrativeGrowthTypeEnum.ProstateSeminalVesicles) {
                finding.infiltrativeGrowthType = InfiltrativeGrowthTypeEnum.None;
              }
              if (
                [
                  BladderDiagnosisTypeEnum.StatusPostTransurethralResectionTUR,
                  BladderDiagnosisTypeEnum.InfiltratedByProstateSeminalVesicleCarcinoma
                ].includes(finding.differentialDiagnosis1)
              ) {
                (finding.differentialDiagnosis1 = BladderDiagnosisTypeEnum.None),
                  (finding.differentialDiagnosis2 = BladderDiagnosisTypeEnum.None),
                  (finding.isSubordinate = false);
              }
              if (
                [
                  BladderDiagnosisTypeEnum.StatusPostTransurethralResectionTUR,
                  BladderDiagnosisTypeEnum.InfiltratedByProstateSeminalVesicleCarcinoma
                ].includes(finding.differentialDiagnosis2)
              ) {
                (finding.differentialDiagnosis2 = BladderDiagnosisTypeEnum.None), (finding.isSubordinate = false);
              }
            });
          model.findings
            .filter(finding => finding.findingType === BladderFindingTypeEnum.SoftTissueMass)
            .map(finding => {
              finding.isProstate = false;
              finding.isSeminalVesicles = false;
            });
        }
        if (this.model.patientInformation.gender !== GenderTypeEnum.Female) {
          model.findings
            .filter(finding => finding.findingType === BladderFindingTypeEnum.PeritonealNodules)
            .map(finding => (finding.isDeleted = true));
          model.findings
            .filter(finding => finding.findingType === BladderFindingTypeEnum.UrinaryBladderWallThickening)
            .map(finding => {
              if (finding.infiltrativeGrowthType === InfiltrativeGrowthTypeEnum.UterusOvary) {
                finding.infiltrativeGrowthType = InfiltrativeGrowthTypeEnum.None;
              }
              if (
                [BladderDiagnosisTypeEnum.Endometriosis, BladderDiagnosisTypeEnum.InfiltratedByUterusOvarianCarcinoma].includes(
                  finding.differentialDiagnosis1
                )
              ) {
                (finding.differentialDiagnosis1 = BladderDiagnosisTypeEnum.None),
                  (finding.differentialDiagnosis2 = BladderDiagnosisTypeEnum.None),
                  (finding.isSubordinate = false);
              }
              if (
                [BladderDiagnosisTypeEnum.Endometriosis, BladderDiagnosisTypeEnum.InfiltratedByUterusOvarianCarcinoma].includes(
                  finding.differentialDiagnosis2
                )
              ) {
                (finding.differentialDiagnosis2 = BladderDiagnosisTypeEnum.None), (finding.isSubordinate = false);
              }
            });
          model.findings
            .filter(finding => finding.findingType === BladderFindingTypeEnum.UrinaryBladderStandardVariationAnomalies)
            .map(finding => (finding.isUterusVagina = false));
          model.findings
            .filter(finding => finding.findingType === BladderFindingTypeEnum.SoftTissueMass)
            .map(finding => {
              finding.isUterus = false;
              finding.isVagina = false;
            });
        }
      }
    );

    this.addPageConnection(
      12,
      SummaryUiModel,
      () => {
        return this.model.patientInformation.gender !== GenderTypeEnum.Male;
      },
      (model: SummaryUiModel) => {
        if (model.tnStagingType === TnStagingTypeEnum.ProstateCarcinoma) {
          model.tnStagingType = TnStagingTypeEnum.None;
          model.prostateCarcinomaTStageType = this.tStageType.None;
          model.prostateCarcinomaNStageType = this.nStageType.None;
          model.prostateCarcinomaMStageType = this.mStageType.None;
        }
      }
    );
    this.genderTypeEnum = GenderTypeEnum;
    this.investigationType = InvestigationTypeEnum;
    this.phaseTypeEnum = PhaseTypeEnum;
    this.mlpPositionType = MlpPositionTypeEnum;
    this.tStageType = TStageTypeEnum;
    this.nStageType = NStageTypeEnum;
    this.mStageType = MStageTypeEnum;
  }

  resetInvestigationType(investigationType: InvestigationTypeEnum): string {
    if (investigationType === this.model.investigationType) {
      return '';
    } else if (investigationType === this.investigationType.MRIPelvicFloor) {
      return 'multiparametric';
    } else if (investigationType === this.investigationType.MRIProstate) {
      return 'isDynamic';
    } else {
      return 'multiparametric isDynamic';
    }
  }

  genderChange(gender) {
    if (
      gender === this.genderTypeEnum.Female &&
      (this.model.investigationType === this.investigationType.MRIProstate ||
        this.model.investigationType === this.investigationType.MRIPenisTesticle)
    ) {
      this.model.investigationType = this.investigationType.None;
      this.model.isMultiparametric = false;
    }
    this.validationHelperService.removeError(nameof<LocalizationUiModel>(m => m.investigationType));
  }
}
