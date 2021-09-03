import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { VesselsFindingApiModel } from '@models/headMRT/api/vessels/vessels-finding-api.model';
import { VesselsFindingUiModel } from '@models/headMRT/ui/vessels/vessels-finding-ui.model';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SliderMapper } from '@mappings/shared/slider/slider.mapper';
import { THREE_INPUT_ARRAY_REVERSED } from '@mappings/shared/slider/sliderConstants';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { omit } from 'lodash';
import { ArteriesSegmentTypeEnum } from '@enums/shared/angiography/arteries-segment-type.enum';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';

@Injectable({
  providedIn: 'root'
})
export class VesselsFindingMapper implements IMapper<VesselsFindingApiModel, VesselsFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private sliderMapper: SliderMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('VesselsFinding_HeadMRT_UiModel', 'VesselsFinding_HeadMRT_ApiModel').convertToType(VesselsFindingApiModel);
    automapper.createMap('VesselsFinding_HeadMRT_ApiModel', 'VesselsFinding_HeadMRT_UiModel').convertToType(VesselsFindingUiModel);
  }

  mapToAPI(source: VesselsFindingUiModel, out: VesselsFindingApiModel): VesselsFindingApiModel {
    out = automapper.map('VesselsFinding_HeadMRT_UiModel', 'VesselsFinding_HeadMRT_ApiModel', source);
    source.affectedSegmentsOrVesselsLocation = this.setSegmentLocalizerForApi(source.affectedSegmentsOrVesselsLocation);
    out.affectedSegmentsOrVesselsLocation = this.enumMapper.mapToString(source.affectedSegmentsOrVesselsLocation);
    out.vascularTerritoryLocations = this.enumMapper.mapToString(source.vascularTerritoryLocations);
    out.basalGangliaLocations = this.enumMapper.mapToString(source.basalGangliaLocations);
    out.cortexLocations = this.enumMapper.mapToString(source.cortexLocations);
    out.cerebralVenousThrombosisLocations = this.enumMapper.mapToString(source.cerebralVenousThrombosisLocations);
    out.segmentsBouthillierLocations = this.enumMapper.mapToString(source.segmentsBouthillierLocations);

    out.signalT2Flare = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT2Flare);
    out.signalT1w = this.sliderMapper.mapSignalToAPI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);

    out = {
      ...out,
      ...this.referencePictureMapper.mapToAPI(source.referencePicture)
    };

    return out;
  }

  mapToUI(source: VesselsFindingApiModel, out: VesselsFindingUiModel): VesselsFindingUiModel {
    out = automapper.map('VesselsFinding_HeadMRT_ApiModel', 'VesselsFinding_HeadMRT_UiModel', source);
    this.enumMapper.mapToObject(source.affectedSegmentsOrVesselsLocation, out.affectedSegmentsOrVesselsLocation);
    out.affectedSegmentsOrVesselsLocation = this.setSegmentLocalizerForUi(out.affectedSegmentsOrVesselsLocation);
    this.enumMapper.mapToObject(source.vascularTerritoryLocations, out.vascularTerritoryLocations);
    this.enumMapper.mapToObject(source.basalGangliaLocations, out.basalGangliaLocations);
    this.enumMapper.mapToObject(source.cortexLocations, out.cortexLocations);
    this.enumMapper.mapToObject(source.cerebralVenousThrombosisLocations, out.cerebralVenousThrombosisLocations);
    this.enumMapper.mapToObject(source.segmentsBouthillierLocations, out.segmentsBouthillierLocations);

    out.signalT2Flare = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT2Flare);
    out.signalT1w = this.sliderMapper.mapSignalToUI(THREE_INPUT_ARRAY_REVERSED, source.signalT1w);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.uploadedImageFile,
      source.imageFileId
    );

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
