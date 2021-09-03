import { IConfig } from '../interfaces/config.interface';
import { join } from 'path';
import { Logger } from './logger.service';
import { ErrorMessage } from '../enums/error-message.enum';
import { FileSystemService } from './file-system.service';
import {
  BASE_URL_CONFIG,
  DICOM_CALLED_AET_CONFIG,
  DICOM_CALLING_AET_CONFIG,
  DICOM_HOST_CONFIG,
  DICOM_PORT_CONFIG,
  DICOM_REQUEST_TYPE_CONFIG,
  DICOM_SCP_PORT_CONFIG,
  IMPORT_MODULE_PRESELECT,
  IMPORTABLE_MODULES,
  IMPORTLOGS_CONFIG,
  INSTITUTE_ID_CONFIG,
  PROTOCOL_CLIENT_CONFIG,
  TRACELOG_CONFIG,
  TRACKING_CONFIG,
  UPDATE_URL_CONFIG
} from '../constants';
import { InvalidPacsConfigurationError } from '../models/errors/invalid-pacs-configuration-error.model';

// app scoped
export class ConfigManager {
  private configInternal: IConfig;

  constructor(private configFolderPath: string, private fileSystemService: FileSystemService) {}

  get config(): IConfig {
    if (!this.configInternal) {
      this.configInternal = this.readConfigFile();
      const module = this.configInternal.importModulePreSelect;
      this.configInternal.importModulePreSelect = this.normalizeModulePreSelection(module);
    }

    return this.configInternal;
  }

  get isConfigValid(): boolean {
    return this.isPacsConfigured() && this.isBaseUrlConfigured();
  }

  get isCMoveRequest(): boolean {
    return this.config.pacs.requestType && this.config.pacs.requestType.toUpperCase() === 'cmove'.toUpperCase();
  }

  readConfigFile(): IConfig {
    const configPath = join(this.configFolderPath, 'config.json');
    if (!this.fileSystemService.existsSync(configPath)) {
      this.createConfigFile(configPath);
    }

    return this.fileSystemService.readJsonSync(configPath, error => Logger.logger.error(ErrorMessage.READ_CONFIG_FAILED, error));
  }

  validateConfigForImport(): void {
    if (!this.isPacsConfigured()) {
      throw new InvalidPacsConfigurationError(ErrorMessage.MISSING_PACS_CONFIG);
    }

    if (!this.isBaseUrlConfigured()) {
      throw new InvalidPacsConfigurationError(ErrorMessage.MISSING_BASEURL_CONFIG);
    }

    if (!this.isCMoveConfigured()) {
      throw new InvalidPacsConfigurationError(ErrorMessage.MISSING_SCPPORT);
    }
  }

  normalizeModulePreSelection(module: string): string {
    if (!module || !IMPORTABLE_MODULES.includes(module.toUpperCase())) {
      return '';
    }

    const match = new RegExp(/^(.+)(mrt|ct|mx)$/gi).exec(module);
    if (match != null && match.length > 1) {
      return `${match[1]}${match[2].toUpperCase()}`;
    }

    return '';
  }

  private createConfigFile(path: string): void {
    const config: IConfig = {
      baseUrl: BASE_URL_CONFIG,
      updaterUrl: UPDATE_URL_CONFIG,
      // @ts-ignore
      instituteId: INSTITUTE_ID_CONFIG,
      // @ts-ignore
      enableTracking: TRACKING_CONFIG === 'ENABLED',
      // @ts-ignore
      enableTraceLog: TRACELOG_CONFIG === 'ENABLED',
      // @ts-ignore
      enableProtocolClient: PROTOCOL_CLIENT_CONFIG === 'ENABLED',
      // @ts-ignore
      enableImportLogs: IMPORTLOGS_CONFIG === 'ENABLED',
      // @ts-ignore
      importModulePreSelect: IMPORT_MODULE_PRESELECT,
      pacs: {
        host: DICOM_HOST_CONFIG,
        port: parseInt(DICOM_PORT_CONFIG, 10) || 0,
        callingAe: DICOM_CALLING_AET_CONFIG,
        calledAe: DICOM_CALLED_AET_CONFIG,
        requestType: DICOM_REQUEST_TYPE_CONFIG,
        scpPort: parseInt(DICOM_SCP_PORT_CONFIG, 10) || 0
      }
    };

    this.fileSystemService.writeJsonSync(path, config, error => Logger.logger.error(ErrorMessage.CREATE_CONFIG_FAILED, error));
  }

  private isPacsConfigured(): boolean {
    return !!this.config.pacs?.host && !!this.config.pacs?.port;
  }

  private isBaseUrlConfigured(): boolean {
    return this.config.baseUrl?.includes('http') === true;
  }

  private isCMoveConfigured(): boolean {
    return !this.isCMoveRequest || (this.isCMoveRequest && !!this.config.pacs?.scpPort);
  }
}
