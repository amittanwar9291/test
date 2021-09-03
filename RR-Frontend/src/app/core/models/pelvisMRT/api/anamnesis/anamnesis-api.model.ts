import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisClinicFindingApiModel } from './anamnesis-clinic-finding-api.model';
import { AnamnesisPreviousOperationFindingApiModel } from './anamnesis-previous-operation-finding-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  // Anamnesis
  // First column
  psaLevel: number;
  psaLevelTestMonth: number;
  psaLevelTestYear: number;
  biopsyMonth: number;
  biopsyYear: number;

  // Second column
  isTherapy: boolean;
  isRadiotherapy: boolean;
  isHormoneAblative: boolean;
  radiotherapyContinueType: string;
  radiotherapyMonth: number;
  radiotherapyYear: number;
  hormoneAblativeContinueType: string;
  hormoneAblativeMonth: number;
  hormoneAblativeYear: number;

  // Third column
  isNeoadjuvantTherapy: boolean;
  neoadjuvantTherapyContinueType: string;
  neoadjuvantTherapyMonth: number;
  neoadjuvantTherapyYear: number;
  isNeoadjuvantTherapyRadiotherapy: boolean;
  isNeoadjuvantTherapyChemotherapy: boolean;

  // Fourth column
  parityType: string;
  isHypermenorrhea: boolean;
  isMenorrhagia: boolean;
  isMetrorrhagia: boolean;

  // Fifth column
  isCryptorchidismRight: boolean;
  isCryptorchidismLeft: boolean;
  isWeightChange: boolean;
  weightChangeType: string;

  // Second tab
  clinicFindings: AnamnesisClinicFindingApiModel[];
  previousOperationFindings: AnamnesisPreviousOperationFindingApiModel[];
  prevExaminationMonth: number;
  prevExaminationYear: number;

  constructor() {
    super();

    // First column
    this.psaLevel = null;
    this.psaLevelTestMonth = null;
    this.psaLevelTestYear = null;
    this.biopsyMonth = null;
    this.biopsyYear = null;

    // Second column
    this.isTherapy = false;
    this.isRadiotherapy = false;
    this.isHormoneAblative = false;
    this.radiotherapyContinueType = 'None';
    this.radiotherapyMonth = null;
    this.radiotherapyYear = null;
    this.hormoneAblativeContinueType = 'None';
    this.hormoneAblativeMonth = null;
    this.hormoneAblativeYear = null;

    // Third column
    this.isNeoadjuvantTherapy = false;
    this.neoadjuvantTherapyContinueType = 'None';
    this.neoadjuvantTherapyMonth = null;
    this.neoadjuvantTherapyYear = null;
    this.isNeoadjuvantTherapyRadiotherapy = false;
    this.isNeoadjuvantTherapyChemotherapy = false;

    // Fourth column
    this.parityType = 'None';
    this.isHypermenorrhea = false;
    this.isMenorrhagia = false;
    this.isMetrorrhagia = false;

    // Fifth column
    this.isCryptorchidismRight = false;
    this.isCryptorchidismLeft = false;
    this.isWeightChange = false;
    this.weightChangeType = 'None';

    // Second tab
    this.clinicFindings = [new AnamnesisClinicFindingApiModel()];
    this.previousOperationFindings = [new AnamnesisPreviousOperationFindingApiModel()];

    this.prevExaminationMonth = null;
    this.prevExaminationYear = null;
  }
}
