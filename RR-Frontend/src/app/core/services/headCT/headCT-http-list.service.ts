import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { ExaminationHttpService } from '@services/headCT/http/examination-http.service';
import { AnamnesisHttpService } from '@services/headCT/http/anamnesis-http.service';
import { TechnologyHttpService } from '@services/headCT/http/technology-http.service';
import { VesselsHttpService } from '@services/headCT/http/vessels-http.service';
import { MeningesHttpService } from '@services/headCT/http/meninges-http.service';
import { CortexHttpService } from '@services/headCT/http/cortex-http.service';
import { BasalNucleiHttpService } from '@services/headCT/http/basal-nuclei-http.service';
import { BrainstemCranialNervesHttpService } from '@services/headCT/http/brainstem-cranial-nerves-http.service';
import { CerebrospinalFluidSpaceHttpService } from '@services/headCT/http/cerebrospinal-fluid-space-http.service';
import { SellarRegionHttpService } from '@services/headCT/http/sellar-region-http.service';
import { FacialSkullHttpService } from '@services/headCT/http/facial-skull-http.service';
import { SummaryHttpService } from '@services/headCT/http/summary-http.service';

@Injectable({
  providedIn: 'root'
})
export class HeadCTHttpListService extends HttpListService {
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
