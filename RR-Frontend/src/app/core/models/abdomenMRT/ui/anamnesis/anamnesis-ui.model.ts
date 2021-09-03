import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisClinicUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-clinic-ui.model';
import { AnamnesisIndicationUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-indication-ui.model';
import { MonthYearModel } from '@models/shared/month-year/month-year.model';
export class AnamnesisUiModel extends ReportModelBase {
  clinics: AnamnesisClinicUiModel[];
  indications: AnamnesisIndicationUiModel[];
  isMRIAbdomen: boolean;
  dateOfMRI: MonthYearModel;
  isCTAbdomen: boolean;
  dateOfCT: MonthYearModel;
  isSonographyAbdomen: boolean;
  dateOfSonography: MonthYearModel;
  isPetCT: boolean;
  dateOfPetCT: MonthYearModel;

  constructor() {
    super();
    this.clinics = [new AnamnesisClinicUiModel()];
    this.indications = [new AnamnesisIndicationUiModel()];
    this.isMRIAbdomen = false;
    this.dateOfMRI = new MonthYearModel();
    this.isCTAbdomen = false;
    this.dateOfCT = new MonthYearModel();
    this.isSonographyAbdomen = false;
    this.dateOfSonography = new MonthYearModel();
    this.isPetCT = false;
    this.dateOfPetCT = new MonthYearModel();
  }
}
