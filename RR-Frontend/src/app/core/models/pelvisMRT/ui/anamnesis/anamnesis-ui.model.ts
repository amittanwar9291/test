import { ReportModelBase } from '@models/report-model-base';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
import { AnamnesisClinicFindingUiModel } from './anamnesis-clinic-finding-ui.model';
import { AnamnesisPreviousOperationFindingUiModel } from './anamnesis-previous-operation-finding-ui.model';
import { TherapieContinueTypeEnum } from '@enums/pelvisMRT/anamnesis/therapie-continue-type.enum';
import { ParityTypeEnum } from '@enums/pelvisMRT/anamnesis/parity-type.enum';
import { WeightChangeTypeEnum } from '@enums/pelvisMRT/anamnesis/weight-change-type.enum';

export class AnamnesisUiModel extends ReportModelBase {
  // Anamnesis
  // First column
  psaLevel: number;
  psaLevelTestData: MonthYearModel;
  biopsyDate: MonthYearModel;

  // Second column
  isTherapy: boolean;
  isRadiotherapy: boolean;
  isHormoneAblative: boolean;
  radiotherapyContinueType: TherapieContinueTypeEnum;
  radiotherapyData: MonthYearModel;
  hormoneAblativeContinueType: TherapieContinueTypeEnum;
  hormoneAblativeDate: MonthYearModel;

  // Third column
  isNeoadjuvantTherapy: boolean;
  neoadjuvantTherapyContinueType: TherapieContinueTypeEnum;
  neoadjuvantTherapyDate: MonthYearModel;
  isNeoadjuvantTherapyRadiotherapy: boolean;
  isNeoadjuvantTherapyChemotherapy: boolean;

  // Fourth column
  parityType: ParityTypeEnum;
  isHypermenorrhea: boolean;
  isMenorrhagia: boolean;
  isMetrorrhagia: boolean;

  // Fifth column
  isCryptorchidismRight: boolean;
  isCryptorchidismLeft: boolean;
  isWeightChange: boolean;
  weightChangeType: WeightChangeTypeEnum;

  // Second tab
  clinicFindings: AnamnesisClinicFindingUiModel[];
  previousOperationFindings: AnamnesisPreviousOperationFindingUiModel[];
  prevExaminationDate: MonthYearModel;

  constructor() {
    super();

    // First column
    this.psaLevel = null;
    this.psaLevelTestData = new MonthYearModel();
    this.biopsyDate = new MonthYearModel();

    // Second column
    this.isTherapy = false;
    this.isRadiotherapy = false;
    this.isHormoneAblative = false;
    this.radiotherapyContinueType = TherapieContinueTypeEnum.None;
    this.radiotherapyData = new MonthYearModel();
    this.hormoneAblativeContinueType = TherapieContinueTypeEnum.None;
    this.hormoneAblativeDate = new MonthYearModel();

    // Third column
    this.isNeoadjuvantTherapy = false;
    this.neoadjuvantTherapyContinueType = TherapieContinueTypeEnum.None;
    this.neoadjuvantTherapyDate = new MonthYearModel();
    this.isNeoadjuvantTherapyRadiotherapy = false;
    this.isNeoadjuvantTherapyChemotherapy = false;

    // Fourth column
    this.parityType = ParityTypeEnum.None;
    this.isHypermenorrhea = false;
    this.isMenorrhagia = false;
    this.isMetrorrhagia = false;

    // Fifth column
    this.isCryptorchidismRight = false;
    this.isCryptorchidismLeft = false;
    this.isWeightChange = false;
    this.weightChangeType = WeightChangeTypeEnum.None;

    // Second tab
    this.clinicFindings = [new AnamnesisClinicFindingUiModel()];
    this.previousOperationFindings = [new AnamnesisPreviousOperationFindingUiModel()];
    this.prevExaminationDate = new MonthYearModel();
  }
}
