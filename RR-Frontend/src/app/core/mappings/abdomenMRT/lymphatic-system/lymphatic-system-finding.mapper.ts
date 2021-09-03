import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { LymphaticSystemFindingApiModel } from '@models/abdomenMRT/api/lymphatic-system/lymphatic-system-finding-api.model';
import { LymphaticSystemFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymphatic-system-finding-ui.model';
import { LymphNodeStationsFindingMapper } from '@mappings/abdomenMRT/lymphatic-system/lymph-node-stations-finding.mapper';
import { LymphNodeStationsFindingApiModel } from '@models/abdomenMRT/api/lymphatic-system/lymph-node-stations-finding-api.model';
import { LymphNodeStationsFindingUiModel } from '@models/abdomenMRT/ui/lymphatic-system/lymph-node-stations-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class LymphaticSystemFindingMapper implements IMapper<LymphaticSystemFindingApiModel, LymphaticSystemFindingUiModel> {
  constructor(
    public lymphNodeStationsFindingMapper: LymphNodeStationsFindingMapper,
    private enumMapper: EnumMapper,
    private referencePictureMapper: ReferencePictureMapper
  ) {
    automapper
      .createMap('LymphaticSystemFinding_AbdomenMRT_UiModel', 'LymphaticSystemFinding_AbdomenMRT_ApiModel')
      .convertToType(LymphaticSystemFindingApiModel)
      .forSourceMember('lymphNodeStations', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('LymphaticSystemFinding_AbdomenMRT_ApiModel', 'LymphaticSystemFinding_AbdomenMRT_UiModel')
      .convertToType(LymphaticSystemFindingUiModel)
      .forSourceMember('lymphNodeStations', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: LymphaticSystemFindingUiModel, out: LymphaticSystemFindingApiModel): LymphaticSystemFindingApiModel {
    out = automapper.map('LymphaticSystemFinding_AbdomenMRT_UiModel', 'LymphaticSystemFinding_AbdomenMRT_ApiModel', source);
    out.lymphNodeStations.splice(0, out.lymphNodeStations.length);

    source.lymphNodeStations.forEach(finding => {
      out.lymphNodeStations.push(this.lymphNodeStationsFindingMapper.mapToAPI(finding, new LymphNodeStationsFindingApiModel()));
    });

    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: LymphaticSystemFindingApiModel, out: LymphaticSystemFindingUiModel): LymphaticSystemFindingUiModel {
    out = automapper.map('LymphaticSystemFinding_AbdomenMRT_ApiModel', 'LymphaticSystemFinding_AbdomenMRT_UiModel', source);
    out.lymphNodeStations.splice(0, out.lymphNodeStations.length);

    source.lymphNodeStations.forEach(finding => {
      out.lymphNodeStations.push(this.lymphNodeStationsFindingMapper.mapToUI(finding, new LymphNodeStationsFindingUiModel()));
    });

    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

    return out;
  }
}
