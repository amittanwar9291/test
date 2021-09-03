import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderButtonModule } from '@controls/header-button/header-button.module';

import { TranslateModule } from '@ngx-translate/core';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputSwitchModule } from 'primeng/inputswitch';

import { UserListComponent } from './user-list.component';
import { UserListOptionsPanelComponent } from './user-list-options-panel/user-list-options-panel.component';
import { UserNewProfileOptionsPanelComponent } from './user-new-profile-options-panel/user-new-profile-options-panel.component';

@NgModule({
  imports: [CommonModule, FormsModule, ScrollPanelModule, InputSwitchModule, TranslateModule, HeaderButtonModule],
  declarations: [UserListComponent, UserListOptionsPanelComponent, UserNewProfileOptionsPanelComponent],
  entryComponents: [UserListOptionsPanelComponent]
})
export class UserListModule {}
