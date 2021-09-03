import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { PresetListComponent } from './preset-list.component';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: 'assets/i18n/shared/routing/routing-', suffix: '.json' },
    { prefix: 'assets/i18n/shared/shared-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ScrollPanelModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  declarations: [PresetListComponent],
  exports: [PresetListComponent]
})
export class PresetListModule {}
