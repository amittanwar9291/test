export interface IConfig {
  baseUrl: string;
  updaterUrl: string;
  instituteId: string;
  enableTracking: boolean;
  enableTraceLog: boolean;
  enableProtocolClient: boolean;
  enableImportLogs: boolean;
  importModulePreSelect: string;
  pacs: {
    host: string;
    port: number;
    calledAe: string;
    callingAe: string;
    requestType: string;
    scpPort: number;
  };
}
