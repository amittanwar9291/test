import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { D1TypeEnum, DiseasesOfTheMtpLocalizationTypeEnum, DiseasesOfTheMtpTypeEnum, PathologyTypeEnum } from '@enums/feetMRT/soft-tissue';
import { SoftTissueFindingUiModel } from '@models/feetMRT/ui/soft-tissue/soft-tissue-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SoftTissueHelperService } from '../soft-tissue-helper.service';
import { compact } from 'lodash';

@Component({
  selector: 'rr-diseases-of-mtp',
  templateUrl: './diseases-of-mtp.component.html',
  styleUrls: ['./diseases-of-mtp.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DiseasesOfMtpComponent implements OnInit, OnDestroy {
  @Input() model: SoftTissueFindingUiModel;
  translationSubscriptions: Subscription[] = [];
  differentialDiagnosis: DropdownModel[];
  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  diseaseMTP = 'None';
  d1Type = 'None';

  diseasesOfTheMtpTypeEnum: typeof DiseasesOfTheMtpTypeEnum;
  d1TypeEnum: typeof D1TypeEnum;
  diseasesOfTheMtpLocalizationTypeEnum: typeof DiseasesOfTheMtpLocalizationTypeEnum;
  pathologyTypeEnum: typeof PathologyTypeEnum;

  constructor(private translate: TranslateService, private softTissueHelperService: SoftTissueHelperService) {
    this.diseasesOfTheMtpTypeEnum = DiseasesOfTheMtpTypeEnum;
    this.d1TypeEnum = D1TypeEnum;
    this.diseasesOfTheMtpLocalizationTypeEnum = DiseasesOfTheMtpLocalizationTypeEnum;
    this.pathologyTypeEnum = PathologyTypeEnum;
    this.isCMYesSubscription = this.softTissueHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  ngOnInit(): void {
    this.initTranslations();
    this.diseaseMTP = this.model.diseasesOfTheMtpType;
    this.d1Type = this.model.d1Type;
  }

  ngOnDestroy() {
    this.translationSubscriptions.forEach(s => s.unsubscribe());
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('feetMRT.softTissue.differentialDiagnosis2Options.options').subscribe((out: DropdownModel[]) => {
        this.differentialDiagnosis = Object.keys(out).map(e => out[e]);
      })
    );
  }

  detailsDisabled(): boolean {
    return compact([this.model.isD1, this.model.isD2, this.model.isD3, this.model.isD4, this.model.isD5]).length === 0;
  }

  clearDetails() {
    if (this.detailsDisabled()) {
      this.model.isExpansionUpToCollateralLigaments = false;
      this.model.isPericapsularFibrosis = false;
      this.model.isSynovitis = false;
      this.model.isRetraction = false;
      this.model.isLuxationMTP = false;
      this.model.isAdjacentGanglion = false;
      this.model.adjacentGanglionMaxDiameterInMm = null;
    }
  }
}
