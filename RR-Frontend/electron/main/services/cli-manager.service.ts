import { PROTOCOL_NAME } from '../constants';
import { DicomQueryParams } from '../models/dicom-query-data.model';
import minimist from 'minimist';
import { DicomQueryMode } from '../enums/dicom-query-mode.enum';
import { ImportLogData } from '../models/import-log-data.model';
import { AppContext } from '../models/app-context.model';
import { is } from 'electron-util';
import { Logger } from './logger.service';
import { ErrorMessage } from '../enums/error-message.enum';
import { CheckExistingImportData } from '../models/check-existing-import-data.model';
import { ConfigManager } from './config-manager.service';
import { CmoveWithoutStudyIdError } from '../models/errors/cmove-without-study-id-error.model';
import { UserLogin } from '../models/user-login.model';

// import scoped
export class CliManager {
  private dicomQueryParamsInternal: DicomQueryParams;
  private userLoginParamsInternal: UserLogin;
  private preSelectedModuleInternal: string;

  constructor(private configManager: ConfigManager, private logData: ImportLogData) {
    this.dicomQueryParamsInternal = new DicomQueryParams();
    this.userLoginParamsInternal = new UserLogin();
    this.preSelectedModuleInternal = '';
  }

  get dicomQueryParams(): DicomQueryParams {
    return this.dicomQueryParamsInternal;
  }

  get dicomQueryMode(): DicomQueryMode {
    return this.getDicomQueryMode();
  }

  get isImportRequested(): boolean {
    return this.dicomQueryMode !== DicomQueryMode.None;
  }

  get preSelectedModule(): string {
    return this.preSelectedModuleInternal;
  }

  parseCliArguments(argv: string[]): void {
    this.logData.argv = argv;
    let args = argv.slice(1);
    if (!args.length) {
      return;
    }

    args = this.maybeSetArgsByProtocolCall(args);
    this.logData.cliArgs = args;
    const parsedArgs = this.parseArguments(args);
    this.dicomQueryParamsInternal = this.createDicomQueryParams(parsedArgs);
    this.userLoginParamsInternal = this.createUserLoginParams(parsedArgs);
    this.setEnvironmentVariablesForLogin(this.userLoginParamsInternal);
    const module = parsedArgs.module || parsedArgs.MODULE;
    this.preSelectedModuleInternal = this.configManager.normalizeModulePreSelection(module);
    this.logData.dicomQueryParams = this.dicomQueryParamsInternal;
    AppContext.isServe = false;
    AppContext.mockParser = false;
    if (is.development) {
      AppContext.isServe = !!parsedArgs.serve;
      AppContext.openDevTools = !!parsedArgs.tools;
      AppContext.mockParser = !!parsedArgs.mockParser;
      AppContext.studiesOfPatientMockFile = parsedArgs.studiesOfPatientMockFile;
      AppContext.patientMockFile = parsedArgs.patientMockFile;
      AppContext.studyMockFile = parsedArgs.studyMockFile;
      AppContext.seriesMockFile = parsedArgs.seriesMockFile;
      AppContext.cmoveMockFile = parsedArgs.cmoveMockFile;
    }
  }

  validateCliArguments(): void {
    if (this.configManager.isCMoveRequest && !this.dicomQueryParamsInternal.studyInstanceUid) {
      throw new CmoveWithoutStudyIdError();
    }
  }

  getExistingImportCheckData(): CheckExistingImportData {
    const data = new CheckExistingImportData();
    data.studyInstanceUid = this.dicomQueryParamsInternal.studyInstanceUid;
    data.accessionNumber = this.dicomQueryParamsInternal.accessionNumber;

    return data;
  }

  private maybeSetArgsByProtocolCall(args: string[]): string[] {
    const protocolClientArgIndex = args.findIndex(a => a.startsWith(`${PROTOCOL_NAME}:`));
    if (protocolClientArgIndex > -1) {
      args = args.map(a => decodeURI(a));

      return args[protocolClientArgIndex]
        .replace(`${PROTOCOL_NAME}:`, '')
        .split('&')
        .map(a => `--${a}`);
    }

    return args;
  }

  private parseArguments(args: string[]): minimist.ParsedArgs {
    return minimist(args, {
      string: [
        'patientId',
        'patientid',
        'PATIENTID',
        'accessionNumber',
        'accessionnumber',
        'ACCESSIONNUMBER',
        'studyinstanceuid',
        'studyInstanceUid',
        'STUDYINSTANCEUID',
        'module',
        'MODULE',
        'userName',
        'username',
        'USERNAME',
        'password',
        'PASSWORD',
        'passWord'
      ]
    });
  }

  private createDicomQueryParams(parsedArgs: minimist.ParsedArgs): DicomQueryParams {
    const patientId = parsedArgs.patientId || parsedArgs.patientid || parsedArgs.PATIENTID || '';
    const studyInstanceUid = parsedArgs.studyInstanceUid || parsedArgs.studyinstanceuid || parsedArgs.STUDYINSTANCEUID || '';
    const accessionNumber = parsedArgs.accessionNumber || parsedArgs.accessionnumber || parsedArgs.ACCESSIONNUMBER || '';

    return {
      patientId: this.removeSpecialCharacters(patientId),
      studyInstanceUid: this.removeSpecialCharacters(studyInstanceUid),
      accessionNumber: this.removeSpecialCharacters(accessionNumber)
    };
  }

  private getDicomQueryMode(): DicomQueryMode {
    const params = this.dicomQueryParamsInternal;
    if (!params.patientId && !params.accessionNumber && !params.studyInstanceUid) {
      return DicomQueryMode.None;
    }

    if (this.configManager.isCMoveRequest) {
      return DicomQueryMode.CMove;
    }

    if (params.patientId && !params.accessionNumber && !params.studyInstanceUid) {
      return DicomQueryMode.OnlyPatient;
    }

    if (!params.patientId && (params.accessionNumber || params.studyInstanceUid)) {
      return DicomQueryMode.OnlyStudy;
    }

    return DicomQueryMode.PatientAndStudy;
  }

  private createUserLoginParams(parsedArgs: minimist.ParsedArgs): UserLogin {
    const username = parsedArgs.USERNAME || parsedArgs.username || parsedArgs.userName || '';
    const password = parsedArgs.PASSWORD || parsedArgs.password || parsedArgs.passWord || '';

    return {
      username,
      password
    };
  }

  private setEnvironmentVariablesForLogin(loginParams: UserLogin) {
    const userName = 'USER_NAME';
    const password = 'PASSWORD';
    process.env[userName] = loginParams.username;
    process.env[password] = loginParams.password;
  }

  private removeSpecialCharacters(arg: string): string {
    if (!arg) {
      return '';
    }

    let truncated = arg.replace(/[&\/\\#,+()$~%'":*?<>{}]/g, '');
    truncated = truncated.replace(/[\u200B-\u200D\uFEFF]/g, '');
    if (truncated !== arg) {
      Logger.logger.warning(`${ErrorMessage.SPECIAL_CHARACTERS_REMOVED} | ${arg} | ${truncated}`);
    }

    return truncated;
  }
}
