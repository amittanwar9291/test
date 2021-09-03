import { StudyAreaHttpService } from './http/study-area-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { MediastinumHttpService } from './http/mediastinum-http.service';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { LungParenchymaHttpService } from './http/lung-parenchyma-http.service';
import { PleuraHttpService } from './http/pleura-http.service';
import { SummaryHttpService } from './http/summary-http.service';
import { IHttpService } from '@interfaces/http-service.interface';
import { Injectable } from '@angular/core';
import { BonesHttpService } from './http/bones-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';

@Injectable()
export class ThoraxMrtHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    studyAreaHttpService: StudyAreaHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    mediastinumHttpService: MediastinumHttpService,
    lungParenchymaHttpService: LungParenchymaHttpService,
    pleuraHttpService: PleuraHttpService,
    bonesHttpService: BonesHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      studyAreaHttpService,
      anamnesisHttpService,
      technologyHttpService,
      mediastinumHttpService,
      lungParenchymaHttpService,
      pleuraHttpService,
      bonesHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
