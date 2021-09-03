import { DynamicDialogConfig } from 'primeng/dynamicdialog';

export class ChangePasswordDialogConfig extends DynamicDialogConfig {
  constructor(userId: string, currentPassword?: string) {
    super();
    this.data = { userId, currentPassword };
    this.showHeader = false;
    this.dismissableMask = true;
    this.width = '640px';
    this.height = '540px';
    this.contentStyle = { padding: '67px 15px 11px 15px', height: '540px' };
  }
}
