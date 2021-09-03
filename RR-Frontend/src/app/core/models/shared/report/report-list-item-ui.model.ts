import { ModelBase } from '@models/model-base';
import { ReportStatus } from '@enums/shared/report-status.enum';
import { Guid } from '@models/shared/guid/guid';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';

export class ReportListItemUiModel extends ModelBase {
  patientId: string;
  patientFirstName: string;
  patientLastName: string;
  patientName: string;
  patientGender: GenderTypeEnum;
  patientBirthDate: Date;
  patientAge: number;
  status: ReportStatus;
  examinationType: string;
  examinationDate: Date;
  userId: string;
  userLabel: string;
  findingsDate: Date;
  freeField: string;

  constructor() {
    super();

    this.patientId = Guid.createEmpty();
    this.patientFirstName = '';
    this.patientLastName = '';
    this.patientName = '';
    this.patientGender = GenderTypeEnum.None;
    this.patientBirthDate = null;
    this.patientAge = null;
    this.status = ReportStatus.Unknown;
    this.examinationType = '';
    this.examinationDate = null;
    this.userId = Guid.createEmpty();
    this.userLabel = '';
    this.findingsDate = null;
    this.freeField = '';
  }
}
