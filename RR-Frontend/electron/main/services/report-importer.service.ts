import { IpcMessageService } from './ipc-message.service';
import { Logger } from './logger.service';
import { ConfigManager } from './config-manager.service';
import { ImportLogData } from '../models/import-log-data.model';
import { InfoMessage } from '../enums/info-message.enum';
import { DtoBoMapper } from './dto-bo-mapper.service';
import { ErrorHandler } from './error-handler.service';
import { RequiredFieldsService } from './required-fields.service';
import { ImportReportRequest } from '../models/import-report-request.model';
import { ModuleSelectionData } from '../models/module-selection-data.model';
import { ImportValueProducer } from './import-value-producer.service';
import { ImportValue } from '../models/import-value.model';
import { DicomMapManager } from './dicom-map-manager.service';
import { DicomParserResultService } from './dicom-parser-result.service';
import { CliManager } from './cli-manager.service';
import { DicomQueryMode } from '../enums/dicom-query-mode.enum';
import { StudySelectionData } from '../models/study-selection-data.model';
import { StudyData } from '../models/study-data.model';
import { DicomValueService } from './dicom-value.service';
import { KnownDicomTagKeys } from '../models/known-dicom-tag-keys.model';
import { DicomParserResult } from '../models/dicom-parser-result.model';
import { IStudySelectionDataDto } from '../interfaces/dtos/study-selection-data-dto.interface';
import { IModuleSelectionDataDto } from '../interfaces/dtos/module-selection-data-dto.interface';
import { ICheckExistingImportDataDto } from '../interfaces/dtos/check-existing-import-data-dto.interface';

// import scoped
export class ReportImporter {
  constructor(
    private logData: ImportLogData,
    private ipcMessageService: IpcMessageService,
    private configManager: ConfigManager,
    private errorHandler: ErrorHandler,
    private dtoBoMapper: DtoBoMapper,
    private requiredFieldsService: RequiredFieldsService,
    private importValueProducer: ImportValueProducer,
    private dicomMapManager: DicomMapManager,
    private dicomParserResultService: DicomParserResultService,
    private cliManager: CliManager,
    private dicomValueService: DicomValueService
  ) {}

  async startImport(): Promise<void> {
    try {
      Logger.logger.info(InfoMessage.IMPORT_REQUESTED);
      Logger.logger.startLogEntryCollection();

      this.configManager.validateConfigForImport();
      this.cliManager.validateCliArguments();
      if (this.cliManager.dicomQueryMode === DicomQueryMode.OnlyPatient) {
        await this.retrieveStudyData();
      }

      const checkExistingData = await this.checkExistingImport();
      this.logData.checkExistingImportData = checkExistingData;
      if (checkExistingData.isNoImportNeeded) {
        this.logImportDataIfEnabled();

        return;
      }

      const moduleData = await this.fetchModuleSelectionData(this.getModuleSelectionRequest());
      this.dicomMapManager.dicomMap = moduleData.dicomMap;
      const { patientOrStudyParserResult: studyParserResult, seriesParserResult } = this.dicomParserResultService.fetchParserResults();
      await this.requiredFieldsService.promptAndCompleteRequiredFieldsIfMissing(studyParserResult);
      const importValues = this.importValueProducer.createImportValues(studyParserResult, seriesParserResult);
      const importRequest = this.createRequest(moduleData, importValues);
      this.logImportDataIfEnabled();
      this.ipcMessageService.sendImportReportRequest(importRequest);
    } catch (error) {
      this.logImportDataIfEnabled();
      this.errorHandler.handleError(error);
    }
  }

  private async retrieveStudyData(): Promise<void> {
    const { patientOrStudyParserResult: patientParserResult } = this.dicomParserResultService.fetchParserResults();
    const studyData = this.getStudiesOfPatientData(patientParserResult);
    const studySelectionData = await this.fetchStudySelectionData(studyData);
    this.cliManager.dicomQueryParams.accessionNumber = studySelectionData.accessionNumber;
    this.cliManager.dicomQueryParams.studyInstanceUid = studySelectionData.studyInstanceUid;
    this.logData.dicomQueryParams = this.cliManager.dicomQueryParams;
  }

  private getStudiesOfPatientData(parserResult: DicomParserResult): StudyData[] {
    const result = [];
    const minLength = Math.min(parserResult.keywords.length, parserResult.hex.length);
    for (let i = 0; i < minLength; i++) {
      const studyData = new StudyData();
      studyData.accessionNumber = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.accessionNumber, i);
      studyData.studyInstanceUid = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.studyInstanceUID, i);
      studyData.studyDescription = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.studyDescription, i);
      if (!studyData.accessionNumber && !studyData.studyInstanceUid) {
        continue;
      }

      const dateString = this.dicomValueService.findDicomValueByKeyPair(parserResult, KnownDicomTagKeys.studyDate, i);
      studyData.studyDate = this.dicomValueService.parseDateString(dateString);
      result.push(studyData);
    }

    return result;
  }

  private async fetchStudySelectionData(studyData: StudyData[]): Promise<StudySelectionData> {
    let studyDataDto: IStudySelectionDataDto;
    studyDataDto = await this.ipcMessageService.promptStudySelection(studyData);

    return this.dtoBoMapper.mapStudySelectionData(studyDataDto);
  }

  private async checkExistingImport(): Promise<ICheckExistingImportDataDto> {
    const checkData = this.cliManager.getExistingImportCheckData();

    return await this.ipcMessageService.checkExistingImport(checkData);
  }

  private getModuleSelectionRequest(): ModuleSelectionData {
    let moduleSelectionData: ModuleSelectionData;
    if (this.cliManager.preSelectedModule || this.configManager.config.importModulePreSelect) {
      moduleSelectionData = new ModuleSelectionData();
      moduleSelectionData.moduleName = this.cliManager.preSelectedModule || this.configManager.config.importModulePreSelect;
    }

    return moduleSelectionData;
  }

  private async fetchModuleSelectionData(moduleData?: ModuleSelectionData): Promise<ModuleSelectionData> {
    let moduleDataDto: IModuleSelectionDataDto;
    moduleDataDto = await this.ipcMessageService.promptModuleSelection(moduleData);

    return this.dtoBoMapper.mapModuleSelectionData(moduleDataDto);
  }

  private createRequest(moduleData: ModuleSelectionData, importValues: ImportValue[]): ImportReportRequest {
    this.logData.loggerEntries = Logger.logger.getLogEntryCollection();
    const request: ImportReportRequest = {
      moduleName: moduleData.moduleName,
      importValues,
      importMode: moduleData.importMode,
      logData: JSON.stringify(this.logData)
    };
    this.logData.importRequest = request;

    return request;
  }

  private logImportDataIfEnabled() {
    try {
      if (this.configManager.config.enableImportLogs) {
        this.logData.loggerEntries = Logger.logger.getLogEntryCollection();
        Logger.logger.info(this.logData);
      }
    } catch {
      // ignore
    }
  }
}
