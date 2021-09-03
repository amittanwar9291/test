import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { EnumMapper } from '@mappings/shared/enum/enum.mapper';

import { BonesFindingUiModel } from '@models/spineCT/ui/bones/bones-finding-ui.model';
import { BonesFindingApiModel } from '@models/spineCT/api/bones/bones-finding-api.model';

@Injectable({
  providedIn: 'root'
})
export class SpineCTBonesFindingMapper implements IMapper<BonesFindingApiModel, BonesFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper.createMap('Bones_SpineCT_FindingApiModel', 'Bones_SpineCT_FindingUiModel').convertToType(BonesFindingUiModel);
    automapper.createMap('Bones_SpineCT_FindingUiModel', 'Bones_SpineCT_FindingApiModel').convertToType(BonesFindingApiModel);
  }

  mapToAPI(source: BonesFindingUiModel, out: BonesFindingApiModel): BonesFindingApiModel {
    out = automapper.map('Bones_SpineCT_FindingUiModel', 'Bones_SpineCT_FindingApiModel', source);

    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.spondylodesisSpineLocations = this.enumMapper.mapToString(source.spondylodesisSpineLocations);
    out.interventionSpineLocations = this.enumMapper.mapToString(source.interventionSpineLocations);
    out.intervertebralDiscReplacementSpineLocations = this.enumMapper.mapToString(source.intervertebralDiscReplacementSpineLocations);
    out.vertebraSpineLocations = this.enumMapper.mapToString(source.vertebraSpineLocations);
    out.vertebralBodyLocalizations = this.enumMapper.mapToString(source.vertebralBodyLocalizations);
    return out;
  }

  mapToUI(source: BonesFindingApiModel, out: BonesFindingUiModel): BonesFindingUiModel {
    out = automapper.map('Bones_SpineCT_FindingApiModel', 'Bones_SpineCT_FindingUiModel', source);

    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    this.enumMapper.mapToObject(source.spondylodesisSpineLocations, out.spondylodesisSpineLocations);
    this.enumMapper.mapToObject(source.interventionSpineLocations, out.interventionSpineLocations);
    this.enumMapper.mapToObject(source.intervertebralDiscReplacementSpineLocations, out.intervertebralDiscReplacementSpineLocations);
    this.enumMapper.mapToObject(source.vertebraSpineLocations, out.vertebraSpineLocations);
    this.enumMapper.mapToObject(source.vertebralBodyLocalizations, out.vertebralBodyLocalizations);
    return out;
  }
}
