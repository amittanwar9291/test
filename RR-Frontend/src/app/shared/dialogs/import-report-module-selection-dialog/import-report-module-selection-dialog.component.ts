import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { IpcMessageService } from '@services/shared/ipc-message/ipc-message.service';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { ImportMode } from '@enums/shared/import-mode.enum';
import { IModuleSelectionData } from '@interfaces/module-selection-data.interface';

import * as _ from 'lodash';

@Component({
  selector: 'rr-module-selection-dialog',
  templateUrl: './import-report-module-selection-dialog.component.html',
  styleUrls: ['./import-report-module-selection-dialog.component.scss']
})
export class ImportReportModuleSelectionDialogComponent extends ResizableBaseComponent implements OnDestroy {
  translateSubscription: Subscription = new Subscription();
  selectedModule: string;
  importMode: typeof ImportMode;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public translate: TranslateService,
    private ipcMessageService: IpcMessageService
  ) {
    super();
    this.importMode = ImportMode;
  }

  onModuleSelected(moduleName: string): void {
    this.selectedModule = _.lowerFirst(moduleName);
  }

  confirm(importMode: ImportMode): void {
    const data: IModuleSelectionData = {
      moduleName: this.selectedModule,
      importMode,
      dicomMap: null
    };
    this.ref.close(data);
  }

  cancel(): void {
    this.ref.close();
    this.ipcMessageService.sendModuleSelection(true);
  }

  ngOnDestroy(): void {
    this.translateSubscription.unsubscribe();
  }
}
