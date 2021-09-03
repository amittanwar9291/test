import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';
import { AnamnesisIndicationApiModel } from '@models/abdomenMRT/api/anamnesis/anamnesis-indication-api.model';
import { AnamnesisIndicationUiModel } from '@models/abdomenMRT/ui/anamnesis/anamnesis-indication-ui.model';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisIndicationMapper implements IMapper<AnamnesisIndicationApiModel, AnamnesisIndicationUiModel> {
  constructor(private monthYearMapper: MonthYearMapper, private enumMapper: EnumMapper) {
    automapper
      .createMap('AnamnesisIndication_AbdomenMRT_UiModel', 'AnamnesisIndication_AbdomenMRT_ApiModel')
      .convertToType(AnamnesisIndicationApiModel);
    automapper
      .createMap('AnamnesisIndication_AbdomenMRT_ApiModel', 'AnamnesisIndication_AbdomenMRT_UiModel')
      .convertToType(AnamnesisIndicationUiModel);
  }

  mapToAPI(source: AnamnesisIndicationUiModel, out: AnamnesisIndicationApiModel): AnamnesisIndicationApiModel {
    out = automapper.map('AnamnesisIndication_AbdomenMRT_UiModel', 'AnamnesisIndication_AbdomenMRT_ApiModel', source);

    out.monthOfFollowUpAfterTherapy = this.monthYearMapper.mapToApi(source.dateOfFollowUpAfterTherapy);
    out.yearOfFollowUpAfterTherapy = source.dateOfFollowUpAfterTherapy.year;

    out.liverSegmentsLocalizationType = this.enumMapper.mapToString(source.liverSegmentsLocalizationType);

    return out;
  }

  mapToUI(source: AnamnesisIndicationApiModel, out: AnamnesisIndicationUiModel): AnamnesisIndicationUiModel {
    out = automapper.map('AnamnesisIndication_AbdomenMRT_ApiModel', 'AnamnesisIndication_AbdomenMRT_UiModel', source);

    out.dateOfFollowUpAfterTherapy.month = source.monthOfFollowUpAfterTherapy;
    out.dateOfFollowUpAfterTherapy.year = source.yearOfFollowUpAfterTherapy;

    this.enumMapper.mapToObject(source.liverSegmentsLocalizationType, out.liverSegmentsLocalizationType);

    return out;
  }
}
