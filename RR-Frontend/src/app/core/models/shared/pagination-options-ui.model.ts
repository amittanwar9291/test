export class PaginationOptionsUiModel {
  total: number;
  currentPage: number;
  pageCount: number;
  pageSize: number;

  constructor(pageSize = 0) {
    this.total = 0;
    this.currentPage = 0;
    this.pageCount = 0;
    this.pageSize = pageSize;
  }
}
