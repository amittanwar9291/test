import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';

import { BehaviorSubject, Subject, Subscription } from 'rxjs';

import { MakeProvider, NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { NavigationService } from '@services/shared';

import { UploaderComponent } from '@controls/uploader/uploader.component';

import { ReferencePictureUiModel } from '@models/shared/reference-picture/reference-picture-ui.model';
import { ReferencePictureElementsEnum, ReferencePictureRRIds } from '@models/shared/reference-picture/reference-picture-rr-ids.model';
import { FileUiModel } from '@models/shared/uploader/file-ui.model';
import { filter, skip, take } from 'rxjs/operators';

@Component({
  selector: 'rr-reference-picture',
  templateUrl: './reference-picture.component.html',
  styleUrls: ['./reference-picture.component.scss'],
  providers: [MakeProvider(ReferencePictureComponent)]
})
export class ReferencePictureComponent extends NgModelAccessorBase<ReferencePictureUiModel> implements OnInit, OnDestroy {
  @Input() referenceId: string;
  @Input() fileUploadUrl: string;
  @Input() shortLabels: boolean;
  @Input() elementsRrIds: ReferencePictureRRIds;
  @Input() pictureFileType: string;
  @Input() isHeader = true;

  @Output() fileDeleteEvent = new EventEmitter();
  @Output() fileUploaded = new EventEmitter();
  @Output() serialNumberEvent = new EventEmitter();
  @Output() pictureNumberEvent = new EventEmitter();

  referencePictureElementsEnum = ReferencePictureElementsEnum;

  uploaderFileRemovingPending$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  uploaderFileRemovedSubscription: Subscription;
  componentDestroy$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  fileRemovalPending$: Subject<void> = new Subject();

  @Input() set disabled(val: boolean) {
    this.isDisabled = val;

    if (val) {
      this.ngValue = new ReferencePictureUiModel();
      this.resetReferencePicture();
    }
  }

  @ViewChild(UploaderComponent) fileUploader: UploaderComponent;

  isDisabled: boolean;

  constructor(private navigationService: NavigationService) {
    super();
  }

  ngOnInit() {
    this.elementsRrIds = this.elementsRrIds ? this.elementsRrIds : this.defaultRrIds;

    this.uploaderFileRemovedSubscription = this.uploaderFileRemovingPending$
      .pipe(
        skip(1),
        filter(value => !value)
      )
      .subscribe(() => this.onUploaderFileDeleted());
  }

  private get defaultRrIds(): ReferencePictureRRIds {
    const currentPage = this.navigationService.getCurrentPageNumber();
    const middleId = currentPage ? this.leftPadPageNumber(currentPage) : '02';

    return new ReferencePictureRRIds(
      `uni_${middleId}_001`,
      `uni_${middleId}_002`,
      `uni_${middleId}_003`,
      `uni_${middleId}_004`,
      `uni_${middleId}_005`,
      `uni_${middleId}_006`,
      `uni_${middleId}_007`
    );
  }

  private leftPadPageNumber(page: number): string {
    return page < 10 ? `0${page}` : String(page);
  }

  get isLayerPositionModelBound() {
    return !!this.ngValue;
  }

  updateReferencePicture(): void {
    this.writeValue(this.ngValue);
  }

  async resetReferencePicture(): Promise<void> {
    if (this.fileUploader?.fileModel) {
      await this.fileUploader.removeFile();
    }

    this.ngValue.serialNumber = null;
    this.ngValue.pictureNumber = null;
  }

  getRrId(elem: ReferencePictureElementsEnum): string {
    if (this.elementsRrIds) {
      return this.elementsRrIds[elem];
    }
  }

  onUploaderFileDeleted(): void {
    this.ngValue.uploadedImageFile = null;
    this.ngValue.imageFileId = null;

    this.fileDeleteEvent.emit();

    this.updateReferencePicture();

    this.fileRemovalPending$.next();
  }

  onUploaderFileUpload(fileModel: FileUiModel) {
    this.ngValue.uploadedImageFile = fileModel;
    this.ngValue.imageFileId = fileModel.id;

    this.fileUploaded.emit();

    this.updateReferencePicture();
  }

  ngOnDestroy() {
    this.componentDestroy$.next(true);

    if (!this.ngValue.uploadedImageFile) {
      this.uploaderFileRemovedSubscription.unsubscribe();
    } else {
      if (!this.uploaderFileRemovingPending$.value) {
        this.uploaderFileRemovedSubscription.unsubscribe();
      } else {
        this.fileRemovalPending$.pipe(take(1)).subscribe(() => {
          this.uploaderFileRemovedSubscription.unsubscribe();
        });
      }
    }
  }
}
