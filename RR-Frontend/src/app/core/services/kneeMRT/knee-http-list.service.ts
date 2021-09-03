import { Injectable } from '@angular/core';
import { LocalizationHttpService } from './http/localization-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';
import { OsteochondralInterfaceHttpService } from './http/osteochondral-interface-http.service';
import { RibbonsHttpService } from './http/ribbons-http.service';
import { PatellaHttpService } from './http/patella-http.service';
import { SummaryHttpService } from './http/summary-http.service';
import { IHttpService } from '@interfaces/http-service.interface';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { SoftPartsHttpService } from '@services/kneeMRT/http/soft-parts/soft-parts-http.service';

@Injectable({
  providedIn: 'root'
})
export class KneeHttpListService extends HttpListService {
  servicesArray: IHttpService[];
  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    bonesHttpService: BonesHttpService,
    ribbonsHttpService: RibbonsHttpService,
    osteochondralInterfaceHttpService: OsteochondralInterfaceHttpService,
    patellaHttpService: PatellaHttpService,
    softPartsHttpService: SoftPartsHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      bonesHttpService,
      ribbonsHttpService,
      osteochondralInterfaceHttpService,
      patellaHttpService,
      softPartsHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
