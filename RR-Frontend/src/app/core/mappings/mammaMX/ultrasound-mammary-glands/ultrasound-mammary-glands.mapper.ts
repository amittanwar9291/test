import { Injectable } from '@angular/core';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { IMapper } from '@interfaces/mapper.interface';
import { UltrasoundMammaryGlandsApiModel } from '@models/mammaMX/api/ultrasound-mammary-glands/ultrasound-mammary-glands-api.model';
import { UltrasoundMammaryGlandsUiModel } from '@models/mammaMX/ui/ultrasound-mammary-glands/ultrasound-mammary-glands-ui.model';

@Injectable({
  providedIn: 'root'
})
export class UltrasoundMammaryGlandsMapper implements IMapper<UltrasoundMammaryGlandsApiModel, UltrasoundMammaryGlandsUiModel> {
  constructor(private enumMapper: EnumMapper) {
    automapper
      .createMap('UltrasoundMammaryGlands_MammaMX_UiModel', 'UltrasoundMammaryGlands_MammaMX_ApiModel')
      .convertToType(UltrasoundMammaryGlandsApiModel);

    automapper
      .createMap('UltrasoundMammaryGlands_MammaMX_ApiModel', 'UltrasoundMammaryGlands_MammaMX_UiModel')
      .convertToType(UltrasoundMammaryGlandsUiModel);
  }

  mapToAPI(source: UltrasoundMammaryGlandsUiModel, out: UltrasoundMammaryGlandsApiModel): UltrasoundMammaryGlandsApiModel {
    out = automapper.map('UltrasoundMammaryGlands_MammaMX_UiModel', 'UltrasoundMammaryGlands_MammaMX_ApiModel', source);

    out.cutisLocation = this.enumMapper.mapToString(source.cutisLocation);
    out.retractionLocation = this.enumMapper.mapToString(source.retractionLocation);
    out.subcutaneousFatTissueLocation = this.enumMapper.mapToString(source.subcutaneousFatTissueLocation);
    out.mPectoralisLocation = this.enumMapper.mapToString(source.mPectoralisLocation);

    return out;
  }

  mapToUI(source: UltrasoundMammaryGlandsApiModel, out: UltrasoundMammaryGlandsUiModel): UltrasoundMammaryGlandsUiModel {
    out = automapper.map('UltrasoundMammaryGlands_MammaMX_ApiModel', 'UltrasoundMammaryGlands_MammaMX_UiModel', source);

    this.enumMapper.mapToObject(source.cutisLocation, out.cutisLocation);
    this.enumMapper.mapToObject(source.retractionLocation, out.retractionLocation);
    this.enumMapper.mapToObject(source.subcutaneousFatTissueLocation, out.subcutaneousFatTissueLocation);
    this.enumMapper.mapToObject(source.mPectoralisLocation, out.mPectoralisLocation);

    return out;
  }
}
