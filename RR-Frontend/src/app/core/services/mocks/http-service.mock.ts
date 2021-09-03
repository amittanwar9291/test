import { IHttpService } from '@interfaces/http-service.interface';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IModel } from '@interfaces/model.interface';
import { delay, map } from 'rxjs/operators';

export class MockHttpService implements IHttpService {
  public get(id: string, params?: HttpParams): Observable<IModel> {
    return of({ id }).pipe(delay(500));
  }

  public post(model: IModel, headers?: HttpHeaders): Observable<IModel> {
    return of(model).pipe(
      delay(500),
      map(out => {
        out.id = '00000000-0000-0000-0000-000000000001';
        return out;
      })
    );
  }

  public update(model: IModel, headers?: HttpHeaders): Observable<IModel> {
    // tslint:disable: no-string-literal
    return of(model).pipe(
      delay(500),
      map(out => {
        if (out['updatedProp']) {
          out['updatedProp']++;
        } else {
          out['updatedProp'] = 1;
        }

        return out;
      })
    );
  }

  public delete(id: any): Observable<IModel> {
    return of({ id }).pipe(delay(500));
  }

  public sleep(ms: number): Promise<number> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
