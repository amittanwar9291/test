import { IDicomParserResultDto } from './dtos/dicom-parser-result-dto.interface';

export interface IDicomQueryExecutor {
  executeStudiesOfPatientQuery(): IDicomParserResultDto | null;
  executePatientQuery(): IDicomParserResultDto | null;
  executeStudyQuery(includePatientTags: boolean): IDicomParserResultDto | null;
  executeSeriesQuery(): IDicomParserResultDto | null;
  executeCMoveQuery(): IDicomParserResultDto | null;
}
