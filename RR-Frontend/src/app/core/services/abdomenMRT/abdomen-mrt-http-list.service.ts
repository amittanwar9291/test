import { Injectable } from '@angular/core';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { IHttpService } from '@interfaces/http-service.interface';
import { GastrointestinalTractHttpService } from '@services/abdomenMRT/http/gastrointestinal-tract/gastrointestinal-tract-http.service';
import { AdrenalGlandsHttpService } from '@services/abdomenMRT/http/adrenal-glands-http.service';
import { KidneysHttpService } from '@services/abdomenMRT/http/kidneys/kidneys-http.service';
import { LiverHttpService } from '@services/abdomenMRT/http/liver/liver-http.service';
import { SpleenHttpService } from '@services/abdomenMRT/http/spleen/spleen-http.service';
import { PeritonealCavityHttpService } from '@services/abdomenMRT/http/peritoneal-cavity-http.service';
import { PancreasHttpService } from '@services/abdomenMRT/http/pancreas/pancreas-http.service';
import { LymphaticSystemHttpService } from '@services/abdomenMRT/http/lymphatic-system-http.service';
import { SummaryHttpService } from '@services/abdomenMRT/http/summary-http.service';
import { TechnologyHttpService } from '@services/abdomenMRT/http/technology-http.service';
import { AnamnesisHttpService } from '@services/abdomenMRT/http/anamnesis-http.service';
import { ExaminationRegionHttpService } from '@services/abdomenMRT/http/examination-region-http.service';

@Injectable({
  providedIn: 'root'
})
export class AbdomenMrtHttpListService extends HttpListService {
  servicesArray: IHttpService[];

  constructor(
    private examinationRegionHttpService: ExaminationRegionHttpService,
    private anamnesisHttpService: AnamnesisHttpService,
    private technologyHttpService: TechnologyHttpService,
    private liverHttpService: LiverHttpService,
    private spleenHttpService: SpleenHttpService,
    private pancreasHttpService: PancreasHttpService,
    private kidneysHttpService: KidneysHttpService,
    private adrenalGlandsHttpService: AdrenalGlandsHttpService,
    private gastrointestinalTractHttpService: GastrointestinalTractHttpService,
    private peritonealCavityHttpService: PeritonealCavityHttpService,
    private lymphaticSystemHttpService: LymphaticSystemHttpService,
    private summaryHttpService: SummaryHttpService
  ) {
    super();

    this.servicesArray = [
      examinationRegionHttpService,
      anamnesisHttpService,
      technologyHttpService,
      liverHttpService,
      spleenHttpService,
      pancreasHttpService,
      kidneysHttpService,
      adrenalGlandsHttpService,
      gastrointestinalTractHttpService,
      peritonealCavityHttpService,
      lymphaticSystemHttpService,
      summaryHttpService
    ];
  }

  getServices(): IHttpService[] {
    return this.servicesArray;
  }
}
