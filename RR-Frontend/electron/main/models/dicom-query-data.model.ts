export class DicomQueryParams {
  patientId: string;
  studyInstanceUid: string;
  accessionNumber: string;

  constructor() {
    this.patientId = '';
    this.studyInstanceUid = '';
    this.accessionNumber = '';
  }
}
