import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { LocalizationHttpService } from './http/localization-http.service';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { TechnologyHttpService } from './http/technology/technology-http.service';
import { RotatorHttpService } from './http/rotator-http.service';
import { LabrumAndRibbonsHttpService } from './http/labrum-and-ribbons/labrum-and-ribbons-http.service';
import { JointHttpService } from './http/joint-http.service';
import { SoftPartsHttpService } from './http/soft-parts-http.service';
import { SummaryHttpService } from './http/summary-http.service';
import { BonesHttpService } from './http/bones/bones-http.service';

@Injectable()
export class ShoulderHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    localizationHttpService: LocalizationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    bonesHttpService: BonesHttpService,
    rotatorHttpService: RotatorHttpService,
    labrumAndRibbonsHttpService: LabrumAndRibbonsHttpService,
    jointHttpService: JointHttpService,
    softPartsHttpService: SoftPartsHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      localizationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      bonesHttpService,
      rotatorHttpService,
      labrumAndRibbonsHttpService,
      jointHttpService,
      softPartsHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
