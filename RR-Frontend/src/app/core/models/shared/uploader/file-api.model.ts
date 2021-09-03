import { ModelBase } from '@models/model-base';

export class FileApiModel extends ModelBase {
  rowguid: string;
  fileName: string;
  fileType: string;
  stream: string;

  constructor() {
    super();

    this.rowguid = '';
    this.fileName = '';
    this.fileType = '';
    this.stream = '';
  }
}
