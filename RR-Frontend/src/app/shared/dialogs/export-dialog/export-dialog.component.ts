import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-export-dialog',
  templateUrl: './export-dialog.component.html',
  styleUrls: ['./export-dialog.component.scss']
})
export class ExportDialogComponent extends ResizableBaseComponent implements OnInit {
  isConfirmed = false;
  isCompleted = false;

  languages: DropdownModel[];
  selectedLang: string;
  isAccepted = false;
  reportLabel: string;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public translate: TranslateService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.languages = this.config.data.languages;
    this.selectedLang = this.config.data.selectedLang;
    this.reportLabel = this.config.data.reportLabel;
  }

  cancel() {
    this.ref.close();
  }

  confirm() {
    this.isConfirmed = true;
    setTimeout(() => {
      this.isCompleted = true;
      setTimeout(() => {
        this.ref.close();
      }, 3000);
    }, 3000);
  }
}
