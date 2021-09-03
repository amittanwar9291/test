import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { VesselsFindingApiModel } from '@models/neckMRT/api/vessels/vessels-finding-api.model';
import { VesselsFindingUiModel } from '@models/neckMRT/ui/vessels/vessels-finding-ui.model';
import { omit } from 'lodash';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { ArteriesSegmentTypeEnum } from '@enums/shared/angiography/arteries-segment-type.enum';

@Injectable({
  providedIn: 'root'
})
export class VesselsFindingMapper implements IMapper<VesselsFindingApiModel, VesselsFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('VesselsFinding_NeckMRT_ApiModel', 'VesselsFinding_NeckMRT_UiModel').convertToType(VesselsFindingUiModel);
    automapper.createMap('VesselsFinding_NeckMRT_UiModel', 'VesselsFinding_NeckMRT_ApiModel').convertToType(VesselsFindingApiModel);
  }

  mapToAPI(source: VesselsFindingUiModel, out: VesselsFindingApiModel): VesselsFindingApiModel {
    out = automapper.map('VesselsFinding_NeckMRT_UiModel', 'VesselsFinding_NeckMRT_ApiModel', source);

    source.arteriesSegmentType = this.setSegmentLocalizerForApi(source.arteriesSegmentType);
    out.arteryLocalisationType = this.enumMapper.mapToString(source.arteryLocalisationType);
    out.arteriesSegmentType = this.enumMapper.mapToString(source.arteriesSegmentType);

    return out;
  }

  mapToUI(source: VesselsFindingApiModel, out: VesselsFindingUiModel): VesselsFindingUiModel {
    out = automapper.map('VesselsFinding_NeckMRT_ApiModel', 'VesselsFinding_NeckMRT_UiModel', source);
    this.enumMapper.mapToObject(source.arteriesSegmentType, out.arteriesSegmentType);
    this.enumMapper.mapToObject(source.arteryLocalisationType, out.arteryLocalisationType);
    out.arteriesSegmentType = this.setSegmentLocalizerForUi(out.arteriesSegmentType);

    return out;
  }

  private setSegmentLocalizerForApi(source: ArteriesSegmentsLocalizerModel): ArteriesSegmentsLocalizerModel {
    return omit(source, [
      ArteriesSegmentTypeEnum.AllACARight,
      ArteriesSegmentTypeEnum.AllACALeft,
      ArteriesSegmentTypeEnum.AllMCARight,
      ArteriesSegmentTypeEnum.AllMCALeft,
      ArteriesSegmentTypeEnum.AllPCARight,
      ArteriesSegmentTypeEnum.AllPCALeft
    ]);
  }

  private setSegmentLocalizerForUi(source: ArteriesSegmentsLocalizerModel): ArteriesSegmentsLocalizerModel {
    source.allACARight = source.aCAa1Right && source.aCAa2Right;
    source.allACALeft = source.aCAa1Left && source.aCAa2Left;
    source.allMCARight = source.mCAm1Right && source.mCAm2Right && source.mCAm3Right;
    source.allMCALeft = source.mCAm1Left && source.mCAm2Left && source.mCAm3Left;
    source.allPCARight = source.pCAp1Right && source.pCAp2Right;
    source.allPCALeft = source.pCAp1Left && source.pCAp2Left;
    return source;
  }
}
