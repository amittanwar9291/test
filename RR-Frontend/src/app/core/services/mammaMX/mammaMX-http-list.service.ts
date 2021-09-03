import { Injectable } from '@angular/core';

import { HttpListService } from '@abstractions/abstract-classes/http-list-service';

import { IHttpService } from '@interfaces/http-service.interface';

import { PatientIndicationService } from '@services/mammaMX/http/patient-indication.service';
import { MedicalHistoryService } from '@services/mammaMX/http/medical-history.service';
import { TechnologyService } from '@services/mammaMX/http/technology.service';
import { MammographyParenchymaAnatomyService } from '@services/mammaMX/http/mammography-parenchyma-anatomy.service';
import { MammographyFindingService } from '@services/mammaMX/http/mammography-finding/mammography-finding.service';
import { UltrasoundMammaryGlandsService } from '@services/mammaMX/http/ultrasound-mammary-glands.service';
import { UltrasoundFindingService } from '@services/mammaMX/http/ultrasound-finding/ultrasound-finding.service';
import { LymphNodesHttpService } from '@services/mammaMX/http/lymph-nodes-http.service';
import { SummaryHttpService } from '@services/mammaMX/http/summary-http.service';

@Injectable({
  providedIn: 'root'
})
export class MammaMXHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    patientIndicationService: PatientIndicationService,
    medicalHistoryService: MedicalHistoryService,
    technologyService: TechnologyService,
    mammographyParenchymaAnatomyService: MammographyParenchymaAnatomyService,
    mammographyFindingService: MammographyFindingService,
    ultrasoundMammaryGlandsService: UltrasoundMammaryGlandsService,
    ultrasoundFindingService: UltrasoundFindingService,
    lymphNodesHttpService: LymphNodesHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      patientIndicationService,
      medicalHistoryService,
      technologyService,
      mammographyParenchymaAnatomyService,
      mammographyFindingService,
      ultrasoundMammaryGlandsService,
      ultrasoundFindingService,
      lymphNodesHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
