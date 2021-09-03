import { DicomParserResult } from '../models/dicom-parser-result.model';
import { ReportRequiredFieldsData } from '../models/report-required-fields-data.model';
import { KnownDicomTagKeys } from '../models/known-dicom-tag-keys.model';
import moment from 'moment';
import { DicomValueService } from './dicom-value.service';
import { IpcMessageService } from './ipc-message.service';
import { PromiseFactory } from './promise-factory.service';

// import scoped
export class RequiredFieldsService {
  constructor(private dicomValueService: DicomValueService, private ipcMessageService: IpcMessageService) {}

  async promptAndCompleteRequiredFieldsIfMissing(parserResult: DicomParserResult): Promise<void> {
    return PromiseFactory.createErrorHandlingPromise<void>(async (resolve, _) => {
      const requiredData = this.getReportRequiredFieldsData(parserResult);
      if (Object.values(requiredData).some(v => !v)) {
        const responseData = await this.ipcMessageService.promptRequiredFields(requiredData);
        this.setReportRequiredFieldsData(parserResult, responseData);
      }
      resolve();
    });
  }

  private getReportRequiredFieldsData(parserResult: DicomParserResult): ReportRequiredFieldsData {
    const patientName = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.patientName);
    const patientSex = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.patientSex);
    const patientBirthdate = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.patientBirthDate);
    const studyDate = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.studyDate);

    return {
      patientName,
      gender: patientSex ? this.getGenderNumericValue(patientSex) : null,
      patientBirthDate: patientBirthdate ? this.dicomValueService.parseDateString(patientBirthdate) : null,
      studyDate: studyDate ? this.dicomValueService.parseDateString(studyDate) : null
    };
  }

  private setReportRequiredFieldsData(parserResult: DicomParserResult, requiredData: ReportRequiredFieldsData): void {
    const patientNameHexSet = this.dicomValueService.findHexDatasetByKeyPair(parserResult, KnownDicomTagKeys.patientName);
    if (patientNameHexSet) {
      this.dicomValueService.setDicomValueByKey(patientNameHexSet, KnownDicomTagKeys.patientName.hexCode, requiredData.patientName);
    }

    const patientNameKeywordSet = this.dicomValueService.findKeywordDatasetByKeyPair(parserResult, KnownDicomTagKeys.patientName);
    if (patientNameKeywordSet) {
      this.dicomValueService.setDicomValueByKey(patientNameKeywordSet, KnownDicomTagKeys.patientName.keyword, requiredData.patientName);
    }

    const genderString = this.getGenderStringValue(requiredData.gender);
    const patientSexHexSet = this.dicomValueService.findHexDatasetByKeyPair(parserResult, KnownDicomTagKeys.patientSex);
    if (patientSexHexSet) {
      this.dicomValueService.setDicomValueByKey(patientSexHexSet, KnownDicomTagKeys.patientSex.hexCode, genderString);
    }

    const patientSexKeywordSet = this.dicomValueService.findKeywordDatasetByKeyPair(parserResult, KnownDicomTagKeys.patientSex);
    if (patientSexKeywordSet) {
      this.dicomValueService.setDicomValueByKey(patientSexKeywordSet, KnownDicomTagKeys.patientSex.keyword, genderString);
    }

    const patientBirthdateString = this.fortmatDate(requiredData.patientBirthDate);
    const patientBirthdateHexSet = this.dicomValueService.findHexDatasetByKeyPair(parserResult, KnownDicomTagKeys.patientBirthDate);
    if (patientBirthdateHexSet) {
      this.dicomValueService.setDicomValueByKey(patientBirthdateHexSet, KnownDicomTagKeys.patientBirthDate.hexCode, patientBirthdateString);
    }

    const patientBirthdateKeywordSet = this.dicomValueService.findKeywordDatasetByKeyPair(parserResult, KnownDicomTagKeys.patientBirthDate);
    if (patientBirthdateKeywordSet) {
      this.dicomValueService.setDicomValueByKey(
        patientBirthdateKeywordSet,
        KnownDicomTagKeys.patientBirthDate.keyword,
        patientBirthdateString
      );
    }

    const studyDateString = this.fortmatDate(requiredData.studyDate);
    const studyDateHexSet = this.dicomValueService.findHexDatasetByKeyPair(parserResult, KnownDicomTagKeys.studyDate);
    if (studyDateHexSet) {
      this.dicomValueService.setDicomValueByKey(studyDateHexSet, KnownDicomTagKeys.studyDate.hexCode, studyDateString);
    }

    const studyDateKeywordSet = this.dicomValueService.findKeywordDatasetByKeyPair(parserResult, KnownDicomTagKeys.studyDate);
    if (studyDateKeywordSet) {
      this.dicomValueService.setDicomValueByKey(studyDateKeywordSet, KnownDicomTagKeys.studyDate.keyword, studyDateString);
    }
  }

  private getGenderNumericValue(patientSex: string): number {
    if (patientSex === 'F') {
      return 1;
    } else if (patientSex === 'M') {
      return 2;
    } else {
      return 0;
    }
  }

  private getGenderStringValue(genderNumeric: number): string {
    if (genderNumeric === 1) {
      return 'F';
    } else if (genderNumeric === 2) {
      return 'M';
    } else {
      return 'O';
    }
  }

  private fortmatDate(date: Date): string {
    return moment(date).format('YYYYMMDD');
  }
}
