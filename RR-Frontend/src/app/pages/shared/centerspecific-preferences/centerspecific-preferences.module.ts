import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { DropdownModule } from 'primeng/dropdown';

import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

import { CenterspecificPreferencesColumnModule } from '@controls/centerspecific-preferences-column/centerspecific-preferences-column.module';
import { ResetButtonModule } from '@controls/reset-button/reset-button.module';

import { CenterspecificPreferencesComponent } from '@sharedPages/centerspecific-preferences/centerspecific-preferences.component';

import { SequencesModule } from '@commonTemplates/technology/sequences/sequences.module';
import { CenterspecificPreferencesSequenceResetConfirmDialogModule } from '../../../shared/dialogs/centerspecific-preferences-sequence-reset-confirm-dialog/centerspecific-preferences-sequence-reset-confirm-dialog.module';
import { AcquisitionsModule } from '@commonTemplates/technology/acquisitions/acquisitions.module';
import { FindingColumnModule } from '@controls/finding-column/finding-column.module';

// TODO this translation json file import doesn't work and it must be imported in app.module anyway - should be fixed
export function createTranslateLoader(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    // { prefix: 'assets/i18n/modules/centerspecific-preferences/centerspecific-preferences-', suffix: '.json' },
    // { prefix: 'assets/i18n/shared/shared-templates/shared-templates-', suffix: '.json' }
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    DropdownModule,
    CommonImportsModule,
    CenterspecificPreferencesColumnModule,
    SequencesModule,
    AcquisitionsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    }),
    ResetButtonModule,
    CenterspecificPreferencesSequenceResetConfirmDialogModule,
    FindingColumnModule
  ],
  declarations: [CenterspecificPreferencesComponent]
})
export class CenterspecificPreferencesModule {}
