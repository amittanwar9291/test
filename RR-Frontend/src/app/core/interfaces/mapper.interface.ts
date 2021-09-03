export interface IMapper<TModelAPI, TModelUI> {
  mapToAPI(source: TModelUI, out: TModelAPI): TModelAPI;
  mapToUI(source: TModelAPI, out: TModelUI): TModelUI;
}
