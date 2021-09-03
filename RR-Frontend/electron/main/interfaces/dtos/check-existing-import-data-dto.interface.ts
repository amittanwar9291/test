export interface ICheckExistingImportDataDto {
  isDuplicateAllowed?: boolean;
  isExisting?: boolean;
  reportId?: string;
  moduleType?: string;
  isNoImportNeeded?: boolean;
}
