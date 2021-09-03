import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from 'app/app.config';
import { Observable } from 'rxjs';
import { LicenseListItemApiModel } from '@models/shared/settings/license-list-item-api.model';
import { LicenseListItemUiModel } from '@models/shared/settings/license-list-item-ui.model';
import { LicenseListItemMapper } from '@mappings/shared/settings/license-list-item.mapper';
import { map } from 'rxjs/operators';
import { LicenseDetailsMapper } from '@mappings/shared/settings/license-details.mapper';
import { LicenseDetailsUiModel } from '@models/shared/settings/license-details-ui.model';
import { LicenseDetailsApiModel } from '@models/shared/settings/license-details-api.model';
import { LicenseFractionListResponseUiModel } from '@models/shared/settings/license-fraction-list-response-ui.model';
import { LicenseFractionsRequest } from '@models/shared/settings/license-fractions-request.model';
import { LicenseFractionListResponseApiModel } from '@models/shared/settings/license-fraction-list-response-api.model';
import { LicenseFractionListResponseMapper } from '@mappings/shared/settings/license-fraction-list-response.mapper';

@Injectable({
  providedIn: 'root'
})
export class LicenseHttpService {
  constructor(
    private http: HttpClient,
    private licenseListItemMapper: LicenseListItemMapper,
    private licenseDetailsMapper: LicenseDetailsMapper,
    private licenseFractionListResponseMapper: LicenseFractionListResponseMapper
  ) {}

  get baseUrl() {
    return `${AppConfig.settings.baseUrl}/${AppConfig.settings.licenseManager}`;
  }

  getLicenses(): Observable<LicenseListItemUiModel[]> {
    return this.http
      .get<LicenseListItemApiModel[]>(`${this.baseUrl}/Licenses`)
      .pipe(map(items => items.map(item => this.licenseListItemMapper.mapToUI(item))));
  }

  getLicenseDetails(licenseId: string): Observable<LicenseDetailsUiModel> {
    const params = new HttpParams().append('licenseId', licenseId);

    return this.http
      .get<LicenseDetailsApiModel>(`${this.baseUrl}/LicenseDetails`, { params })
      .pipe(map(details => this.licenseDetailsMapper.mapToUI(details)));
  }

  getLicenseFractions(request: LicenseFractionsRequest): Observable<LicenseFractionListResponseUiModel> {
    return this.http
      .post<LicenseFractionListResponseApiModel>(`${this.baseUrl}/LicenseFractions`, request)
      .pipe(map(response => this.licenseFractionListResponseMapper.mapToUI(response)));
  }

  uploadLicense(formData): Observable<any> {
    return this.http.post(`${this.baseUrl}/UploadLicense`, formData);
  }
}
