import { Component } from '@angular/core';
import { ResizableBaseComponent } from '@abstractions/resizable-base/resizable-base';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DicomMapEntryUiModel } from '@models/shared/settings/dicom-map-entry-ui.model';
import { trim, compact } from 'lodash';
import { DicomMapEntryApiModel } from '@models/shared/settings/dicom-map-entry-api.model';

@Component({
  selector: 'rr-add-or-edit-dicom-map-entry-dialog',
  templateUrl: './add-or-edit-dicom-map-entry-dialog.component.html',
  styleUrls: ['./add-or-edit-dicom-map-entry-dialog.component.scss']
})
export class AddOrEditDicomMapEntryDialogComponent extends ResizableBaseComponent {
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    super();
    this.dicomEntryToEdit = Object.assign({}, this.config.data?.dicomEntryToEdit) || new DicomMapEntryUiModel();
  }

  dicomEntryToEdit: DicomMapEntryUiModel = new DicomMapEntryUiModel();

  isInputsDataCorrect(): boolean {
    const inputs = Object.keys(new DicomMapEntryApiModel());
    return compact(inputs.map(item => !this.isNoValueInInput(item))).length > 0;
  }

  isNoValueInInput(elem): boolean {
    return trim(this.dicomEntryToEdit[elem]).length === 0;
  }

  dialogCancel() {
    this.ref.close();
  }

  dialogConfirm() {
    this.ref.close(this.dicomEntryToEdit);
  }
}
