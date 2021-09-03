import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { CartilageLigamentsCapsuleFindingApiModel } from '@models/elbowMRT/api/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-api.model';
import { CartilageLigamentsCapsuleFindingUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class CartilageLigamentsCapsuleFindingMapper
  implements IMapper<CartilageLigamentsCapsuleFindingApiModel, CartilageLigamentsCapsuleFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('CartilageLigamentsCapsuleFindingUiModel', 'CartilageLigamentsCapsuleFindingApiModel')
      .convertToType(CartilageLigamentsCapsuleFindingApiModel);
    automapper
      .createMap('CartilageLigamentsCapsuleFindingApiModel', 'CartilageLigamentsCapsuleFindingUiModel')
      .convertToType(CartilageLigamentsCapsuleFindingUiModel);
  }

  mapToAPI(
    source: CartilageLigamentsCapsuleFindingUiModel,
    out: CartilageLigamentsCapsuleFindingApiModel
  ): CartilageLigamentsCapsuleFindingApiModel {
    out = automapper.map('CartilageLigamentsCapsuleFindingUiModel', 'CartilageLigamentsCapsuleFindingApiModel', source);
    out.cartilageLocation = this.enumMapper.mapToString(source.cartilageLocation);
    return out;
  }

  mapToUI(
    source: CartilageLigamentsCapsuleFindingApiModel,
    out: CartilageLigamentsCapsuleFindingUiModel
  ): CartilageLigamentsCapsuleFindingUiModel {
    out = automapper.map('CartilageLigamentsCapsuleFindingApiModel', 'CartilageLigamentsCapsuleFindingUiModel', source);
    this.enumMapper.mapToObject(source.cartilageLocation, out.cartilageLocation);

    return out;
  }
}
