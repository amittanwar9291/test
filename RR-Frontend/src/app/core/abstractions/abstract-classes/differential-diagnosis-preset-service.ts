import { Observable } from 'rxjs';
import { IModel } from '@interfaces/model.interface';
import { FindingBase } from '@models/shared/finding/finding.base';
import { HttpParams } from '@angular/common/http';

export abstract class DifferentialDiagnosisPresetService {
  abstract get(presetName: string): Observable<IModel>;
  abstract getPreset(presetName: string, additionalParams: HttpParams, asArray?: boolean): Observable<FindingBase | FindingBase[]>;
}
