import { DicomParserResult } from '../models/dicom-parser-result.model';
import { DicomQueryMode } from '../enums/dicom-query-mode.enum';
import { ErrorMessage } from '../enums/error-message.enum';
import { CliManager } from './cli-manager.service';
import { DtoBoMapper } from './dto-bo-mapper.service';
import { DicomValueService } from './dicom-value.service';
import { KnownDicomTagKeys } from '../models/known-dicom-tag-keys.model';
import { IDicomQueryExecutor } from '../interfaces/dicom-query-executor.interface';
import { RetrieveLevel } from '../enums/retrieve-level.enum';
import { IDicomParserResultDto } from '../interfaces/dtos/dicom-parser-result-dto.interface';
import { NoParserDataError } from '../models/errors/no-parser-data-error.model';
import { ImportLogData } from '../models/import-log-data.model';

export class DicomParserResultService {
  constructor(
    private dicomQueryExecutor: IDicomQueryExecutor,
    private cliManager: CliManager,
    private dtoBoMapper: DtoBoMapper,
    private dicomValueService: DicomValueService,
    private logData: ImportLogData
  ) {}

  fetchParserResults(): { patientOrStudyParserResult: DicomParserResult; seriesParserResult?: DicomParserResult } {
    switch (this.cliManager.dicomQueryMode) {
      case DicomQueryMode.OnlyPatient:
        return this.getStudiesOfPatientResult();
      case DicomQueryMode.OnlyStudy:
        return this.getOnlyStudyResult();
      case DicomQueryMode.PatientAndStudy:
        return this.getPatientAndStudyResult();
      case DicomQueryMode.CMove:
        return this.getCMoveResult();
      default:
        throw new Error(ErrorMessage.INVALID_DICOM_QUERY_MODE);
    }
  }

  private getStudiesOfPatientResult(): { patientOrStudyParserResult: DicomParserResult; seriesParserResult: DicomParserResult } {
    const resultDto = this.dicomQueryExecutor.executeStudiesOfPatientQuery();
    const studiesOfPatientResult = this.dtoBoMapper.mapDicomParserResult(resultDto, RetrieveLevel.Patient, this.cliManager.dicomQueryMode);
    this.assertResult(studiesOfPatientResult);

    return { patientOrStudyParserResult: studiesOfPatientResult, seriesParserResult: null };
  }

  private getOnlyStudyResult(): { patientOrStudyParserResult: DicomParserResult; seriesParserResult: DicomParserResult | null } {
    const studyResult = this.getStudyResult(true);
    this.assertResult(studyResult);
    this.setServersideStudyInstanceUidIfUnset(studyResult);

    return { patientOrStudyParserResult: studyResult, seriesParserResult: this.getSeriesResult() };
  }

  private getPatientAndStudyResult(): { patientOrStudyParserResult: DicomParserResult; seriesParserResult: DicomParserResult | null } {
    const patientResult = this.getPatientResult();
    const studyResult = this.getStudyResult(false);
    this.assertResult(patientResult);
    this.assertResult(studyResult);
    this.setServersideStudyInstanceUidIfUnset(studyResult);
    const patientOrStudyParserResult = DicomParserResult.concat(patientResult, studyResult);
    this.logData.patientStudyConcatResult = patientOrStudyParserResult;
    const seriesParserResult = this.getSeriesResult();

    return { patientOrStudyParserResult, seriesParserResult };
  }

  private getCMoveResult(): { patientOrStudyParserResult: DicomParserResult; seriesParserResult: DicomParserResult } {
    const resultDto = this.dicomQueryExecutor.executeCMoveQuery();
    const cmoveResult = this.dtoBoMapper.mapDicomParserResult(resultDto, RetrieveLevel.Study, this.cliManager.dicomQueryMode);
    this.assertResult(cmoveResult);
    this.setServersideStudyInstanceUidIfUnset(cmoveResult);

    return { patientOrStudyParserResult: cmoveResult, seriesParserResult: cmoveResult };
  }

  private getPatientResult(): DicomParserResult {
    const resultDto = this.dicomQueryExecutor.executePatientQuery();

    return this.dtoBoMapper.mapDicomParserResult(resultDto, RetrieveLevel.Patient, this.cliManager.dicomQueryMode);
  }

  private getStudyResult(includePatientTags: boolean): DicomParserResult {
    const resultDto = this.dicomQueryExecutor.executeStudyQuery(includePatientTags);

    return this.dtoBoMapper.mapDicomParserResult(resultDto, RetrieveLevel.Study, this.cliManager.dicomQueryMode);
  }

  private getSeriesResult(): DicomParserResult {
    const resultDto = this.dicomQueryExecutor.executeSeriesQuery();

    return this.dtoBoMapper.mapDicomParserResult(resultDto, RetrieveLevel.Series, this.cliManager.dicomQueryMode);
  }

  private setServersideStudyInstanceUidIfUnset(parserResult: DicomParserResult) {
    if (!this.cliManager.dicomQueryParams.studyInstanceUid) {
      const studyInstanceUid = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.studyInstanceUID);
      this.cliManager.dicomQueryParams.studyInstanceUid = studyInstanceUid;
    }
  }

  private assertResult(result: IDicomParserResultDto) {
    if (!result.hex.length) {
      throw new NoParserDataError();
    }
  }
}
