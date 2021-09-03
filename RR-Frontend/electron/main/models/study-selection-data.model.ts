import { IStudySelectionDataDto } from '../interfaces/dtos/study-selection-data-dto.interface';

export class StudySelectionData {
  accessionNumber: string;
  studyInstanceUid: string;

  constructor() {
    this.accessionNumber = '';
    this.studyInstanceUid = '';
  }

  static create(dto: IStudySelectionDataDto): StudySelectionData {
    const studyData = new StudySelectionData();
    studyData.accessionNumber = dto.accessionNumber;
    studyData.studyInstanceUid = dto.studyInstanceUid;

    return studyData;
  }
}
