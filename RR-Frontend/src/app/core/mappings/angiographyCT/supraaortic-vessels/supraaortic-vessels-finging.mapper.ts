import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SupraaorticVesselsFindingApiModel } from '@models/angiographyCT/api/supraaortic-vessels/supraaortic-vessels-finding-api.model';
import { SupraaorticVesselsFindingUiModel } from '@models/angiographyCT/ui/supraaortic-vessels/supraaortic-vessels-finding-ui.model';
import { omit } from 'lodash';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { ArteriesSegmentTypeEnum } from '@enums/shared/angiography/arteries-segment-type.enum';
@Injectable({
  providedIn: 'root'
})
export class SupraaorticVesselsFingingMapper implements IMapper<SupraaorticVesselsFindingApiModel, SupraaorticVesselsFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('SupraaorticVessels_AngioCT_FindingUi', 'SupraaorticVessels_AngioCT_FindingApi')
      .convertToType(SupraaorticVesselsFindingApiModel);
    automapper
      .createMap('SupraaorticVessels_AngioCT_FindingApi', 'SupraaorticVessels_AngioCT_FindingUi')
      .convertToType(SupraaorticVesselsFindingUiModel);
  }

  mapToAPI(source: SupraaorticVesselsFindingUiModel, out: SupraaorticVesselsFindingApiModel): SupraaorticVesselsFindingApiModel {
    out = automapper.map('SupraaorticVessels_AngioCT_FindingUi', 'SupraaorticVessels_AngioCT_FindingApi', source);
    source.affectedSegmentsOrVesselsLocation = this.setSegmentLocalizerForApi(source.affectedSegmentsOrVesselsLocation);
    out.internalCarotidArterySegmentsLocation = this.enumMapper.mapToString(source.internalCarotidArterySegmentsLocation);
    out.affectedSegmentsOrVesselsLocation = this.enumMapper.mapToString(source.affectedSegmentsOrVesselsLocation);
    return out;
  }

  mapToUI(source: SupraaorticVesselsFindingApiModel, out: SupraaorticVesselsFindingUiModel): SupraaorticVesselsFindingUiModel {
    out = automapper.map('SupraaorticVessels_AngioCT_FindingApi', 'SupraaorticVessels_AngioCT_FindingUi', source);
    this.enumMapper.mapToObject(source.internalCarotidArterySegmentsLocation, out.internalCarotidArterySegmentsLocation);
    this.enumMapper.mapToObject(source.affectedSegmentsOrVesselsLocation, out.affectedSegmentsOrVesselsLocation);
    out.affectedSegmentsOrVesselsLocation = this.setSegmentLocalizerForUi(out.affectedSegmentsOrVesselsLocation);
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
