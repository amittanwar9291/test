import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'app/app.config';
import { IReportsData, IAverageTimesData, IReportsPerRadiologistData } from '@interfaces/statistics.interface';

@Injectable({
  providedIn: 'root'
})
export class StatisticsHttpService {
  constructor(private http: HttpClient) {}

  private route = `${AppConfig.settings.baseUrl}${AppConfig.settings.statisticsDataUrl}`;

  getReportsData(): Observable<IReportsData[]> {
    return this.http.get<IReportsData[]>(`${this.route}/Reports`);
  }

  getAverageTimesData(): Observable<IAverageTimesData[]> {
    return this.http.get<IAverageTimesData[]>(`${this.route}/AverageTimes`);
  }

  getReportsPerRadiologistData(): Observable<IReportsPerRadiologistData[]> {
    return this.http.get<IReportsPerRadiologistData[]>(`${this.route}/ReportsPerRadiologist`);
  }
}
