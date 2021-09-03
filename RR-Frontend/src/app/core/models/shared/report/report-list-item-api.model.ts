import { ModelBase } from '@models/model-base';
import { Guid } from '@models/shared/guid/guid';

export class ReportListItemApiModel extends ModelBase {
  patientId: string;
  patientFirstName: string;
  patientLastName: string;
  patientName: string;
  patientGender: string;
  patientBirthDate: string;
  patientAge: number;
  status: string;
  examinationType: string;
  examinationDate: string;
  userLabel: string;
  findingsDate: string;
  freeField: string;

  constructor() {
    super();

    this.patientId = Guid.createEmpty();
    this.patientFirstName = '';
    this.patientLastName = '';
    this.patientName = '';
    this.patientGender = '';
    this.patientBirthDate = '';
    this.patientAge = 0;
    this.status = '';
    this.examinationType = '';
    this.examinationDate = '';
    this.userLabel = '';
    this.findingsDate = '';
    this.freeField = '';
  }
}
