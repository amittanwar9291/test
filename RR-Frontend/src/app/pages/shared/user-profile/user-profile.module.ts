import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderButtonModule } from '@controls/header-button/header-button.module';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileOptionsPanelComponent } from '../user-list/user-profile-options-panel/user-profile-options-panel.component';
import { UserNewProfileOptionsPanelComponent } from '../user-list/user-new-profile-options-panel/user-new-profile-options-panel.component';
import { ChangePasswordDialogComponent } from '../../../shared/dialogs/change-password-dialog/change-password-dialog.component';
import { ChangePasswordDialogModule } from '../../../shared/dialogs/change-password-dialog/change-password-dialog.module';
import { CommonImportsModule } from '../../../shared/common-imports/common-imports.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    TranslateModule,
    HeaderButtonModule,
    ChangePasswordDialogModule,
    CommonImportsModule
  ],
  declarations: [UserProfileComponent, UserProfileOptionsPanelComponent],
  entryComponents: [UserProfileOptionsPanelComponent, ChangePasswordDialogComponent, UserNewProfileOptionsPanelComponent]
})
export class UserProfileModule {}
