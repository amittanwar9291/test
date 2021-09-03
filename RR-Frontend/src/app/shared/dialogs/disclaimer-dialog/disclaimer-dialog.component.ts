import { Component, OnInit } from '@angular/core';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

@Component({
  selector: 'rr-disclaimer-dialog',
  templateUrl: './disclaimer-dialog.component.html',
  styleUrls: ['./disclaimer-dialog.component.scss']
})
export class DisclaimerDialogComponent extends ResizableBaseComponent implements OnInit {
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

  confirm() {
    this.ref.close(this.selectedLang);
  }

  cancel() {
    this.ref.close(null);
  }
}
