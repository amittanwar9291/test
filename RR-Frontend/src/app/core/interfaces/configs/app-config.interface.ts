import { IServicesConfig } from './services-config.inteface';

export interface IAppConfig {
  env: {
    name: string;
    production: boolean;
    platform: string;
  };
  httpOptions: {
    getRetryCount: 0;
    postRetryCount: 0;
    deleteRetryCount: 0;
    updateRetryCount: 0;
  };
  baseUrl: string;
  coreReportListUrl: string;
  coreTrackingUrl: string;
  auth: {
    signIn: string;
    signOut: string;
    refreshToken: string;
    clientToken: string;
  };
  users: string;
  autosaveTime: number;
  version: string;
  enableTracking: boolean;
  centerspecificPreferences: string;
  instituteManager: {
    settings: string;
    institutes: string;
  };
  licenseManager: string;
  patientManager: string;
  servicesUrls: IServicesConfig;
  customerLogo: string;
  fileExposer: string;
  importInterface: string;
  reportListSignalRHub: string;
  instituteId: string;
  statisticsDataUrl: string;
}
