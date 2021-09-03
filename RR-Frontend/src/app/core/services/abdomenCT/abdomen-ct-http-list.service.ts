import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { AreaOfInvestigationHttpService } from '@services/abdomenCT/http/area-of-investigation-http.service';
import { MedicalHistoryHttpService } from '@services/abdomenCT/http/medical-history-http.service';
import { TechnologyHttpService } from '@services/abdomenCT/http/technology-http.service';

@Injectable({
  providedIn: 'root'
})
export class AbdomenCtHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    private areaOfInvestigationHttpService: AreaOfInvestigationHttpService,
    private medicalHistoryHttpService: MedicalHistoryHttpService,
    private technologyHttpService: TechnologyHttpService
  ) {
    super();

    this.servicesArray = [areaOfInvestigationHttpService, medicalHistoryHttpService, technologyHttpService];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
