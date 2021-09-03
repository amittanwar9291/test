export class PaginationOptionsApiModel {
  currentPage: number;
  pageCount: number;
  pageSize: number;

  constructor() {
    this.currentPage = 0;
    this.pageCount = 0;
    this.pageSize = 0;
  }
}
