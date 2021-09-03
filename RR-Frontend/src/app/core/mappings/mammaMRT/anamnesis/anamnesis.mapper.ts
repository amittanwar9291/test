import { Injectable } from '@angular/core';

import { AnamnesisApi } from '@models/mammaMRT/api/anamnesis/anamnesis-api.model';
import { AnamnesisUi } from '@models/mammaMRT/ui/anamnesis/anamnesis-ui.model';
import { FamilyPersonUi } from '@models/mammaMRT/ui/anamnesis/family-person-ui.model';
import { PreviousTherapiesUi } from '@models/mammaMRT/ui/anamnesis/previous-therapies-ui.model';
import { FamilyPersonApi } from '@models/mammaMRT/api/anamnesis/family-person-api.model';
import { PreviousTherapiesApi } from '@models/mammaMRT/api/anamnesis/previous-therapies-api.model';

import { IMapper } from '@interfaces/mapper.interface';

import { PreviousTherapiesMapper } from '@mappings/mammaMRT/anamnesis/previous-therapies.mapper';
import { FamilyPersonMapper } from '@mappings/mammaMRT/anamnesis/family-person.mapper';

@Injectable({
  providedIn: 'root'
})
export class AnamnesisMapper implements IMapper<AnamnesisApi, AnamnesisUi> {
  constructor(private previousTherapiesMapper: PreviousTherapiesMapper, private personMapper: FamilyPersonMapper) {
    automapper
      .createMap('Anamnesis_MammaMRT_UiModel', 'Anamnesis_MammaMRT_ApiModel')
      .convertToType(AnamnesisApi)
      .forSourceMember('ownFamilyAnamnesisFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('previousTherapiesFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('calendar', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        const dirtyDate: Date = opts.sourceObject[opts.sourcePropertyName];
        // purify date of timezone
        return dirtyDate ? dirtyDate.toDateString() : null;
      });

    automapper
      .createMap('Anamnesis_MammaMRT_ApiModel', 'Anamnesis_MammaMRT_UiModel')
      .convertToType(AnamnesisUi)
      .forSourceMember('ownFamilyAnamnesisFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('previousTherapiesFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('calendar', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        const date: string = opts.sourceObject[opts.sourcePropertyName];
        return date ? new Date(date) : null;
      });
  }

  mapToAPI(source: AnamnesisUi, out: AnamnesisApi): AnamnesisApi {
    out = automapper.map('Anamnesis_MammaMRT_UiModel', 'Anamnesis_MammaMRT_ApiModel', source);
    out.ownFamilyAnamnesisFindings.splice(0, out.ownFamilyAnamnesisFindings.length);
    out.previousTherapiesFindings.splice(0, out.previousTherapiesFindings.length);
    source.ownFamilyAnamnesisFindings.forEach(finding => {
      out.ownFamilyAnamnesisFindings.push(this.personMapper.mapToAPI(finding, new FamilyPersonApi()));
    });
    source.previousTherapiesFindings.forEach(finding => {
      out.previousTherapiesFindings.push(this.previousTherapiesMapper.mapToAPI(finding, new PreviousTherapiesApi()));
    });

    if (isNaN(out.pregnanciesQuantity)) {
      out.pregnanciesQuantity = null;
    }

    return out;
  }

  mapToUI(source: AnamnesisApi, out: AnamnesisUi): AnamnesisUi {
    out = automapper.map('Anamnesis_MammaMRT_ApiModel', 'Anamnesis_MammaMRT_UiModel', source);
    out.ownFamilyAnamnesisFindings.splice(0, out.ownFamilyAnamnesisFindings.length);
    out.previousTherapiesFindings.splice(0, out.previousTherapiesFindings.length);
    source.ownFamilyAnamnesisFindings.forEach(finding => {
      out.ownFamilyAnamnesisFindings.push(this.personMapper.mapToUI(finding, new FamilyPersonUi()));
    });
    source.previousTherapiesFindings.forEach(finding => {
      out.previousTherapiesFindings.push(this.previousTherapiesMapper.mapToUI(finding, new PreviousTherapiesUi()));
    });

    if (out.pregnanciesQuantity === null) {
      out.pregnanciesQuantity = undefined;
    }

    return out;
  }
}
