import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { AcquisitionApiModel } from '@models/headCT/api/technology/acquisition-api.model';
import { AcquisitionUiModel } from '@models/headCT/ui/technology/acquisition-ui.model';

import { ReconstructionsMapper } from '@mappings/headCT/technology/reconstructions.mapper';
import { ReconstructionFindingApiModel } from '@models/headCT/api/technology/reconstruction-finding-api.model';
import { ReconstructionFindingUiModel } from '@models/headCT/ui/technology/reconstruction-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AcquisitionMapper implements IMapper<AcquisitionApiModel, AcquisitionUiModel> {
  constructor(private reconstructionsMapper: ReconstructionsMapper) {
    automapper
      .createMap('Acquisition_HeadCT_ApiModel', 'Acquisition_HeadCT_UiModel')
      .convertToType(AcquisitionUiModel)
      .forSourceMember('reconstructions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
    automapper
      .createMap('Acquisition_HeadCT_UiModel', 'Acquisition_HeadCT_ApiModel')
      .convertToType(AcquisitionApiModel)
      .forSourceMember('reconstructions', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: AcquisitionUiModel, out: AcquisitionApiModel): AcquisitionApiModel {
    out = automapper.map('Acquisition_HeadCT_UiModel', 'Acquisition_HeadCT_ApiModel', source);

    source.reconstructions.forEach(reconstruction => {
      out.reconstructions.push(this.reconstructionsMapper.mapToAPI(reconstruction, new ReconstructionFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: AcquisitionApiModel, out: AcquisitionUiModel): AcquisitionUiModel {
    out = automapper.map('Acquisition_HeadCT_ApiModel', 'Acquisition_HeadCT_UiModel', source);

    out.reconstructions.splice(0, out.reconstructions.length);
    source.reconstructions.forEach(reconstruction => {
      if (!reconstruction.isDeleted) {
        out.reconstructions.push(this.reconstructionsMapper.mapToUI(reconstruction, new ReconstructionFindingUiModel()));
      }
    });

    return out;
  }
}
