import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { AcquisitionApiModel } from '@models/spineCT/api/technology/acquisition-api.model';
import { AcquisitionUiModel } from '@models/spineCT/ui/technology/acquisition-ui.model';

import { ReconstructionFindingApiModel } from '@models/spineCT/api/technology/reconstruction-finding-api.model';
import { ReconstructionFindingUiModel } from '@models/spineCT/ui/technology/reconstruction-finding-ui.model';
import { ReconstructionsMapper } from '@mappings/spineCT/technology/reconstructions.mapper';

@Injectable({
  providedIn: 'root'
})
export class AcquisitionMapper implements IMapper<AcquisitionApiModel, AcquisitionUiModel> {
  constructor(private reconstructionsMapper: ReconstructionsMapper) {
    automapper
      .createMap('Acquisition_SpineCT_ApiModel', 'Acquisition_SpineCT_UiModel')
      .convertToType(AcquisitionUiModel)
      .forSourceMember('reconstructions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Acquisition_SpineCT_UiModel', 'Acquisition_SpineCT_ApiModel')
      .convertToType(AcquisitionApiModel)
      .forSourceMember('reconstructions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AcquisitionUiModel, out: AcquisitionApiModel): AcquisitionApiModel {
    out = automapper.map('Acquisition_SpineCT_UiModel', 'Acquisition_SpineCT_ApiModel', source);

    source.reconstructions.forEach(reconstruction => {
      out.reconstructions.push(this.reconstructionsMapper.mapToAPI(reconstruction, new ReconstructionFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: AcquisitionApiModel, out: AcquisitionUiModel): AcquisitionUiModel {
    out = automapper.map('Acquisition_SpineCT_ApiModel', 'Acquisition_SpineCT_UiModel', source);

    out.reconstructions.splice(0, out.reconstructions.length);
    source.reconstructions.forEach(reconstruction => {
      if (!reconstruction.isDeleted) {
        out.reconstructions.push(this.reconstructionsMapper.mapToUI(reconstruction, new ReconstructionFindingUiModel()));
      }
    });

    return out;
  }
}
