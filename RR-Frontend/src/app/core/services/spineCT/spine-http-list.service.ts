import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';

import { LocalizationHttpService } from './http/localization-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';
import { ConfigurationHttpService } from './http/configuration-http.service';
import { DiscHttpService } from './http/disc-http.service';
import { MyelonHttpService } from './http/myelon-http.service';
import { SoftTissuesHttpService } from './http/soft-tissues/soft-tissues-http.service';
import { SacroiliacJointHttpService } from './http/sacroiliac-joint-http.service';
import { SummaryHttpService } from '@services/spineCT/http/summary-http.service';

@Injectable()
export class SpineHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    configurationHttpService: ConfigurationHttpService,
    discHttpService: DiscHttpService,
    bonesHttpService: BonesHttpService,
    myelonSpinalCanalHttpService: MyelonHttpService,
    softTissueHttpService: SoftTissuesHttpService,
    summaryHttpService: SummaryHttpService,
    sacroiliacJointHttpService: SacroiliacJointHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      configurationHttpService,
      discHttpService,
      bonesHttpService,
      myelonSpinalCanalHttpService,
      softTissueHttpService,
      sacroiliacJointHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
