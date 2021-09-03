import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstituteConfigurationDialogComponent } from './institute-configuration-dialog.component';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateLoader } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [{ prefix: './assets/i18n/shared/shared-', suffix: '.json' }]);
}

@NgModule({
  declarations: [InstituteConfigurationDialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [InstituteConfigurationDialogComponent],
  providers: [DialogService]
})
export class InstituteConfigurationDialogModule {}
