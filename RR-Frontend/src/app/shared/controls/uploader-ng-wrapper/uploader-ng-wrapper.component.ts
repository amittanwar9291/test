import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { UploaderComponent } from '@controls/uploader/uploader.component';
import { IUploaderConfig } from '@interfaces/controls/file-uploader.interface';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';

@Component({
  selector: 'rr-uploader-ng-wrapper',
  templateUrl: './uploader-ng-wrapper.component.html',
  styleUrls: ['./uploader-ng-wrapper.component.scss'],
  providers: [MakeProvider(UploaderNgWrapperComponent)]
})
export class UploaderNgWrapperComponent extends NgModelAccessorBase<FileUiModel> {
  @Input() config: IUploaderConfig;
  @Input() placeholder: string;

  @Input() operationsUrl: string;
  @Input() previewUrl: string;
  @Input() removeUrl: string;

  @Input() deleteWithoutConfirm: boolean;

  @Input() referenceId: string;
  @Input() fileType: string;

  @Output() fileDeleteEvent = new EventEmitter();
  @Output() fileUploadEvent = new EventEmitter<FileUiModel>();

  @ViewChild(UploaderComponent) uploader: UploaderComponent;

  constructor() {
    super();
  }

  reemitDeleteEvent() {
    this.fileDeleteEvent.emit();
    this.ngValue = null;

    this.writeValue(this.ngValue);
  }

  reemitUploadEvent(fileModel: FileUiModel) {
    this.ngValue = fileModel;

    this.fileUploadEvent.emit(fileModel);
    this.writeValue(this.ngValue);
  }

  clear() {
    if (this.uploader.fileModel) {
      this.uploader.removeFile();
    }
  }

  clearFileModel(): void {
    this.uploader.fileModel = null;
  }
}
