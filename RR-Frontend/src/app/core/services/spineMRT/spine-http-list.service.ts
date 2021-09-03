import { Injectable } from '@angular/core';
import { LocalizationHttpService } from './http/localization-http.service';
import { ConfigurationHttpService } from './http/configuration-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';
import { MyelonHttpService } from './http/myelon/myelon-http.service';
import { SoftTissuesHttpService } from './http/soft-tissues/soft-tissues-http.service';
import { SacroiliacJointHttpService } from './http/sacroiliac-joint/sacroiliac-joint-http.service';
import { SummaryHttpService } from './http/summary-http.service';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { IntervertebalDiscJointsService } from '@services/spineMRT/http/intervertebal-disc-joints.service';

@Injectable({
  providedIn: 'root'
})
export class SpineHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    configurationHttpService: ConfigurationHttpService,
    intervertebalDiscJointsService: IntervertebalDiscJointsService,
    bonesHttpService: BonesHttpService,
    spinalCanalHttpService: MyelonHttpService,
    softTissuesHttpService: SoftTissuesHttpService,
    sacroiliacJointHttpService: SacroiliacJointHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      configurationHttpService,
      intervertebalDiscJointsService,
      bonesHttpService,
      spinalCanalHttpService,
      softTissuesHttpService,
      sacroiliacJointHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
