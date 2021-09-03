import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { CartilageLigamentsCapsuleUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-ui.model';
import { CartilageLigamentsCapsuleApiModel } from '@models/elbowMRT/api/cartilage-ligaments-capsule/cartilage-ligaments-capsule-api.model';
import { CartilageLigamentsCapsuleFindingApiModel } from '@models/elbowMRT/api/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-api.model';
import { CartilageLigamentsCapsuleFindingUiModel } from '@models/elbowMRT/ui/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding-ui.model';
import { CartilageLigamentsCapsuleFindingMapper } from '@mappings/elbowMRT/cartilage-ligaments-capsule/cartilage-ligaments-capsule-finding.mapper';

@Injectable({
  providedIn: 'root'
})
export class CartilageLigamentsCapsuleMapper implements IMapper<CartilageLigamentsCapsuleApiModel, CartilageLigamentsCapsuleUiModel> {
  constructor(private cartilageLigamentsCapsuleFindingMapper: CartilageLigamentsCapsuleFindingMapper) {
    automapper
      .createMap('CartilageLigamentsCapsuleApiModel', 'CartilageLigamentsCapsuleUiModel')
      .convertToType(CartilageLigamentsCapsuleUiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('CartilageLigamentsCapsuleUiModel', 'CartilageLigamentsCapsuleApiModel')
      .convertToType(CartilageLigamentsCapsuleApiModel)
      .forSourceMember('findings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: CartilageLigamentsCapsuleUiModel, out: CartilageLigamentsCapsuleApiModel): CartilageLigamentsCapsuleApiModel {
    out = automapper.map('CartilageLigamentsCapsuleUiModel', 'CartilageLigamentsCapsuleApiModel', source);

    source.findings.forEach(finding =>
      out.findings.push(this.cartilageLigamentsCapsuleFindingMapper.mapToAPI(finding, new CartilageLigamentsCapsuleFindingApiModel()))
    );
    return out;
  }

  mapToUI(source: CartilageLigamentsCapsuleApiModel, out: CartilageLigamentsCapsuleUiModel): CartilageLigamentsCapsuleUiModel {
    out = automapper.map('CartilageLigamentsCapsuleApiModel', 'CartilageLigamentsCapsuleUiModel', source);
    out.findings.splice(0, out.findings.length);
    source.findings.forEach(finding =>
      out.findings.push(this.cartilageLigamentsCapsuleFindingMapper.mapToUI(finding, new CartilageLigamentsCapsuleFindingUiModel()))
    );
    return out;
  }
}
