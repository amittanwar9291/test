import { IDicomParserResultDto } from '../interfaces/dtos/dicom-parser-result-dto.interface';
import { DicomQueryArgumentProducer } from './dicom-query-argument-producer.service';
import { ImportLogData } from '../models/import-log-data.model';
import { ErrorMessage } from '../enums/error-message.enum';
import { Logger } from './logger.service';
import { TraceTag } from '../enums/trace-tag.enum';
import { TraceMessage } from '../enums/trace-message.enum';
import { is } from 'electron-util';
import * as childProcess from 'child_process';
import { FileSystemService } from './file-system.service';
import { dirname, join } from 'path';
import { app } from 'electron';
import { IDicomQueryExecutor } from '../interfaces/dicom-query-executor.interface';

// import scoped
export class DicomQueryExecutor implements IDicomQueryExecutor {
  private execFilePath: string;

  constructor(
    private dicomQueryArgumentProducer: DicomQueryArgumentProducer,
    private fileSystemService: FileSystemService,
    private logData: ImportLogData
  ) {}

  executeStudiesOfPatientQuery(): IDicomParserResultDto | null {
    const args = this.dicomQueryArgumentProducer.createStudiesOfPatientQueryArgs();
    if (!args?.length) {
      this.logData.warnings.push('Studies of patient dicom parser query without requested fields');
      return;
    }

    this.logData.studiesOfPatientParserArgs = args;
    this.logData.studiesOfPatientParserArgString = args.join(' ');
    const parserResultDto = this.executeDicomParser(args);
    Logger.logger.trace(TraceTag.Custom, TraceMessage.STUDIES_OF_PATIENT_RESULT_RECEIVED);
    this.logData.studiesOfPatientParserResultKeywordsCount = parserResultDto.keywords?.length;
    this.logData.studiesOfPatientParserResultHexCount = parserResultDto.hex?.length;

    return parserResultDto;
  }

  executePatientQuery(): IDicomParserResultDto | null {
    const args = this.dicomQueryArgumentProducer.createPatientQueryArgs();
    if (!args?.length) {
      this.logData.warnings.push('Patient dicom parser query without requested fields');
      return;
    }

    this.logData.patientParserArgs = args;
    this.logData.patientParserArgString = args.join(' ');
    const parserResultDto = this.executeDicomParser(args);
    Logger.logger.trace(TraceTag.Custom, TraceMessage.PATIENT_RESULT_RECEIVED);
    this.logData.patientParserResultKeywordsCount = parserResultDto.keywords?.length;
    this.logData.patientParserResultHexCount = parserResultDto.hex?.length;

    return parserResultDto;
  }

  executeStudyQuery(includePatientTags: boolean): IDicomParserResultDto | null {
    const args = this.dicomQueryArgumentProducer.createStudyQueryArgs(includePatientTags);
    if (!args?.length) {
      this.logData.warnings.push('Study dicom parser query without requested fields');
      return;
    }

    this.logData.studyParserArgs = args;
    this.logData.studyParserArgString = args.join(' ');
    const parserResultDto = this.executeDicomParser(args);
    Logger.logger.trace(TraceTag.Custom, TraceMessage.STUDY_RESULT_RECEIVED);
    this.logData.studyParserResultKeywordsCount = parserResultDto.keywords?.length;
    this.logData.studyParserResultHexCount = parserResultDto.hex?.length;

    return parserResultDto;
  }

  executeSeriesQuery(): IDicomParserResultDto | null {
    const args = this.dicomQueryArgumentProducer.createSeriesQueryArgs();
    if (!args?.length) {
      this.logData.warnings.push('Series dicom parser query without requested fields');
      return;
    }

    this.logData.seriesParserArgs = args;
    this.logData.seriesParserArgString = args.join(' ');
    const parserResultDto = this.executeDicomParser(args);
    Logger.logger.trace(TraceTag.Custom, TraceMessage.SERIES_RESULT_RECEIVED);
    this.logData.seriesParserResultKeywordsCount = parserResultDto.keywords?.length;
    this.logData.seriesParserResultHexCount = parserResultDto.hex?.length;

    return parserResultDto;
  }

  executeCMoveQuery(): IDicomParserResultDto | null {
    const args = this.dicomQueryArgumentProducer.createCMoveQueryArgs();
    if (!args?.length) {
      this.logData.warnings.push('CMove dicom parser query without requested fields');
      return;
    }

    this.logData.cmoveParserArgs = args;
    this.logData.cmoveParserArgString = args.join(' ');
    const parserResultDto = this.executeDicomParser(args);
    Logger.logger.trace(TraceTag.Custom, TraceMessage.CMOVE_RESULT_RECEIVED);
    this.logData.cmoveParserResultKeywordsCount = parserResultDto.keywords?.length;
    this.logData.cmoveParserResultHexCount = parserResultDto.hex?.length;

    return parserResultDto;
  }

  private executeDicomParser(args: string[]): IDicomParserResultDto {
    Logger.logger.trace(TraceTag.Custom, TraceMessage.EXECUTING_DICOM_PARSER);
    let execOutput = '';
    if (is.windows) {
      execOutput = this.executeExecFileWindows(args);
    } else {
      throw new Error(ErrorMessage.PLATFORM_UNSUPPORTED);
    }

    return JSON.parse(execOutput) as IDicomParserResultDto;
  }

  private executeExecFileWindows(args: string[]): string {
    Logger.logger.trace(TraceTag.Custom, 'DicomParser call with arguments: ' + JSON.stringify(args));

    return childProcess.execFileSync(this.getExecFilePath(), args, { encoding: 'utf-8' });
  }

  private getExecFilePath(): string {
    if (!this.execFilePath) {
      if (is.windows) {
        this.execFilePath = this.getExecFilePathWindows();
      } else {
        throw new Error(ErrorMessage.PLATFORM_UNSUPPORTED);
      }

      this.fileSystemService.assertPath(this.execFilePath, ErrorMessage.PARSER_EXEC_NOT_EXIST + this.execFilePath);
    }

    return this.execFilePath;
  }

  private getExecFilePathWindows(): string {
    return is.development
      ? join(this.fileSystemService.getEntryFolderPath(), 'build', 'bin', 'windows', 'RadioReport.DicomCommandlineParser.exe')
      : join(dirname(app.getPath('exe')), 'bin', 'RadioReport.DicomCommandlineParser.exe');
  }
}
