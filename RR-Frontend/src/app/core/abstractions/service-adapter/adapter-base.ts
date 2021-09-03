import { IAdapter, IMapper, INoParamConstructor } from '@interfaces/index';

import { ModelBase } from '@models/model-base';

export class AdapterBase<TModelAPI extends ModelBase, TModelUI extends ModelBase, TMapper extends IMapper<TModelAPI, TModelUI>>
  implements IAdapter<TModelAPI, TModelUI> {
  constructor(private mapper: TMapper, private apiCtor: INoParamConstructor<TModelAPI>, private uiCtor: INoParamConstructor<TModelUI>) {}

  adaptToUI(item: TModelAPI): TModelUI {
    const out: TModelUI = new this.uiCtor();

    if (!item) {
      return out;
    }
    return this.mapper.mapToUI(item, out);
  }

  adaptToAPI(item: TModelUI): TModelAPI {
    const out: TModelAPI = new this.apiCtor();

    if (!item) {
      return out;
    }
    return this.mapper.mapToAPI(item, out);
  }
}
