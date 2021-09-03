import { Component, OnDestroy, OnInit } from '@angular/core';
import { MakeProvider } from '@abstractions/ng-model/ngmodel-accessor-base';
import { DialogService } from 'primeng/dynamicdialog';
import { SettingsHelperService } from '@sharedPages/settings/settings-helper.service';
import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'rr-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [MakeProvider(SettingsComponent), DialogService]
})
export class SettingsComponent implements OnInit, OnDestroy {
  translateSub: Subscription;

  constructor(
    private settingsHelperService: SettingsHelperService,
    private parent: AuthorizedComponent,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.settingsHelperService.fetchInstitute();
    this.translateSub = this.translate.stream('settings.settings.value').subscribe((out: string) => (this.parent.header = out));
  }

  ngOnDestroy() {
    this.translateSub.unsubscribe();
  }
}
