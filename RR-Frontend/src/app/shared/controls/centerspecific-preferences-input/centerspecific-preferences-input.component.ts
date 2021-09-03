import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

import { Subscription } from 'rxjs';

import { DialogService } from 'primeng/dynamicdialog';

import { CenterspecificPreferenceDeleteConfirmDialogComponent } from '../../dialogs/centerspecific-preference-delete-confirm-dialog/centerspecific-preference-delete-confirm-dialog.component';

import { IPreferencesDropdownOptionsModel } from '@interfaces/controls/centerspecific-preferences-dropdown-options.interface';
import { ModuleTypesEnum } from '@enums/centerspecific-preferences/module-types.enum';

@Component({
  selector: 'rr-centerspecific-preferences-input',
  templateUrl: './centerspecific-preferences-input.component.html',
  styleUrls: ['./centerspecific-preferences-input.component.scss'],
  providers: [DialogService]
})
export class CenterspecificPreferencesInputComponent implements OnInit {
  @Input() isEditMode: boolean;
  @Input() inactive: boolean;
  @Input() preferenceName: string;
  @Input() moduleType: ModuleTypesEnum;

  @Output() itemDeleted = new EventEmitter<string>();

  subscriptions: Subscription[] = [];
  customName: string;

  dropdownOptions: IPreferencesDropdownOptionsModel[] = [];

  constructor(private renderer: Renderer2, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.customName = this.preferenceName;
    this.setDropdownOptions();
  }

  setDropdownOptions(): void {
    this.dropdownOptions = [
      { value: this.customName, label: this.customName },
      { value: 'delete', label: 'delete', isDeleteOption: true, disabled: true }
    ];
  }

  setFocus(): void {
    setTimeout(() => {
      this.renderer.selectRootElement('#itemInput').focus();
    }, 0);
  }

  onNameChange(callback) {
    this.dropdownOptions[0].value = this.customName;
    this.dropdownOptions[0].label = this.customName;
    return callback(this.customName);
  }

  onDeleteSelected(): void {
    this.dialogService
      .open(CenterspecificPreferenceDeleteConfirmDialogComponent, {
        width: '640px',
        showHeader: false,
        data: { moduleType: this.moduleType }
      })
      .onClose.subscribe((out: boolean) => {
        if (out) {
          this.itemDeleted.emit('delete');
        }
      });
  }
}
