import { Injectable } from '@angular/core';

import { HttpListService } from '@abstractions/abstract-classes/http-list-service';

import { IHttpService } from '@interfaces/http-service.interface';

import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { AnatomyHttpService } from './http/anatomy-http.service';
import { AnatomyEnhancementHttpService } from './http/anatomy-enhancement-http.service';
import { DiagnosisHttpService } from './http/diagnosis/diagnosis-http.service';
import { LymphNodeHttpService } from './http/lymph-node.service';
import { BonesHttpService } from './http/bones-http.service';
import { RatingHttpService } from './http/rating-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { PatientIndicationHttpService } from './http/patient-indication-http.service';

@Injectable()
export class MammaHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    patientIndicationHttpService: PatientIndicationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    anatomyHttpService: AnatomyHttpService,
    anatomyEnhancementHttpService: AnatomyEnhancementHttpService,
    diagnosisHttpService: DiagnosisHttpService,
    lymphNodeHttpService: LymphNodeHttpService,
    bonesHttpService: BonesHttpService,
    ratingHttpService: RatingHttpService
  ) {
    super();

    this.servicesArray = [
      patientIndicationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      anatomyHttpService,
      anatomyEnhancementHttpService,
      diagnosisHttpService,
      lymphNodeHttpService,
      bonesHttpService,
      ratingHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
