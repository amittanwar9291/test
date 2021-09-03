import { ModelBase } from '@models/model-base';
import { Guid } from '../guid/guid';

export class ReportPageUiModel extends ModelBase {
  pageId: string;
  reportId: string;
  typeName: string;
  pageNumber: number;
  isBlocked: boolean;
  wasModified: boolean;

  constructor() {
    super();

    this.pageId = Guid.createEmpty();
    this.reportId = Guid.createEmpty();
    this.typeName = '';
    this.pageNumber = 0;
    this.isBlocked = false;
    this.wasModified = false;
  }
}
