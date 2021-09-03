import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { LungParenchymaFindingApiModel } from '@models/thoraxMRT/api/lung-parenchyma/lung-parenchyma-finding-api.model';
import { LungParenchymaFindingUiModel } from '@models/thoraxMRT/ui/lung-parenchyma/lung-parenchyma-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class LungParenchymaFindingMapper implements IMapper<LungParenchymaFindingApiModel, LungParenchymaFindingUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('LungParenchymaFinding_ThoraxMRT_ApiModel', 'LungParenchymaFinding_ThoraxMRT_UiModel')
      .convertToType(LungParenchymaFindingUiModel);
    automapper
      .createMap('LungParenchymaFinding_ThoraxMRT_UiModel', 'LungParenchymaFinding_ThoraxMRT_ApiModel')
      .convertToType(LungParenchymaFindingApiModel);
  }

  mapToAPI(source: LungParenchymaFindingUiModel, out: LungParenchymaFindingApiModel): LungParenchymaFindingApiModel {
    out = automapper.map('LungParenchymaFinding_ThoraxMRT_UiModel', 'LungParenchymaFinding_ThoraxMRT_ApiModel', source);

    out.lungParenchymaPathologyLocation = this.enumMapper.mapToString(source.lungParenchymaPathologyLocation);
    out.bronchiectasisOrWallThickeningLocation = this.enumMapper.mapToString(source.bronchiectasisOrWallThickeningLocation);
    out.mucusPlaqueLocation = this.enumMapper.mapToString(source.mucusPlaqueLocation);
    out.sacculationOrAbscessLocation = this.enumMapper.mapToString(source.sacculationOrAbscessLocation);
    out.consolidationLocation = this.enumMapper.mapToString(source.consolidationLocation);
    out.perfusionDisorderLocation = this.enumMapper.mapToString(source.perfusionDisorderLocation);

    out.bronchiectasisOrWallThickeningLocalizer.lessThan50Location = this.enumMapper.mapToString(
      source.bronchiectasisOrWallThickeningLocalizer.lessThan50Location
    );
    out.bronchiectasisOrWallThickeningLocalizer.moreThan50Location = this.enumMapper.mapToString(
      source.bronchiectasisOrWallThickeningLocalizer.moreThan50Location
    );
    out.mucusPlaqueLocalizer.lessThan50Location = this.enumMapper.mapToString(source.mucusPlaqueLocalizer.lessThan50Location);
    out.mucusPlaqueLocalizer.moreThan50Location = this.enumMapper.mapToString(source.mucusPlaqueLocalizer.moreThan50Location);
    out.sacculationOrAbscessLocalizer.lessThan50Location = this.enumMapper.mapToString(
      source.sacculationOrAbscessLocalizer.lessThan50Location
    );
    out.sacculationOrAbscessLocalizer.moreThan50Location = this.enumMapper.mapToString(
      source.sacculationOrAbscessLocalizer.moreThan50Location
    );
    out.consolidationLocalizer.lessThan50Location = this.enumMapper.mapToString(source.consolidationLocalizer.lessThan50Location);
    out.consolidationLocalizer.moreThan50Location = this.enumMapper.mapToString(source.consolidationLocalizer.moreThan50Location);
    out.otherAbnormalityLocalizer.lessThan50Location = this.enumMapper.mapToString(source.otherAbnormalityLocalizer.lessThan50Location);
    out.otherAbnormalityLocalizer.moreThan50Location = this.enumMapper.mapToString(source.otherAbnormalityLocalizer.moreThan50Location);
    out.functionLocalizer.lessThan50Location = this.enumMapper.mapToString(source.functionLocalizer.lessThan50Location);
    out.functionLocalizer.moreThan50Location = this.enumMapper.mapToString(source.functionLocalizer.moreThan50Location);

    return out;
  }

  mapToUI(source: LungParenchymaFindingApiModel, out: LungParenchymaFindingUiModel): LungParenchymaFindingUiModel {
    out = automapper.map('LungParenchymaFinding_ThoraxMRT_ApiModel', 'LungParenchymaFinding_ThoraxMRT_UiModel', source);

    this.enumMapper.mapToObject(source.lungParenchymaPathologyLocation, out.lungParenchymaPathologyLocation);
    this.enumMapper.mapToObject(source.bronchiectasisOrWallThickeningLocation, out.bronchiectasisOrWallThickeningLocation);
    this.enumMapper.mapToObject(source.mucusPlaqueLocation, out.mucusPlaqueLocation);
    this.enumMapper.mapToObject(source.sacculationOrAbscessLocation, out.sacculationOrAbscessLocation);
    this.enumMapper.mapToObject(source.consolidationLocation, out.consolidationLocation);
    this.enumMapper.mapToObject(source.perfusionDisorderLocation, out.perfusionDisorderLocation);

    this.enumMapper.mapToObject(
      source.bronchiectasisOrWallThickeningLocalizer.lessThan50Location,
      out.bronchiectasisOrWallThickeningLocalizer.lessThan50Location
    );
    this.enumMapper.mapToObject(
      source.bronchiectasisOrWallThickeningLocalizer.moreThan50Location,
      out.bronchiectasisOrWallThickeningLocalizer.moreThan50Location
    );
    this.enumMapper.mapToObject(source.mucusPlaqueLocalizer.lessThan50Location, out.mucusPlaqueLocalizer.lessThan50Location);
    this.enumMapper.mapToObject(source.mucusPlaqueLocalizer.moreThan50Location, out.mucusPlaqueLocalizer.moreThan50Location);
    this.enumMapper.mapToObject(
      source.sacculationOrAbscessLocalizer.lessThan50Location,
      out.sacculationOrAbscessLocalizer.lessThan50Location
    );
    this.enumMapper.mapToObject(
      source.sacculationOrAbscessLocalizer.moreThan50Location,
      out.sacculationOrAbscessLocalizer.moreThan50Location
    );
    this.enumMapper.mapToObject(source.consolidationLocalizer.lessThan50Location, out.consolidationLocalizer.lessThan50Location);
    this.enumMapper.mapToObject(source.consolidationLocalizer.moreThan50Location, out.consolidationLocalizer.moreThan50Location);
    this.enumMapper.mapToObject(source.otherAbnormalityLocalizer.lessThan50Location, out.otherAbnormalityLocalizer.lessThan50Location);
    this.enumMapper.mapToObject(source.otherAbnormalityLocalizer.moreThan50Location, out.otherAbnormalityLocalizer.moreThan50Location);
    this.enumMapper.mapToObject(source.functionLocalizer.lessThan50Location, out.functionLocalizer.lessThan50Location);
    this.enumMapper.mapToObject(source.functionLocalizer.moreThan50Location, out.functionLocalizer.moreThan50Location);

    return out;
  }
}
