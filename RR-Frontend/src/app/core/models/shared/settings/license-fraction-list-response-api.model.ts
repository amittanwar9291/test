import { LicenseFractionApiModel } from '@models/shared/settings/license-fraction-api.model';
import { PaginationOptionsApiModel } from '@models/shared/pagination-options-api.model';

export class LicenseFractionListResponseApiModel {
  licenseFractions: LicenseFractionApiModel[];
  paginationOptions: PaginationOptionsApiModel;
}
