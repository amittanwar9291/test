import { Component, OnDestroy } from '@angular/core';
import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { InfoDialogComponent } from 'app/shared/dialogs/info-dialog/info-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { VideoTutorial01DialogComponent } from 'app/shared/dialogs/video-tutorial01-dialog/video-tutorial01-dialog.component';
import { VideoTutorial02DialogComponent } from 'app/shared/dialogs/video-tutorial02-dialog/video-tutorial02-dialog.component';

@Component({
  selector: 'rr-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnDestroy {
  headerTitleSubscription: Subscription;
  infoIconPdfLandscape = true;
  languages: string;

  constructor(parent: AuthorizedComponent, public translate: TranslateService, public dialogService: DialogService) {
    this.headerTitleSubscription = this.translate.stream('help.header').subscribe((out: string) => {
      parent.header = out;
    });
  }

  getManualPdf() {
    this.dialogService.open(InfoDialogComponent, {
      data: { pdfFileReference: 'rr_users_guide_01', pdfLandscape: this.infoIconPdfLandscape },
      showHeader: false,
      contentStyle: { padding: '0' },
      dismissableMask: true
    });
  }

  openVideoTutorial01() {
    this.dialogService.open(VideoTutorial01DialogComponent, {
      data: {
        languages: this.languages
      },
      showHeader: false,
      contentStyle: { background: 'transparent' }
    });
  }

  openVideoTutorial02() {
    this.dialogService.open(VideoTutorial02DialogComponent, {
      data: {
        languages: this.languages
      },
      showHeader: false,
      contentStyle: { background: 'transparent' }
    });
  }

  ngOnDestroy() {
    this.headerTitleSubscription.unsubscribe();
  }
}
