import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { AnamnesisHttpService } from './http/anamnesis-http.service';
import { ExaminationHttpService } from './http/examination-http.service';
import { TechnologyHttpService } from './http/technology-http.service';
import { VesselsHttpService } from './http/vessels-http.service';
import { MeningesHttpService } from './http/meninges/meninges-http.service';
import { BrainstemCranialNervesHttpService } from './http/brainstem-cranial-nerves/brainstem-cranial-nerves-http.service';
import { CerebrospinalFluidSpaceHttpService } from './http/cerebrospinal-fluid-space/cerebrospinal-fluid-space-http.service';
import { SummaryHttpService } from './http/summary-http.service';
import { FacialSkullHttpService } from './http/facial-skull/facial-skull-http.service';
import { SellarRegionHttpService } from './http/sellar-region/sellar-region-http.service';
import { BasalNucleiHttpService } from './http/basal-nuclei/basal-nuclei-http.service';
import { CortexHttpService } from './http/cortex/cortex-http.service';

@Injectable({
  providedIn: 'root'
})
export class HeadHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    examinationHttpService: ExaminationHttpService,
    anamnesisHttpService: AnamnesisHttpService,
    technologyHttpService: TechnologyHttpService,
    vesselsHttpService: VesselsHttpService,
    meningesHttpService: MeningesHttpService,
    cortexHttpService: CortexHttpService,
    basalNucleiHttpService: BasalNucleiHttpService,
    brainstemCranialNervesHttpService: BrainstemCranialNervesHttpService,
    cerebrospinalFluidSpaceHttpService: CerebrospinalFluidSpaceHttpService,
    sellarRegionHttpService: SellarRegionHttpService,
    facialSkullHttpService: FacialSkullHttpService,
    summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      examinationHttpService,
      anamnesisHttpService,
      technologyHttpService,
      vesselsHttpService,
      meningesHttpService,
      cortexHttpService,
      basalNucleiHttpService,
      brainstemCranialNervesHttpService,
      cerebrospinalFluidSpaceHttpService,
      sellarRegionHttpService,
      facialSkullHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
