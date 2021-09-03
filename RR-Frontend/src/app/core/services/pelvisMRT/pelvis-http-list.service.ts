import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { LocalizationHttpService } from './http/localization-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { ProstateHttpService } from './http/prostate-http.service';
import { MaleSexHttpService } from './http/male-sex/male-sex.http.service';
import { FemaleSexHttpService } from './http/female-sex/female-sex-http.service';
import { PelvicFloorHttpService } from './http/pelvic-floor-http.service';
import { RectumHttpService } from './http/rectum-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';
import { BladderHttpService } from './http/bladder/bladder-http.service';
import { LymphNodesHttpService } from './http/lymph-nodes-http.service';
import { SummaryHttpService } from './http/summary-http.service';

@Injectable({
  providedIn: 'root'
})
export class PelvisHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    prostateHttpService: ProstateHttpService,
    maleSexHttpService: MaleSexHttpService,
    femaleSexHttpService: FemaleSexHttpService,
    pelvicFloorHttpService: PelvicFloorHttpService,
    rectumHttpService: RectumHttpService,
    bladderHttpService: BladderHttpService,
    bonesHttpService: BonesHttpService,
    lymphNodesHttpService: LymphNodesHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      prostateHttpService,
      maleSexHttpService,
      femaleSexHttpService,
      pelvicFloorHttpService,
      rectumHttpService,
      bladderHttpService,
      bonesHttpService,
      lymphNodesHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
