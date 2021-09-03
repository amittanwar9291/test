import { Injectable } from '@angular/core';
import { IHttpService } from '@interfaces/http-service.interface';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { AreaOfExaminationHttpService } from './http/area-of-examination-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { FlapsHttpService } from './http/flaps-http.service';
import { LeftVentricleHttpService } from './http/left-ventricle-http.service';
import { FindingsVentriclesHttpService } from './http/findings-ventricles-http.service';
import { RightVentricleHttpService } from './http/right-ventricle-http.service';
import { PericardiumVesselsHttpService } from './http/pericardium-vessels-http.service';
import { SpatialRequirementHttpService } from './http/spatial-requirement/spatial-requirement-http.service';
import { SummaryHttpService } from './http/summary-http.service';

@Injectable({
  providedIn: 'root'
})
export class CardioHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    areaOfExaminationHttpService: AreaOfExaminationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    flapsHttpService: FlapsHttpService,
    findingsVentriclesHttpService: FindingsVentriclesHttpService,
    leftVentricleHttpService: LeftVentricleHttpService,
    rightVentricleHttpService: RightVentricleHttpService,
    spatialRequirementHttpService: SpatialRequirementHttpService,
    pericardiumVesselsHttpService: PericardiumVesselsHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      areaOfExaminationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      flapsHttpService,
      findingsVentriclesHttpService,
      leftVentricleHttpService,
      rightVentricleHttpService,
      spatialRequirementHttpService,
      pericardiumVesselsHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
