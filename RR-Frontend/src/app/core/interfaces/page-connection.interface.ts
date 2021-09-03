export interface IPageConnection<TModel> {
  pageNr: number;
  condition: () => boolean;
  callback: (model: TModel) => void;
}
