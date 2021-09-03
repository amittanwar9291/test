import { LicenseFractionUiModel } from '@models/shared/settings/license-fraction-ui.model';
import { PaginationOptionsUiModel } from '@models/shared/pagination-options-ui.model';

export class LicenseFractionListResponseUiModel {
  licenseFractions: LicenseFractionUiModel[];
  paginationOptions: PaginationOptionsUiModel;
}
