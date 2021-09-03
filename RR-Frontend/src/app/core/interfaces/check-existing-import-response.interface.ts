export interface ICheckExistingImportResponse {
  isDuplicateAllowed?: boolean;
  isExisting?: boolean;
  reportId?: string;
  moduleName?: string;
  isNoImportNeeded?: boolean;
}
