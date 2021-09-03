import { IDicomQueryExecutor } from '../interfaces/dicom-query-executor.interface';
import { FileSystemService } from '../services/file-system.service';
import { AppContext } from '../models/app-context.model';
import { IDicomParserResultDto } from '../interfaces/dtos/dicom-parser-result-dto.interface';
import { join } from 'path';

export class DicomQueryExecutorMock implements IDicomQueryExecutor {
  private readonly studiesOfPatientDto: IDicomParserResultDto;
  private readonly patientDto: IDicomParserResultDto;
  private readonly studyDto: IDicomParserResultDto;
  private readonly seriesDto: IDicomParserResultDto;
  private readonly cmoveDto: IDicomParserResultDto;

  constructor(fileSystemService: FileSystemService) {
    const basePath = join(fileSystemService.getEntryFolderPath(), 'main', 'mocking');
    const studiesOfPatientFilePath = join(basePath, `${AppContext.studiesOfPatientMockFile || 'default_studiesofpatient_result'}.json`);
    const patientFilePath = AppContext.patientMockFile
      ? AppContext.patientMockFile.includes('/')
        ? join(basePath, AppContext.patientMockFile.split('/')[0], `${AppContext.patientMockFile.split('/')[1]}.json`)
        : join(basePath, `${AppContext.patientMockFile}.json`)
      : join(basePath, 'default_patient_result.json');
    const studyFilePath = AppContext.studyMockFile
      ? AppContext.studyMockFile.includes('/')
        ? join(basePath, AppContext.studyMockFile.split('/')[0], `${AppContext.studyMockFile.split('/')[1]}.json`)
        : join(basePath, `${AppContext.studyMockFile}.json`)
      : join(basePath, 'default_study_result.json');
    const seriesFilePath = AppContext.seriesMockFile
      ? AppContext.seriesMockFile.includes('/')
        ? join(basePath, AppContext.seriesMockFile.split('/')[0], `${AppContext.seriesMockFile.split('/')[1]}.json`)
        : join(basePath, `${AppContext.seriesMockFile}.json`)
      : join(basePath, 'default_series_result.json');
    const cmoveFilePath = AppContext.cmoveMockFile
      ? AppContext.cmoveMockFile.includes('/')
        ? join(basePath, AppContext.cmoveMockFile.split('/')[0], `${AppContext.cmoveMockFile.split('/')[1]}.json`)
        : join(basePath, `${AppContext.cmoveMockFile}.json`)
      : join(basePath, 'default_cmove_result.json');
    fileSystemService.assertPath(studiesOfPatientFilePath, `Mock file ${studiesOfPatientFilePath} does not exist`);
    fileSystemService.assertPath(patientFilePath, `Mock file ${patientFilePath} does not exist`);
    fileSystemService.assertPath(studyFilePath, `Mock file ${studyFilePath} does not exist`);
    fileSystemService.assertPath(seriesFilePath, `Mock file ${seriesFilePath} does not exist`);
    fileSystemService.assertPath(cmoveFilePath, `Mock file ${cmoveFilePath} does not exist`);
    this.studiesOfPatientDto = fileSystemService.readJsonSync(studiesOfPatientFilePath) as IDicomParserResultDto;
    this.patientDto = fileSystemService.readJsonSync(patientFilePath) as IDicomParserResultDto;
    this.studyDto = fileSystemService.readJsonSync(studyFilePath) as IDicomParserResultDto;
    this.seriesDto = fileSystemService.readJsonSync(seriesFilePath) as IDicomParserResultDto;
    this.cmoveDto = fileSystemService.readJsonSync(cmoveFilePath) as IDicomParserResultDto;
  }

  executeStudiesOfPatientQuery(): IDicomParserResultDto | null {
    return this.studiesOfPatientDto;
  }

  executePatientQuery(): IDicomParserResultDto | null {
    return this.patientDto;
  }

  executeStudyQuery(includePatientTags: boolean): IDicomParserResultDto | null {
    return this.studyDto;
  }

  executeSeriesQuery(): IDicomParserResultDto | null {
    return this.seriesDto;
  }

  executeCMoveQuery(): IDicomParserResultDto | null {
    return this.cmoveDto;
  }
}
