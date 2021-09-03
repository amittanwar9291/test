export class SortOptionsApiModel {
  column: string;
  ascending: boolean;
  topStatus: string;

  constructor() {
    this.column = '';
    this.ascending = false;
    this.topStatus = '';
  }
}
