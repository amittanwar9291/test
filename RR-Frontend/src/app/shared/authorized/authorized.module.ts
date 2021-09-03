import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthorizedRoutingModule } from './authorized-routing.module';
import { LayoutModule } from '@layout/layout.module';
import { ReportListModule } from '@sharedPages/report-list/report-list.module';
import { ReportModule } from '@sharedPages/report/report.module';
import { UserListModule } from '@sharedPages/user-list/user-list.module';
import { UserProfileModule } from '@sharedPages/user-profile/user-profile.module';
import { AuthorizedComponent } from './authorized.component';
import { CenterspecificPreferencesModule } from '@sharedPages/centerspecific-preferences/centerspecific-preferences.module';
import { SettingsModule } from '@sharedPages/settings/settings.module';

import { ButtonModule } from 'primeng/button';
import { AboutrrModule } from '@sharedPages/aboutrr/aboutrr.module';
import { HelpModule } from '@sharedPages/help/help.module';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { StatisticsModule } from '@sharedPages/statistics/statistics.module';
import { TrackingStatisticsModule } from '@sharedPages/tracking-statistics/tracking-statistics.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: './../assets/i18n/modules/kneeMRT/technology/knee-mrt-technology-', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [AuthorizedComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthorizedRoutingModule,
    LayoutModule,
    ReportListModule,
    ReportModule,
    UserListModule,
    UserProfileModule,
    HelpModule,
    AboutrrModule,
    TrackingStatisticsModule,
    CenterspecificPreferencesModule,
    SettingsModule,
    ButtonModule,
    StatisticsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class AuthorizedModule {}
