import { ModelBase } from '@models/model-base';
import { Guid } from '../guid/guid';

export class ReportPageApiModel extends ModelBase {
  pageId: string;
  reportId: string;
  typeName: string;
  pageNumber: number;
  isBlocked: boolean;
  wasModified: boolean;

  constructor(pageId?: string, typeName?: string) {
    super();

    this.pageId = pageId ? pageId : Guid.createEmpty();
    this.reportId = Guid.createEmpty();
    this.typeName = typeName ? typeName : '';
    this.pageNumber = 0;
    this.isBlocked = false;
    this.wasModified = false;
  }
}
