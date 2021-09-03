import { Injectable } from '@angular/core';

import { IMapper } from '@interfaces/mapper.interface';

import { PreviousTherapiesMapper } from '@mappings/mammaMX/medical-history/previous-therapies.mapper';
import { FamilyPersonMapper } from '@mappings/mammaMX/medical-history/family-person.mapper';

import { MedicalHistoryApiModel } from '@models/mammaMX/api/medical-history/medical-history-api.model';
import { MedicalHistoryUiModel } from '@models/mammaMX/ui/medical-history/medical-history-ui.model';
import { FamilyPersonUi } from '@models/mammaMX/ui/medical-history/family-person-ui.model';
import { PreviousTherapiesUi } from '@models/mammaMX/ui/medical-history/previous-therapies-ui.model';
import { FamilyPersonApi } from '@models/mammaMX/api/medical-history/family-person-api.model';
import { PreviousTherapiesApi } from '@models/mammaMX/api/medical-history/previous-therapies-api.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryMapper implements IMapper<MedicalHistoryApiModel, MedicalHistoryUiModel> {
  constructor(private previousTherapiesMapper: PreviousTherapiesMapper, private personMapper: FamilyPersonMapper) {
    automapper
      .createMap('MedicalHistory_MammaMX_UiModel', 'MedicalHistory_MammaMX_ApiModel')
      .convertToType(MedicalHistoryApiModel)
      .forSourceMember('ownFamilyAnamnesisFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('previousTherapiesFindings', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('calendar', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        const dirtyDate: Date = opts.sourceObject[opts.sourcePropertyName];
        return dirtyDate ? dirtyDate.toDateString() : null;
      });

    automapper
      .createMap('MedicalHistory_MammaMX_ApiModel', 'MedicalHistory_MammaMX_UiModel')
      .convertToType(MedicalHistoryUiModel)
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

  mapToAPI(source: MedicalHistoryUiModel, out: MedicalHistoryApiModel): MedicalHistoryApiModel {
    out = automapper.map('MedicalHistory_MammaMX_UiModel', 'MedicalHistory_MammaMX_ApiModel', source);
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

  mapToUI(source: MedicalHistoryApiModel, out: MedicalHistoryUiModel): MedicalHistoryUiModel {
    out = automapper.map('MedicalHistory_MammaMX_ApiModel', 'MedicalHistory_MammaMX_UiModel', source);
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
