import { StudyAreaHttpService } from './http/study-area-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { MediastinumHttpService } from './http/mediastinum/mediastinum-http.service';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { LungParenchymaHttpService } from './http/lung-parenchyma/lung-parenchyma-http.service';
import { LungInterstitiumHttpService } from './http/lung-interstitium/lung-interstitium-http.service';
import { SoftPartsHttpService } from './http/soft-parts/soft-parts-http.service';
import { SummaryHttpService } from './http/summary-http.service';
import { IHttpService } from '@interfaces/http-service.interface';
import { Injectable } from '@angular/core';
import { BonesHttpService } from './http/bones/bones-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';

@Injectable()
export class ThoraxHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    studyAreaHttpService: StudyAreaHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    mediastinumHttpService: MediastinumHttpService,
    lungParenchymaHttpService: LungParenchymaHttpService,
    lungInterstitiumHttpService: LungInterstitiumHttpService,
    softPartsHttpService: SoftPartsHttpService,
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
      lungInterstitiumHttpService,
      softPartsHttpService,
      bonesHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
