import { ModelBase } from '@models/model-base';

export class FileUiModel extends ModelBase {
  fileName: string;
  fileType: string;
  stream: string;

  constructor() {
    super();

    this.fileName = '';
    this.fileType = '';
    this.stream = '';
  }
}
