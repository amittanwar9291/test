import { Injectable } from '@angular/core';
import { DicomMapApiModel } from '@models/shared/settings/dicom-map-api.model';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportSettingsSerivce {
  private setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  };
  subscriptions: Subscription[] = [];
  fileExported: string;

  constructor(public translate: TranslateService, private toastMessageService: ToastMessageService) {
    this.initTranslation();
  }
  // export json
  private dynamicDownloadByHtmlTag(arg: { fileName: string; text: string }) {
    if (!this.setting.element.dynamicDownload) {
      this.setting.element.dynamicDownload = document.createElement('a');
    }
    const element = this.setting.element.dynamicDownload;
    const fileType = arg.fileName.indexOf('.json') > -1 ? 'text/json' : 'text/plain';
    element.setAttribute('href', `data:${fileType};charset=utf-8,${encodeURIComponent(arg.text)}`);
    element.setAttribute('download', arg.fileName);

    const event = new MouseEvent('click');
    element.dispatchEvent(event);
    this.toastMessageService.showSuccessToast(this.fileExported + ' ' + arg.fileName);
  }

  public exportJsonData(exportData: DicomMapApiModel) {
    this.dynamicDownloadByHtmlTag({
      fileName: `${exportData.Module}.json`,
      text: JSON.stringify(exportData)
    });
  }

  private initTranslation(): void {
    this.subscriptions.push(
      this.translate.stream('settings.toastMessages.fileExported').subscribe((out: string): void => {
        this.fileExported = out;
      })
    );
  }
}
