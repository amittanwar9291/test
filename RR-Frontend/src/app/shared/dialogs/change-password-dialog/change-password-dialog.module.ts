import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordDialogComponent } from './change-password-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [ChangePasswordDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, PasswordModule, TooltipModule]
})
export class ChangePasswordDialogModule {}
