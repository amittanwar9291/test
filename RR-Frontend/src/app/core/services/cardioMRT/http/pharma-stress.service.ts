import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'app/app.config';

@Injectable({
  providedIn: 'root'
})
export class PharmaStressService {
  private readonly stressServiceUrl = AppConfig.settings.servicesUrls.cardioMRT.pharmaStressStatus;
  private readonly baseUrl = AppConfig.settings.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getStatus(id: number): Observable<boolean> {
    return this.httpClient.get<boolean>(this.baseUrl + '/' + this.stressServiceUrl + '?id=' + id);
  }
}
