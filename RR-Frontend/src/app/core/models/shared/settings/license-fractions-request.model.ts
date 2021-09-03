import { PaginationOptionsUiModel } from '@models/shared/pagination-options-ui.model';

export class LicenseFractionsRequest {
  licenseId: string;
  paginationOptions: PaginationOptionsUiModel;

  constructor() {
    this.licenseId = '';
    this.paginationOptions = new PaginationOptionsUiModel();
  }
}
