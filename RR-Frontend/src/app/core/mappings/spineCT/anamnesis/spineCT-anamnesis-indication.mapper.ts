import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { EnumMapper } from '@mappings/shared/enum/enum.mapper';
import { SpineDirectionalLocationMapper } from '@mappings/spineMRT/shared/spine-directional-location/spine-directional-location.mapper';
import { AnamnesisIndicationApiModel } from '@models/spineCT/api/anamnesis/anamnesis-indication-api.model';
import { AnamnesisIndicationUiModel } from '@models/spineCT/ui/anamnesis/anamnesis-indication-ui.model';
import { MonthYearMapper } from '@mappings/shared/month-year/month-year.mapper';

@Injectable({
  providedIn: 'root'
})
export class SpineCTAnamnesisIndicationMapper implements IMapper<AnamnesisIndicationApiModel, AnamnesisIndicationUiModel> {
  constructor(
    private enumMapper: EnumMapper,
    private spineDirectionalLocationMapper: SpineDirectionalLocationMapper,
    private monthYearMapper: MonthYearMapper
  ) {
    automapper.createMap('AnamnesisIndicationApiModel', 'AnamnesisIndicationUiModel').convertToType(AnamnesisIndicationUiModel);
    automapper.createMap('AnamnesisIndicationUiModel', 'AnamnesisIndicationApiModel').convertToType(AnamnesisIndicationApiModel);
  }

  mapToAPI(source: AnamnesisIndicationUiModel, out: AnamnesisIndicationApiModel): AnamnesisIndicationApiModel {
    out = automapper.map('AnamnesisIndicationUiModel', 'AnamnesisIndicationApiModel', source);
    out.spineLocation = this.enumMapper.mapToString(source.spineLocation);
    out.spineLocationBones = this.spineDirectionalLocationMapper.mapToString(source.spineLocationBones);

    out.monthOfVertebralBodyFracture = this.monthYearMapper.mapToApi(source.dateOfVertebralBodyFracture);
    out.yearOfVertebralBodyFracture = source.dateOfVertebralBodyFracture.year;

    return out;
  }

  mapToUI(source: AnamnesisIndicationApiModel, out: AnamnesisIndicationUiModel): AnamnesisIndicationUiModel {
    out = automapper.map('AnamnesisIndicationApiModel', 'AnamnesisIndicationUiModel', source);
    this.enumMapper.mapToObject(source.spineLocation, out.spineLocation);
    this.spineDirectionalLocationMapper.mapToObject(source.spineLocationBones, out.spineLocationBones);

    out.dateOfVertebralBodyFracture.month = source.monthOfVertebralBodyFracture;
    out.dateOfVertebralBodyFracture.year = source.yearOfVertebralBodyFracture;

    return out;
  }
}
