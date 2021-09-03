import { ReportModelBase } from '@models/report-model-base';
import { AnamnesisClinicUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-clinic-ui.model';
import { AnamnesisIndicationApiModel } from '@models/abdomenMRT/api/anamnesis/anamnesis-indication-api.model';

export class AnamnesisApiModel extends ReportModelBase {
  clinics: AnamnesisClinicUiModel[];
  indications: AnamnesisIndicationApiModel[];
  isMRIAbdomen: boolean;
  monthOfMRI: number;
  yearOfMRI: number;
  isCTAbdomen: boolean;
  monthOfCT: number;
  yearOfCT: number;
  isSonographyAbdomen: boolean;
  monthOfSonography: number;
  yearOfSonography: number;
  isPetCT: boolean;
  monthOfPetCT: number;
  yearOfPetCT: number;

  constructor() {
    super();

    this.clinics = [];
    this.indications = [];
    this.isMRIAbdomen = false;
    this.monthOfMRI = null;
    this.yearOfMRI = null;
    this.isCTAbdomen = false;
    this.monthOfCT = null;
    this.yearOfCT = null;
    this.isSonographyAbdomen = false;
    this.monthOfSonography = null;
    this.yearOfSonography = null;
    this.isPetCT = false;
    this.monthOfPetCT = null;
    this.yearOfPetCT = null;
  }
}
