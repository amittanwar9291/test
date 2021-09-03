import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { Injectable } from '@angular/core';
import { LocalizationHttpService } from './http/localization-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { CoronaryAnteriesHttpService } from './http/coronary-anteries-http.service';
import { SupraaorticVesselsHttpService } from './http/supraaortic-vessels-http.service';
import { UpperArteriesHttpService } from './http/upper-arteries-http.service';
import { AortaHttpService } from './http/aorta-http.service';
import { AbdomenHttpService } from './http/abdomen-http.service';
import { PelvisLegArteriesHttpService } from './http/pelvis-leg-arteries-http.service';
import { SummaryHttpService } from './http/summary-http.service';
import { SoftTissueHttpService } from './http/soft-tissue-http.service';

@Injectable({
  providedIn: 'root'
})
export class AngiographyCtHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    coronaryArteriesHttpService: CoronaryAnteriesHttpService,
    supraaorticVesselsHttpService: SupraaorticVesselsHttpService,
    upperArteriesHttpService: UpperArteriesHttpService,
    aortaHttpService: AortaHttpService,
    abdomenHttpService: AbdomenHttpService,
    pelvisLegArteriesHttpService: PelvisLegArteriesHttpService,
    softTissueHttpService: SoftTissueHttpService,
    evaluationHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      coronaryArteriesHttpService,
      supraaorticVesselsHttpService,
      upperArteriesHttpService,
      aortaHttpService,
      abdomenHttpService,
      pelvisLegArteriesHttpService,
      softTissueHttpService,
      evaluationHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
