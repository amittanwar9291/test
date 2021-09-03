import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Subject, Subscription } from 'rxjs';

import { DialogService } from 'primeng/dynamicdialog';

import { TranslateService } from '@ngx-translate/core';

import { IUploaderConfig } from '@interfaces/controls/file-uploader.interface';

import { FileService } from '@services/shared/file-service/file.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';

import { FileUiModel } from '@models/shared/uploader/file-ui.model';

import { ImageDialogComponent } from '../../dialogs/image-dialog/image-dialog.component';
import { FileDeleteConfirmDialogComponent } from '../../dialogs/file-delete-confirm-dialog/file-delete-confirm-dialog.component';
import { NavigationService } from '@services/shared';
import { ChangeDetectionService } from '@services/shared/slide-base/change-detection.service';

@Component({
  selector: 'rr-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  providers: [DialogService]
})
export class UploaderComponent implements OnDestroy {
  uploaderConfig: IUploaderConfig = {
    acceptedFormats: ['.png', '.jpg', '.jpeg'],
    maxFileSizeBytes: 1024000,
    isPreviewable: true,
    isDeletable: true
  };

  subscriptions: Subscription[] = [];
  inputPlaceholder: string;

  fileModel: FileUiModel;

  @Input() set initFileModel(file: FileUiModel) {
    this.fileModel = file;
  }

  @Input() set config(newConfig: IUploaderConfig) {
    this.uploaderConfig = {
      ...this.uploaderConfig,
      ...newConfig
    };
  }

  @Input() set placeholder(placeholder: string) {
    this.initPlaceholderTranslation(placeholder);
  }

  @Input() operationsUrl: string;
  @Input() previewUrl: string;
  @Input() removeUrl: string;

  @Input() referenceId: string;
  @Input() fileType: string;
  @Input() fileRemovingPending$: Subject<boolean>;

  @Input() isVisible = true;

  @Output() fileDeleted = new EventEmitter();
  @Output() fileUploaded = new EventEmitter<FileUiModel>();

  constructor(
    private fileService: FileService,
    private toastMessageService: ToastMessageService,
    public navService: NavigationService,
    private dialogService: DialogService,
    private translateService: TranslateService
  ) {
    this.initPlaceholderTranslation();
  }

  onUploaderOpen(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  onFileUpload(inputData: HTMLInputElement): void {
    const uploadedFile: File = inputData.files[0];

    if (!uploadedFile) {
      return;
    }

    if (this.isFileCorrect(uploadedFile)) {
      this.postFile(uploadedFile);
    } else {
      this.showFilePostError(uploadedFile);
    }

    this.clearInputValue(inputData);
  }

  private isFileCorrect(file: File) {
    return this.isAllowedFileType(file.name) && this.hasAllowedSize(file.size);
  }

  private isAllowedFileType(fileName: string): boolean {
    return this.uploaderConfig.acceptedFormats.some(type => fileName.toLowerCase().endsWith(type));
  }

  private hasAllowedSize(fileSize: number): boolean {
    return fileSize <= this.uploaderConfig.maxFileSizeBytes;
  }

  private postFile(file: File) {
    const reportId = this.navService.getReportData().id;

    this.fileService.setRoute(`${this.operationsUrl}/${reportId}/${this.referenceId}`);
    this.fileService.post(file, this.fileType, null, (responseFile: FileUiModel) => {
      this.fileModel = responseFile;

      this.fileUploaded.emit(responseFile);
    });
  }

  private showFilePostError(file: File) {
    if (!this.isAllowedFileType(file.name)) {
      this.toastMessageService.showErrorToast('fileUploaderMessages.fileTypeErrorMessage.value');
    } else {
      this.toastMessageService.showErrorToast('fileUploaderMessages.fileSizeErrorMessage.value');
    }
  }

  onFileDelete(): Promise<void> {
    if (!this.fileModel) {
      return;
    }

    this.dialogService
      .open(FileDeleteConfirmDialogComponent, {
        width: '640px',
        showHeader: false
      })
      .onClose.subscribe((isConfirmed: boolean) => {
        if (isConfirmed) {
          this.removeFile();
        }
      });
  }

  removeFile() {
    const reportId = this.navService.getReportData().id;
    this.fileService.setRoute(`${this.operationsUrl}/${reportId}/${this.fileModel.id}`);

    this.fileRemovingPending$?.next(true);
    this.fileService
      .delete()
      .then(() => {
        this.fileModel = null;
        this.fileDeleted.emit();
        this.fileRemovingPending$?.next(false);
      })
      .catch(() => {
        this.fileRemovingPending$?.next(false);
      });
  }

  onFilePreview(): void {
    this.fileService.setRoute(`${this.operationsUrl}/${this.fileModel.id}`);
    this.fileService.get((response: Blob) => {
      this.readFilePreview(response);
    });
  }

  private readFilePreview(binaryFileData: Blob) {
    const reader = new FileReader();

    reader.onloadend = () =>
      this.dialogService.open(ImageDialogComponent, {
        data: { imageSRC: reader.result, imageName: this.fileModel.fileName },
        showHeader: false,
        contentStyle: { padding: '0' },
        closeOnEscape: true,
        dismissableMask: true
      });

    reader.readAsDataURL(binaryFileData);
  }

  /*
   * resetting the file input 'value' property prevents not triggering the 'onChange' event on the <input type="file"> when the same file
   * is being uploaded once again after a failure.
   */
  private clearInputValue(fileReference: HTMLInputElement): void {
    fileReference.value = '';
  }

  private initPlaceholderTranslation(placeholder?: string): void {
    if (placeholder) {
      this.inputPlaceholder = placeholder;
      return;
    }

    this.subscriptions.push(
      this.translateService.stream('shared.pleaseSelect').subscribe((out: string): void => {
        this.inputPlaceholder = out;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
