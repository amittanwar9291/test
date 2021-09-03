import { Injectable } from '@angular/core';

import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';

import { LocalizationHttpService } from './http/localization-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';
import { CapsuleAndLigamentsHttpService } from './http/capsule-and-ligaments/capsule-and-ligaments-http.service';
import { MusclesAndTendonsHttpService } from './http/muscles-and-tendons-http.service';
import { SummaryHttpService } from './http/summary-http.service';
import { SoftTissueHttpService } from './http/soft-tissue/soft-tissue-http.service';
import { CartilageAndLabrumHttpService } from './http/cartilage-and-labrum-http.service';

@Injectable({
  providedIn: 'root'
})
export class HipHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    bonesHttpService: BonesHttpService,
    cartilageAndLabrumHttpService: CartilageAndLabrumHttpService,
    capsuleAndLigamentsHttpService: CapsuleAndLigamentsHttpService,
    musclesAndTendonsHttpService: MusclesAndTendonsHttpService,
    softTissueHttpService: SoftTissueHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      bonesHttpService,
      cartilageAndLabrumHttpService,
      capsuleAndLigamentsHttpService,
      musclesAndTendonsHttpService,
      softTissueHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
