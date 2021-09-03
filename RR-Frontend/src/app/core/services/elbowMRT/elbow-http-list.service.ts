import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { LocalizationHttpService } from './http/localization-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';
import { CartilageLigamentsCapsuleHttpService } from '@services/elbowMRT/http/cartilage-ligaments-capsule-http.service';
import { TendonsAndMusclesHttpService } from '@services/elbowMRT/http/tendons-and-muscles-http.service';
import { SoftTissueHttpService } from '@services/elbowMRT/http/soft-tissue/soft-tissue-http.service';
import { SummaryHttpService } from '@services/elbowMRT/http/summary-http.service';

@Injectable({
  providedIn: 'root'
})
export class ElbowHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    boneHttpService: BonesHttpService,
    cartilageLigamentsCapsuleHttpService: CartilageLigamentsCapsuleHttpService,
    tendonsAndMusclesHttpService: TendonsAndMusclesHttpService,
    softTissueHttpService: SoftTissueHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      boneHttpService,
      cartilageLigamentsCapsuleHttpService,
      tendonsAndMusclesHttpService,
      softTissueHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
