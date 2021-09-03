import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { AnamnesisFindingUiModel } from '@models/hipMRT/ui/anamnesis/anamnesis-finding-ui.model';
import { AnamnesisFindingApiModel } from '@models/hipMRT/api/anamnesis/anamnesis-finding-api.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisFindingMapper implements IMapper<AnamnesisFindingApiModel, AnamnesisFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper.createMap('AnamnesisFinding_HipMRT_UiModel', 'AnamnesisFinding_HipMRT_ApiModel').convertToType(AnamnesisFindingApiModel);
    automapper.createMap('AnamnesisFinding_HipMRT_ApiModel', 'AnamnesisFinding_HipMRT_UiModel').convertToType(AnamnesisFindingUiModel);
  }

  mapToAPI(source: AnamnesisFindingUiModel, out: AnamnesisFindingApiModel): AnamnesisFindingApiModel {
    out = automapper.map('AnamnesisFinding_HipMRT_UiModel', 'AnamnesisFinding_HipMRT_ApiModel', source);

    out.monthOfTrauma = this.monthYearMapper.mapToApi(source.dateOfTrauma);
    out.yearOfTrauma = source.dateOfTrauma.year;

    return out;
  }

  mapToUI(source: AnamnesisFindingApiModel, out: AnamnesisFindingUiModel): AnamnesisFindingUiModel {
    out = automapper.map('AnamnesisFinding_HipMRT_ApiModel', 'AnamnesisFinding_HipMRT_UiModel', source);

    out.dateOfTrauma.month = source.monthOfTrauma;
    out.dateOfTrauma.year = source.yearOfTrauma;

    return out;
  }
}
