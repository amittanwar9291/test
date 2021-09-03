import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { MammographyParenchymaAnatomyApiModel } from '@models/mammaMX/api/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy-api.model';
import { MammographyParenchymaAnatomyUiModel } from '@models/mammaMX/ui/mammography-parenchyma-anatomy/mammography-parenchyma-anatomy-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

@Injectable({
  providedIn: 'root'
})
export class MammographyParenchymaAnatomyMapper
  implements IMapper<MammographyParenchymaAnatomyApiModel, MammographyParenchymaAnatomyUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('MammographyParenchymaAnatomy_MammaMX_UiModel', 'MammographyParenchymaAnatomy_MammaMX_ApiModel')
      .convertToType(MammographyParenchymaAnatomyApiModel);

    automapper
      .createMap('MammographyParenchymaAnatomy_MammaMX_ApiModel', 'MammographyParenchymaAnatomy_MammaMX_UiModel')
      .convertToType(MammographyParenchymaAnatomyUiModel);
  }

  mapToAPI(source: MammographyParenchymaAnatomyUiModel, out: MammographyParenchymaAnatomyApiModel): MammographyParenchymaAnatomyApiModel {
    out = automapper.map('MammographyParenchymaAnatomy_MammaMX_UiModel', 'MammographyParenchymaAnatomy_MammaMX_ApiModel', source);

    out.pectoralisMuscleLocalization = this.enumMapper.mapToString(source.pectoralisMuscleLocalization);
    out.subcutaneousAdiposeTissueLocalization = this.enumMapper.mapToString(source.subcutaneousAdiposeTissueLocalization);
    out.volumeLocalization = this.enumMapper.mapToString(source.volumeLocalization);

    return out;
  }

  mapToUI(source: MammographyParenchymaAnatomyApiModel, out: MammographyParenchymaAnatomyUiModel): MammographyParenchymaAnatomyUiModel {
    out = automapper.map('MammographyParenchymaAnatomy_MammaMX_ApiModel', 'MammographyParenchymaAnatomy_MammaMX_UiModel', source);

    this.enumMapper.mapToObject(source.pectoralisMuscleLocalization, out.pectoralisMuscleLocalization);
    this.enumMapper.mapToObject(source.subcutaneousAdiposeTissueLocalization, out.subcutaneousAdiposeTissueLocalization);
    this.enumMapper.mapToObject(source.volumeLocalization, out.volumeLocalization);

    return out;
  }
}
