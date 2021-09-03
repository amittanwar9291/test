import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'rr-video-tutorial01-dialog',
  templateUrl: './video-tutorial01-dialog.component.html',
  styleUrls: ['./video-tutorial01-dialog.component.scss']
})
export class VideoTutorial01DialogComponent extends ResizableBaseComponent implements OnInit {
  currentLang: string;

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public translate: TranslateService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.currentLang = this.translate.currentLang;
  }

  confirm() {
    this.ref.close();
  }
}
