import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { CenterspecificPreferencesSetUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-set-ui.model';
import { CenterspecificPreferencesSetApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-set-api.model';
import { CenterspecificPreferencesSequenceApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-sequence-api.model';
import { CenterspecificPreferencesSequenceUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-sequence-ui.model';

import { CenterspecificSequencesMapper } from '@mappings/shared/centerspecific-preferences/centerspecific-sequences.mapper';
import { CenterspecificAcquisitionMapper } from '@mappings/shared/centerspecific-preferences/centerspecific-acquisition.mapper';

import { CenterspecificPreferencesAcquisitionUiModel } from '@models/shared/centerspecific-preferences/ui/centerspecific-preferences-acquisition-ui.model';
import { CenterspecificPreferencesAcquisitionApiModel } from '@models/shared/centerspecific-preferences/api/centerspecific-preferences-acquisition-api.model';

@Injectable({
  providedIn: 'root'
})
export class CenterspecificPreferencesSetMapper
  implements IMapper<CenterspecificPreferencesSetApiModel, CenterspecificPreferencesSetUiModel> {
  constructor(
    private centerspecificSequencesMapper: CenterspecificSequencesMapper,
    private centerspecificAcquisitionsMapper: CenterspecificAcquisitionMapper
  ) {
    automapper
      .createMap('CSP_Set_ApiModel', 'CSP_Set_UiModel')
      .convertToType(CenterspecificPreferencesSetUiModel)
      .forSourceMember('sets', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());

    automapper
      .createMap('CSP_Set_UiModel', 'CSP_Set_ApiModel')
      .convertToType(CenterspecificPreferencesSetApiModel)
      .forSourceMember('sets', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.ignore());
  }

  mapToAPI(source: CenterspecificPreferencesSetUiModel, out: CenterspecificPreferencesSetApiModel): CenterspecificPreferencesSetApiModel {
    out = automapper.map('CSP_Set_UiModel', 'CSP_Set_ApiModel', source);

    out.sequences = [];
    source.sequences.forEach(sequence => {
      out.sequences.push(this.centerspecificSequencesMapper.mapToAPI(sequence, new CenterspecificPreferencesSequenceApiModel()));
    });

    out.acquisitions = [];
    source.acquisitions.forEach(acquisition => {
      out.acquisitions.push(
        this.centerspecificAcquisitionsMapper.mapToAPI(acquisition, new CenterspecificPreferencesAcquisitionApiModel())
      );
    });

    return out;
  }

  mapToUI(source: CenterspecificPreferencesSetApiModel, out: CenterspecificPreferencesSetUiModel): CenterspecificPreferencesSetUiModel {
    out = automapper.map('CSP_Set_ApiModel', 'CSP_Set_UiModel', source);

    out.sequences = [];
    source.sequences.forEach(sequence => {
      out.sequences.push(this.centerspecificSequencesMapper.mapToUI(sequence, new CenterspecificPreferencesSequenceUiModel()));
    });

    out.acquisitions = [];
    source.acquisitions.forEach(acquisition => {
      out.acquisitions.push(this.centerspecificAcquisitionsMapper.mapToUI(acquisition, new CenterspecificPreferencesAcquisitionUiModel()));
    });

    return out;
  }
}
