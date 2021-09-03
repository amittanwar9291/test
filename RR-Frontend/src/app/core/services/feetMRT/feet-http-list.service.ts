import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { LocalizationHttpService } from './http/localization-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';
import { LigamentsAndTendonsHttpService } from '@services/feetMRT/http/ligaments-and-tendons-http.service';
import { SoftTissueHttpService } from '@services/feetMRT/http/soft-tissue/soft-tissue-http.service';
import { SummaryHttpService } from '@services/feetMRT/http/summary-http.service';

@Injectable({
  providedIn: 'root'
})
export class FeetHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    boneHttpService: BonesHttpService,
    ligamentsAndTendonsHttpService: LigamentsAndTendonsHttpService,
    softTissueHttpService: SoftTissueHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      boneHttpService,
      ligamentsAndTendonsHttpService,
      softTissueHttpService,
      summaryHttpService // TODO cleanup this array
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
