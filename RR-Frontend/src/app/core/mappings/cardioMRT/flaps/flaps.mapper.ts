import { Injectable } from '@angular/core';
import { IMapper } from '@interfaces/mapper.interface';
import { CongenitalHeartDiseasesFindingMapper } from '@mappings/cardioMRT/flaps/congenital-heart-diseases-finding.mapper';
import { HeartValvesFindingMapper } from '@mappings/cardioMRT/flaps/heart-valves-finding.mapper';
import { FlapsApiModel } from '@models/cardioMRT/api/flaps/flaps-api.model';
import { FlapsUiModel } from '@models/cardioMRT/ui/flaps/flaps-ui.model';
import { CongenitalHeartDiseasesFindingApiModel } from '@models/cardioMRT/api/flaps/congenital-heart-diseases-finding-api.model';
import { CongenitalHeartDiseasesFindingUiModel } from '@models/cardioMRT/ui/flaps/congenital-heart-diseases-finding-ui.model';
import { HeartValvesFindingApiModel } from '@models/cardioMRT/api/flaps/heart-valves-finding-api.model';
import { HeartValvesFindingUiModel } from '@models/cardioMRT/ui/flaps/heart-valves-finding-ui.model';

@Injectable({
  providedIn: 'root'
})
export class FlapsMapper implements IMapper<FlapsApiModel, FlapsUiModel> {
  constructor(
    private congenitalHeartDiseasesFindingMapper: CongenitalHeartDiseasesFindingMapper,
    private heartValvesFindingMapper: HeartValvesFindingMapper
  ) {
    automapper
      .createMap('Flaps_CardioMRT_UiModel', 'Flaps_CardioMRT_ApiModel')
      .convertToType(FlapsApiModel)
      .forSourceMember('congenitalHeartDiseases', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('heartValves', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });

    automapper
      .createMap('Flaps_CardioMRT_ApiModel', 'Flaps_CardioMRT_UiModel')
      .convertToType(FlapsUiModel)
      .forSourceMember('congenitalHeartDiseases', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      })
      .forSourceMember('heartValves', (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.ignore();
      });
  }

  mapToAPI(source: FlapsUiModel, out: FlapsApiModel): FlapsApiModel {
    out = automapper.map('Flaps_CardioMRT_UiModel', 'Flaps_CardioMRT_ApiModel', source);

    out.congenitalHeartDiseases.splice(0, out.congenitalHeartDiseases.length);
    out.heartValves.splice(0, out.heartValves.length);

    source.congenitalHeartDiseases.forEach((finding: CongenitalHeartDiseasesFindingUiModel) => {
      out.congenitalHeartDiseases.push(
        this.congenitalHeartDiseasesFindingMapper.mapToAPI(finding, new CongenitalHeartDiseasesFindingApiModel())
      );
    });
    source.heartValves.forEach((finding: HeartValvesFindingUiModel) => {
      out.heartValves.push(this.heartValvesFindingMapper.mapToAPI(finding, new HeartValvesFindingApiModel()));
    });

    return out;
  }

  mapToUI(source: FlapsApiModel, out: FlapsUiModel): FlapsUiModel {
    out = automapper.map('Flaps_CardioMRT_ApiModel', 'Flaps_CardioMRT_UiModel', source);

    out.congenitalHeartDiseases.splice(0, out.congenitalHeartDiseases.length);
    out.heartValves.splice(0, out.heartValves.length);

    source.congenitalHeartDiseases.forEach((finding: CongenitalHeartDiseasesFindingApiModel) => {
      out.congenitalHeartDiseases.push(
        this.congenitalHeartDiseasesFindingMapper.mapToAPI(finding, new CongenitalHeartDiseasesFindingUiModel())
      );
    });
    source.heartValves.forEach((finding: HeartValvesFindingApiModel) => {
      out.heartValves.push(this.heartValvesFindingMapper.mapToAPI(finding, new HeartValvesFindingUiModel()));
    });

    return out;
  }
}
