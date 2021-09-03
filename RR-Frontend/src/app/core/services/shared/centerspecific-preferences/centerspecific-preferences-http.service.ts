import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '@abstractions/service-base/base-http.service';

import { CenterspecificPreferencesModuleApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-module-api.model';
import { CenterspecificPreferencesModuleUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-module-ui.model';

import { CenterspecificPreferencesModuleMapper } from '@mappings/shared/centerspecific-preferences/centerspecific-preferences-module.mapper';

import { LoggingService } from '@services/shared';

import { AppConfig } from 'app/app.config';

import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CenterspecificPreferencesHttpService extends BaseHttpService<
  CenterspecificPreferencesModuleApiModel,
  CenterspecificPreferencesModuleUiModel,
  CenterspecificPreferencesModuleMapper
> {
  constructor(httpClient: HttpClient, mapper: CenterspecificPreferencesModuleMapper, logger: LoggingService) {
    super(
      AppConfig.settings.centerspecificPreferences,
      httpClient,
      mapper,
      CenterspecificPreferencesModuleApiModel,
      CenterspecificPreferencesModuleUiModel,
      logger
    );
  }

  public getModules(): Observable<CenterspecificPreferencesModuleUiModel[]> {
    return this.httpClient.get<CenterspecificPreferencesModuleApiModel[]>(this.route).pipe(
      retry(this.serviceOptions.getRetryCount),
      map((out: CenterspecificPreferencesModuleApiModel[]) => {
        return out.map(
          (cspModule: CenterspecificPreferencesModuleApiModel): CenterspecificPreferencesModuleUiModel => {
            return this.mapper.mapToUI(cspModule, new CenterspecificPreferencesModuleUiModel());
          }
        );
      })
    );
  }

  public getCollection(specificUrl?: string): Observable<CenterspecificPreferencesModuleUiModel> {
    return this.httpClient.get<CenterspecificPreferencesModuleApiModel>(this.route + '/' + specificUrl).pipe(
      retry(this.serviceOptions.getRetryCount),
      map((out: CenterspecificPreferencesModuleApiModel) => {
        return this.mapper.mapToUI(out, new CenterspecificPreferencesModuleUiModel());
      })
    );
  }
}
