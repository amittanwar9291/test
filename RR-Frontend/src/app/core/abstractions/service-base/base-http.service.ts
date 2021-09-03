import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppConfig } from 'app/app.config';

import { ModelBase } from '@models/model-base';

import { IMapper, INoParamConstructor, IHttpService } from '@interfaces/index';

import { AdapterBase } from '@abstractions/service-adapter/adapter-base';
import { LoggingService } from '@services/shared/logging/logging.service';

export class BaseHttpService<TModelAPI extends ModelBase, TModelUI extends ModelBase, TMapper extends IMapper<TModelAPI, TModelUI>>
  implements IHttpService {
  protected route: string;
  serviceOptions: any;

  protected adapter: AdapterBase<TModelAPI, TModelUI, TMapper>;

  constructor(
    private routeConfig: string | string[], // retroffiting measure
    protected httpClient: HttpClient,
    protected mapper: TMapper,
    private apiCtor: INoParamConstructor<TModelAPI>,
    private uiCtor: INoParamConstructor<TModelUI>,
    public logger: LoggingService
  ) {
    this.getSettings();

    this.adapter = new AdapterBase<TModelAPI, TModelUI, TMapper>(this.mapper, this.apiCtor, this.uiCtor);
  }

  public get(id: any, params?: HttpParams): Observable<TModelUI> {
    return this.httpClient
      .get<TModelAPI>(this.route + '/' + id, { params })
      .pipe(
        map((out: TModelAPI) => {
          return this.adapter.adaptToUI(out);
        })
      );
  }

  public post(model: TModelUI, headers?: HttpHeaders): Observable<TModelUI> {
    const modelAPI: TModelAPI = this.adapter.adaptToAPI(model);

    return this.httpClient
      .post<TModelAPI>(this.route, modelAPI, { headers })
      .pipe(
        map((out: TModelAPI) => {
          return this.adapter.adaptToUI(out);
        })
      );
  }

  public update(model: TModelUI, headers?: HttpHeaders, withoutId?: boolean): Observable<TModelUI> {
    const modelAPI: TModelAPI = this.adapter.adaptToAPI(model);
    const route = withoutId ? `${this.route}` : `${this.route}/${model.id}`;

    return this.httpClient
      .put<TModelAPI>(route, modelAPI, { headers })
      .pipe(
        map((out: TModelAPI) => {
          return this.adapter.adaptToUI(out);
        })
      );
  }

  public delete(id: any): Observable<TModelUI> {
    return this.httpClient.delete<TModelAPI>(this.route + '/' + id).pipe(
      map((out: TModelAPI) => {
        return this.adapter.adaptToUI(out);
      })
    );
  }

  private getSettings() {
    // done that way for backwards compatibility of services
    // first element is baseUrl of given service, second is subroute
    if (Array.isArray(this.routeConfig)) {
      this.route = this.routeConfig[0] + '/' + this.routeConfig[1];
    } else {
      this.route = AppConfig.settings.baseUrl + '/' + this.routeConfig;
    }

    this.serviceOptions = AppConfig.settings.httpOptions;
  }
}
