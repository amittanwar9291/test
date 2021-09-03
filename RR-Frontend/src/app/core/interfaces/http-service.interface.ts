import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ModelBase } from '@models/model-base';

export interface IHttpService {
  get(id: string, params?: HttpParams): Observable<ModelBase>;
  post(model: ModelBase, headers?: HttpHeaders): Observable<ModelBase>;
  update(model: ModelBase, headers?: HttpHeaders): Observable<ModelBase>;
  delete(id: string): Observable<ModelBase>;
}
