import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AppConfig } from 'app/app.config';

import { IFileService } from '@interfaces/file-service.interface';

import { FileUiModel } from '@models/shared/uploader/file-ui.model';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

@Injectable({
  providedIn: 'root'
})
export class FileService implements IFileService {
  constructor(private httpService: HttpClient) {}

  private inRoute = '';

  setRoute(route: string): void {
    this.inRoute = route;
  }

  getUploadedFileIds(uploadedFiles: FileUiModel[]): string[] {
    return uploadedFiles.filter((file: FileUiModel): boolean => !!file && !!file.id).map((file: FileUiModel): string => file.id);
  }

  post(
    file: File,
    fileType?: string,
    callbackLoad?: (percentage: number) => void,
    callbackSuccess?: (response: FileUiModel) => void
  ): void {
    const fileData = new FormData();
    fileData.append('file', file, file.name);

    if (fileType) {
      fileData.append('fileType', fileType);
    }

    const anyCallbacks = callbackLoad !== null && callbackSuccess !== null;
    this.httpService
      .post<FileApiModel>(`${AppConfig.settings.baseUrl}/${this.inRoute}`, fileData, {
        reportProgress: anyCallbacks,
        observe: 'events'
      })
      .subscribe((event: HttpEvent<FileApiModel>): void => {
        if (event.type === HttpEventType.UploadProgress) {
          if (callbackLoad) {
            callbackLoad(event.loaded / event.total);
          }
        } else if (event.type === HttpEventType.Response) {
          if (callbackSuccess) {
            callbackSuccess(event.body);
          }
        } else {
          // error
        }
      });
  }

  async delete(customRoute?: string): Promise<any> {
    return this.httpService.delete(`${AppConfig.settings.baseUrl}/${customRoute || this.inRoute}`).toPromise();
  }

  async deleteMultiple(filesIds: string[], customRoute?: string): Promise<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: filesIds
    };
    return this.httpService.delete(`${AppConfig.settings.baseUrl}/${customRoute || this.inRoute}`, options).toPromise();
  }

  get(callbackSuccess?: (response: Blob) => void): void {
    this.httpService
      .get(`${AppConfig.settings.baseUrl}/${this.inRoute}`, {
        responseType: 'blob',
        observe: 'response'
      })
      .subscribe((dataReceived: any): void => {
        const blob = new Blob([dataReceived.body], { type: 'image/png' });
        callbackSuccess(blob);
      });
  }
}
