import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import {
  IAppConfig,
  IModuleConfigBase,
  IServicesConfig,
  IPelvisMrtConfig,
  IAngiographyMrtConfig,
  ICardioMrtConfig,
  IElbowMrtConfig,
  IFeetMrtConfig,
  IHandMrtConfig,
  IHipMrtConfig,
  IShoulderMrtConfig,
  ISpineCtConfig,
  IThoraxCtConfig,
  ISpineMrtConfig,
  IMammaMrtConfig,
  IKneeMrtConfig,
  IMammaMxConfig,
  IAbdomenMrtConfig,
  INeckMrtConfig,
  IHeadMrtConfig,
  IHeadCtConfig,
  IAbdomenCtConfig
} from '@interfaces/configs';
import { IThoraxMrtConfig } from '@interfaces/configs/thorax-mrt-config.interface';
import { ICustomReportsConfig } from '@interfaces/configs/custom-reports-config.interface';
import { IAngiographyCtConfig } from '@interfaces/configs/angiography-ct-config.interface';

@Injectable()
export class AppConfig {
  static settings: IAppConfig;

  static pelvisMrtConfig: IPelvisMrtConfig;
  static angiographyMrtConfig: IAngiographyMrtConfig;
  static cardioMrtConfig: ICardioMrtConfig;
  static elbowMrtConfig: IElbowMrtConfig;
  static feetMrtConfig: IFeetMrtConfig;
  static handMrtConfig: IHandMrtConfig;
  static hipMrtConfig: IHipMrtConfig;
  static kneeMrtConfig: IKneeMrtConfig;
  static mammaMrtConfig: IMammaMrtConfig;
  static shoulderMrtConfig: IShoulderMrtConfig;
  static spineCtConfig: ISpineCtConfig;
  static spineMrtConfig: ISpineMrtConfig;
  static thoraxCtConfig: IThoraxCtConfig;
  static mammaMxConfig: IMammaMxConfig;
  static abdomenMRTConfig: IAbdomenMrtConfig;
  static thoraxMrtConfig: IThoraxMrtConfig;
  static neckMrtConfig: INeckMrtConfig;
  static headMrtConfig: IHeadMrtConfig;
  static angiographyCtConfig: IAngiographyCtConfig;
  static headCtConfig: IHeadCtConfig;
  static abdomenCtConfig: IAbdomenCtConfig;

  static customReports: ICustomReportsConfig[];

  constructor(private http: HttpClient) {}

  load() {
    let jsonFile = '';
    if (environment.name === 'docker') {
      jsonFile = `assets/config/config.prod.json`;
    } else {
      jsonFile = `assets/config/config.${environment.name}.json`;
    }

    return new Promise<void>((resolve, reject) => {
      this.http
        .get(jsonFile)
        .toPromise()
        .then((responseConfigs: IAppConfig) => {
          AppConfig.settings = responseConfigs;

          return this.getServicesSettings();
        })
        .then((servicesUrls: IServicesConfig) => {
          AppConfig.settings.servicesUrls = servicesUrls;

          this.assignServicesSettings();

          return this.getCustomReportSettings();
        })
        .then(() => {
          resolve();
        })
        .catch((response: any) => {
          reject(`Could not load file': ${JSON.stringify(response)}`);
        });
    });
  }

  private getServicesSettings() {
    const servicesJsonFile = `assets/config/services-config.json`;

    return this.http.get(servicesJsonFile).toPromise();
  }

  private getCustomReportSettings() {
    const customReportJsonFile = `assets/config/custom-reports-config.json`;

    return new Promise<void>(resolve => {
      this.http.get(customReportJsonFile).subscribe(
        (customReports: ICustomReportsConfig[]) => {
          AppConfig.customReports = customReports;
          resolve();
        },
        () => {
          // custom reports file is optional, if doesn't exist then config is an empty list
          AppConfig.customReports = [];
          resolve();
        }
      );
    });
  }

  private assignServicesSettings() {
    this.assignBaseUrls(AppConfig.settings);

    AppConfig.pelvisMrtConfig = AppConfig.settings.servicesUrls.pelvisMRT;
    AppConfig.angiographyMrtConfig = AppConfig.settings.servicesUrls.angiographyMRT;
    AppConfig.cardioMrtConfig = AppConfig.settings.servicesUrls.cardioMRT;
    AppConfig.elbowMrtConfig = AppConfig.settings.servicesUrls.elbowMRT;
    AppConfig.feetMrtConfig = AppConfig.settings.servicesUrls.feetMRT;
    AppConfig.handMrtConfig = AppConfig.settings.servicesUrls.handMRT;
    AppConfig.hipMrtConfig = AppConfig.settings.servicesUrls.hipMRT;
    AppConfig.kneeMrtConfig = AppConfig.settings.servicesUrls.kneeMRT;
    AppConfig.mammaMrtConfig = AppConfig.settings.servicesUrls.mammaMRT;
    AppConfig.shoulderMrtConfig = AppConfig.settings.servicesUrls.shoulderMRT;
    AppConfig.spineCtConfig = AppConfig.settings.servicesUrls.spineCT;
    AppConfig.spineMrtConfig = AppConfig.settings.servicesUrls.spineMRT;
    AppConfig.thoraxCtConfig = AppConfig.settings.servicesUrls.thoraxCT;
    AppConfig.mammaMxConfig = AppConfig.settings.servicesUrls.mammaMX;
    AppConfig.abdomenMRTConfig = AppConfig.settings.servicesUrls.abdomenMRT;
    AppConfig.thoraxMrtConfig = AppConfig.settings.servicesUrls.thoraxMRT;
    AppConfig.neckMrtConfig = AppConfig.settings.servicesUrls.neckMRT;
    AppConfig.headMrtConfig = AppConfig.settings.servicesUrls.headMRT;
    AppConfig.angiographyCtConfig = AppConfig.settings.servicesUrls.angiographyCT;
    AppConfig.headCtConfig = AppConfig.settings.servicesUrls.headCT;
    AppConfig.abdomenCtConfig = AppConfig.settings.servicesUrls.abdomenCT;
  }

  private assignBaseUrls(appConfigs: IAppConfig) {
    for (const moduleSettingKey of Object.keys(appConfigs.servicesUrls)) {
      const moduleSetting = appConfigs.servicesUrls[moduleSettingKey] as IModuleConfigBase;

      if (!moduleSetting.localBaseURL) {
        appConfigs.servicesUrls[moduleSettingKey].localBaseURL = appConfigs.baseUrl;
      }
    }
  }
}
