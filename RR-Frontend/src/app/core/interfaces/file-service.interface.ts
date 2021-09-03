import { FileUiModel } from '@models/shared/uploader/file-ui.model';

export interface IFileService {
  post(file: File, fileType?: string, callbackLoad?: (percentage: number) => {}, callbackSuccess?: (response: FileUiModel) => {}): void;
  delete(customRoute?: string, callbackSuccess?: () => {}): void;
  deleteMultiple(filesIds: string[], customRoute?: string, callbackSuccess?: () => {}): void;
  get(callbackSuccess?: (response: Blob) => {}): void;
}
