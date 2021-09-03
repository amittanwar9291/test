import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';

import { TechnologyHttpService } from './http/technology-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { LocalizationHttpService } from './http/localization-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';
import { CapsuleAndRibbonsHttpService } from './http/capsule-and-ribbons.service';
import { TendinopathyHttpService } from './http/tendinopathy.service';
import { NerveCompressionHttpService } from './http/nerve-compression.service';
import { SoftTissueHttpService } from './http/soft-tissue/soft-tissue-http.service';
import { EvaluationHttpService } from '@services/handMRT/http/evaluation-http.service';

@Injectable({
  providedIn: 'root'
})
export class HandHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    bonesHttpService: BonesHttpService,
    capsuleAndRibbonsHttpService: CapsuleAndRibbonsHttpService,
    tendinopathyHttpService: TendinopathyHttpService,
    nerveCompressionHttpService: NerveCompressionHttpService,
    softTissueHttpService: SoftTissueHttpService,
    evaluationHttpService: EvaluationHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      bonesHttpService,
      capsuleAndRibbonsHttpService,
      tendinopathyHttpService,
      nerveCompressionHttpService,
      softTissueHttpService,
      evaluationHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
