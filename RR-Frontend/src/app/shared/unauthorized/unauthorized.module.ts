import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { UnauthorizedComponent } from './unauthorized.component';
import { ChangePasswordDialogComponent } from '../dialogs/change-password-dialog/change-password-dialog.component';
import { ChangePasswordDialogModule } from '../dialogs/change-password-dialog/change-password-dialog.module';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfigurationComponent } from './configuration/configuration.component';
import { InstituteConfigurationDialogModule } from '../dialogs/institute-configuration-dialog/institute-configuration-dialog.module';

export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [{ prefix: './assets/i18n/shared/shared-', suffix: '.json' }]);
}

@NgModule({
  declarations: [UnauthorizedComponent, LoginComponent, ConfigurationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule,
    ReactiveFormsModule,
    PasswordModule,
    ChangePasswordDialogModule,
    CheckboxModule,
    FormsModule,
    InstituteConfigurationDialogModule
  ],
  entryComponents: [ChangePasswordDialogComponent]
})
export class UnauthorizedModule {}
