import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { VesselsFindingApiModel } from '@models/headCT/api/vessels/vessels-finding-api.model';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { ArteriesSegmentsLocalizerModel } from '@models/shared/angiography/localizers/arteries-segments-localizer.model';
import { ArteriesSegmentTypeEnum } from '@enums/shared/angiography';
import { omit } from 'lodash';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { ReferencePictureMapper } from '@mappings/shared/reference-picture/reference-picture.mapper';
import { FileApiModel } from '@models/shared/uploader/file-api.model';

@Injectable({
  providedIn: 'root'
})
export class VesselsFindingMapper implements IMapper<VesselsFindingApiModel, VesselsFindingUiModel> {
  constructor(private enumMapper: EnumMapper, private referencePictureMapper: ReferencePictureMapper) {
    automapper.createMap('VesselsFinding_HeadCT_UiModel', 'VesselsFinding_HeadCT_ApiModel').convertToType(VesselsFindingApiModel);
    automapper.createMap('VesselsFinding_HeadCT_ApiModel', 'VesselsFinding_HeadCT_UiModel').convertToType(VesselsFindingUiModel);
  }

  private setSegmentLocalizerForApi = (source: ArteriesSegmentsLocalizerModel): ArteriesSegmentsLocalizerModel => {
    return omit(source, [
      ArteriesSegmentTypeEnum.AllACARight,
      ArteriesSegmentTypeEnum.AllACALeft,
      ArteriesSegmentTypeEnum.AllMCARight,
      ArteriesSegmentTypeEnum.AllMCALeft,
      ArteriesSegmentTypeEnum.AllPCARight,
      ArteriesSegmentTypeEnum.AllPCALeft
    ]);
  }

  private setSegmentLocalizerForUi = (source: ArteriesSegmentsLocalizerModel): ArteriesSegmentsLocalizerModel => {
    source.allACARight = source.aCAa1Right && source.aCAa2Right;
    source.allACALeft = source.aCAa1Left && source.aCAa2Left;
    source.allMCARight = source.mCAm1Right && source.mCAm2Right && source.mCAm3Right;
    source.allMCALeft = source.mCAm1Left && source.mCAm2Left && source.mCAm3Left;
    source.allPCARight = source.pCAp1Right && source.pCAp2Right;
    source.allPCALeft = source.pCAp1Left && source.pCAp2Left;
    return source;
  }

  mapToAPI(source: VesselsFindingUiModel, out: VesselsFindingApiModel): VesselsFindingApiModel {
    out = automapper.map('VesselsFinding_HeadCT_UiModel', 'VesselsFinding_HeadCT_ApiModel', source);
    out.cortexLocation = this.enumMapper.mapToString(source.cortexLocation);
    out.basalGangliaLocation = this.enumMapper.mapToString(source.basalGangliaLocation);
    out.vascularTerritoryLocation = this.enumMapper.mapToString(source.vascularTerritoryLocation);
    source.affectedSegmentsOrVesselsLocation = this.setSegmentLocalizerForApi(source.affectedSegmentsOrVesselsLocation);
    out.affectedSegmentsOrVesselsLocation = this.enumMapper.mapToString(source.affectedSegmentsOrVesselsLocation);
    out.internalCarotidArterySegmentsLocations = this.enumMapper.mapToString(source.internalCarotidArterySegmentsLocations);
    out.cerebralVenousThrombosisLocation = this.enumMapper.mapToString(source.cerebralVenousThrombosisLocation);

    out.serialNumber = source.referencePicture.serialNumber;
    out.pictureNumber = source.referencePicture.pictureNumber;
    out.imageFileId = source.referencePicture.imageFileId;
    out.imageFile = source.referencePicture.uploadedImageFile as FileApiModel;

    out.perfusion01SerialNumber = source.perfusion01ReferencePicture?.serialNumber;
    out.perfusion01PictureNumber = source.perfusion01ReferencePicture?.pictureNumber;
    out.perfusion01ImageFileId = source.perfusion01ReferencePicture?.imageFileId;
    out.perfusion01ImageFile = source.perfusion01ReferencePicture?.uploadedImageFile as FileApiModel;

    out.perfusion02SerialNumber = source.perfusion02ReferencePicture.serialNumber;
    out.perfusion02PictureNumber = source.perfusion02ReferencePicture.pictureNumber;
    out.perfusion02ImageFileId = source.perfusion02ReferencePicture.imageFileId;
    out.perfusion02ImageFile = source.perfusion02ReferencePicture.uploadedImageFile as FileApiModel;

    return out;
  }

  mapToUI(source: VesselsFindingApiModel, out: VesselsFindingUiModel): VesselsFindingUiModel {
    out = automapper.map('VesselsFinding_HeadCT_ApiModel', 'VesselsFinding_HeadCT_UiModel', source);
    this.enumMapper.mapToObject(source.cortexLocation, out.cortexLocation);
    this.enumMapper.mapToObject(source.basalGangliaLocation, out.basalGangliaLocation);
    this.enumMapper.mapToObject(source.vascularTerritoryLocation, out.vascularTerritoryLocation);
    this.enumMapper.mapToObject(source.affectedSegmentsOrVesselsLocation, out.affectedSegmentsOrVesselsLocation);
    out.affectedSegmentsOrVesselsLocation = this.setSegmentLocalizerForUi(out.affectedSegmentsOrVesselsLocation);
    this.enumMapper.mapToObject(source.internalCarotidArterySegmentsLocations, out.internalCarotidArterySegmentsLocations);
    this.enumMapper.mapToObject(source.cerebralVenousThrombosisLocation, out.cerebralVenousThrombosisLocation);

    out.referencePicture = this.referencePictureMapper.mapToUI(
      source.pictureNumber,
      source.serialNumber,
      source.imageFile,
      source.imageFileId
    );

    out.perfusion01ReferencePicture = this.referencePictureMapper.mapToUI(
      source.perfusion01PictureNumber,
      source.perfusion01SerialNumber,
      source.perfusion01ImageFile,
      source.perfusion01ImageFileId
    );

    out.perfusion02ReferencePicture = this.referencePictureMapper.mapToUI(
      source.perfusion02PictureNumber,
      source.perfusion02SerialNumber,
      source.perfusion02ImageFile,
      source.perfusion02ImageFileId
    );

    return out;
  }
}
