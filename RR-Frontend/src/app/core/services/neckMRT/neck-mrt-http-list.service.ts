import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { Injectable } from '@angular/core';
import { ExaminationHttpService } from '@services/neckMRT/http/examination-http.service';
import { BonesHttpService } from '@services/neckMRT/http/bones/bones-http.service';
import { VesselsHttpService } from '@services/neckMRT/http/vessels-http.service';
import { IndicationHttpService } from '@services/neckMRT/http/indication-http.service';
import { LarynxHttpService } from '@services/neckMRT/http/larynx/larynx-http.service';
import { LymphNodesHttpService } from '@services/neckMRT/http/lymph-nodes-http.service';
import { PharynxHttpService } from '@services/neckMRT/http/pharynx/pharynx-http.service';
import { SoftTissuesHttpService } from '@services/neckMRT/http/soft-tissues-http.service';
import { SummaryHttpService } from '@services/neckMRT/http/summary-http.service';
import { TechnologyHttpService } from '@services/neckMRT/http/technology-http.service';
import { ThyroidHttpService } from '@services/neckMRT/http/thyroid-http.service';

@Injectable()
export class NeckMrtHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    examinationHttpService: ExaminationHttpService,
    indicationHttpService: IndicationHttpService,
    technologyHttpService: TechnologyHttpService,
    pharynxHttpService: PharynxHttpService,
    larynxHttpService: LarynxHttpService,
    softTissuesHttpService: SoftTissuesHttpService,
    thyroidHttpService: ThyroidHttpService,
    lymphNodesHttpService: LymphNodesHttpService,
    vesselsHttpService: VesselsHttpService,
    bonesHttpService: BonesHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      examinationHttpService,
      indicationHttpService,
      technologyHttpService,
      pharynxHttpService,
      larynxHttpService,
      softTissuesHttpService,
      thyroidHttpService,
      lymphNodesHttpService,
      vesselsHttpService,
      bonesHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
