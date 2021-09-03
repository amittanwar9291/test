import { CliManager } from '../services/cli-manager.service';
import { ReportImporter } from '../services/report-importer.service';
import { DtoBoMapper } from '../services/dto-bo-mapper.service';
import { ImportLogData } from './import-log-data.model';
import { DicomQueryExecutor } from '../services/dicom-query-executor.service';
import { DicomQueryArgumentProducer } from '../services/dicom-query-argument-producer.service';
import { DicomMapManager } from '../services/dicom-map-manager.service';
import { RequiredFieldsService } from '../services/required-fields.service';
import { DicomValueService } from '../services/dicom-value.service';
import { ImportValueProducer } from '../services/import-value-producer.service';
import { DicomParserResultService } from '../services/dicom-parser-result.service';
import { FileSystemService } from '../services/file-system.service';
import { IpcMessageService } from '../services/ipc-message.service';
import { ConfigManager } from '../services/config-manager.service';
import { ErrorHandler } from '../services/error-handler.service';
import { IDicomQueryExecutor } from '../interfaces/dicom-query-executor.interface';
import { AppContext } from './app-context.model';
import { DicomQueryExecutorMock } from '../mocking/dicom-query-executor-mock.service';

// import scoped services can only be 'injected' into other import scoped ones, in app scoped services
// they need to be retrieved by the service provider instance only due to recreation of import scope
export class ImportScope {
  private readonly logData: ImportLogData;
  private readonly dtoBoMapper: DtoBoMapper;
  private readonly reportImporterInternal: ReportImporter;
  private readonly cliManagerInternal: CliManager;
  private readonly dicomMapManager: DicomMapManager;
  private readonly dicomQueryArgumentProducer: DicomQueryArgumentProducer;
  private readonly dicomQueryExecutor: IDicomQueryExecutor;
  private readonly requiredFieldsService: RequiredFieldsService;
  private readonly dicomValueService: DicomValueService;
  private readonly importValueProducer: ImportValueProducer;
  private readonly dicomParserResultService: DicomParserResultService;

  constructor(
    fileSystemService: FileSystemService,
    ipcMessageService: IpcMessageService,
    configManager: ConfigManager,
    errorHandler: ErrorHandler
  ) {
    this.logData = new ImportLogData();
    this.dtoBoMapper = new DtoBoMapper(this.logData);
    this.cliManagerInternal = new CliManager(configManager, this.logData);
    this.dicomMapManager = new DicomMapManager();
    this.dicomQueryArgumentProducer = new DicomQueryArgumentProducer(this.dicomMapManager, this.cliManagerInternal, configManager);
    this.dicomQueryExecutor = AppContext.mockParser
      ? new DicomQueryExecutorMock(fileSystemService)
      : new DicomQueryExecutor(this.dicomQueryArgumentProducer, fileSystemService, this.logData);
    this.dicomValueService = new DicomValueService(this.logData);
    this.requiredFieldsService = new RequiredFieldsService(this.dicomValueService, ipcMessageService);
    this.importValueProducer = new ImportValueProducer(this.dicomValueService, this.dicomMapManager, this.logData);
    this.dicomParserResultService = new DicomParserResultService(
      this.dicomQueryExecutor,
      this.cliManagerInternal,
      this.dtoBoMapper,
      this.dicomValueService,
      this.logData
    );
    this.reportImporterInternal = new ReportImporter(
      this.logData,
      ipcMessageService,
      configManager,
      errorHandler,
      this.dtoBoMapper,
      this.requiredFieldsService,
      this.importValueProducer,
      this.dicomMapManager,
      this.dicomParserResultService,
      this.cliManagerInternal,
      this.dicomValueService
    );
  }

  get reportImporter(): ReportImporter {
    return this.reportImporterInternal;
  }

  get cliManager(): CliManager {
    return this.cliManagerInternal;
  }
}
