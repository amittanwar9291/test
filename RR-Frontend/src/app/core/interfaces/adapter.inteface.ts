export interface IAdapter<TModelAPI, TModelUI> {
  adaptToUI(item: TModelAPI): TModelUI;
  adaptToAPI(item: TModelUI): TModelAPI;
}
