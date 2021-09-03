import { AnamnesisPreviousOperationFindingApiModel } from '@models/pelvisMRT/api/anamnesis/anamnesis-previous-operation-finding-api.model';
import { AnamnesisPreviousOperationFindingUiModel } from '@models/pelvisMRT/ui/anamnesis/anamnesis-previous-operation-finding-ui.model';
import { IMapper } from '@interfaces/mapper.interface';
import { Injectable } from '@angular/core';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisPreviousOperationMapper
  implements IMapper<AnamnesisPreviousOperationFindingApiModel, AnamnesisPreviousOperationFindingUiModel> {
  constructor(private monthYearMapper: MonthYearMapper) {
    automapper
      .createMap('AnamnesisPreviousOperation_PelvisMRT_UiModel', 'AnamnesisPreviousOperation_PelvisMRT_ApiModel')
      .convertToType(AnamnesisPreviousOperationFindingApiModel);

    automapper
      .createMap('AnamnesisPreviousOperation_PelvisMRT_ApiModel', 'AnamnesisPreviousOperation_PelvisMRT_UiModel')
      .convertToType(AnamnesisPreviousOperationFindingUiModel);
  }

  mapToAPI(
    source: AnamnesisPreviousOperationFindingUiModel,
    out: AnamnesisPreviousOperationFindingApiModel
  ): AnamnesisPreviousOperationFindingApiModel {
    out = automapper.map('AnamnesisPreviousOperation_PelvisMRT_UiModel', 'AnamnesisPreviousOperation_PelvisMRT_ApiModel', source);

    out.month = this.monthYearMapper.mapToApi(source.date);
    out.year = source.date.year;

    return out;
  }

  mapToUI(
    source: AnamnesisPreviousOperationFindingApiModel,
    out: AnamnesisPreviousOperationFindingUiModel
  ): AnamnesisPreviousOperationFindingUiModel {
    out = automapper.map('AnamnesisPreviousOperation_PelvisMRT_ApiModel', 'AnamnesisPreviousOperation_PelvisMRT_UiModel', source);

    out.date.month = source.month;
    out.date.year = source.year;

    return out;
  }
}
