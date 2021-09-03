import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'app/app.config';
import { IPdfDownloadData } from '@interfaces/pdf-download-data.interface';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';

@Injectable({
  providedIn: 'root'
})
export class InfoDialogService {
  constructor(
    private http: HttpClient,
    private translate: TranslateService,
    private navigationReportDataService: NavigationReportDataService
  ) {}

  getPdf(pdfFileReference: string): Observable<any> {
    const language = this.translate.currentLang;
    const module = this.navigationReportDataService.getReportData()?.examinationType;
    const pdfReferenceFolder = module && !pdfFileReference.startsWith('uni') ? module : 'Shared';
    const route =
      AppConfig.settings.baseUrl + AppConfig.settings.fileExposer + `/InfoFile/${pdfReferenceFolder}/${pdfFileReference}/${language}`;
    return this.http.get<IPdfDownloadData>(route);
  }
}
