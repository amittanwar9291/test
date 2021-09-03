import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DescriptionTypeEnum } from '@enums/shared/description-type.enum';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { SoftPartsLocalizationCraniocaudalTypeEnum, SoftPartsSiteTypeEnum } from '@enums/thoraxCT/soft-parts';
import { ChestWallAngleTypeEnum, DisplacementOfFatTissueTypeEnum, PleuralMassTypeEnum } from '@enums/thoraxCT/soft-parts/pleural-mass';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SoftPartsHelperService } from '../../soft-parts-helper.service';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';

@Component({
  selector: 'rr-main-characteristics-tab',
  templateUrl: './main-characteristics-tab.component.html',
  styleUrls: ['./main-characteristics-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MainCharacteristicsTabComponent implements OnInit, OnDestroy {
  @Input() findings: SoftPartsFindingUiModel[];
  @Input() model: SoftPartsFindingUiModel;

  descriptionTypeEnum = DescriptionTypeEnum;
  softPartsSiteTypeEnum = SoftPartsSiteTypeEnum;
  softPartsLocalizationCraniocaudalTypeEnum = SoftPartsLocalizationCraniocaudalTypeEnum;
  chestWallAngleTypeEnum = ChestWallAngleTypeEnum;
  displacementOfFatTissueTypeEnum = DisplacementOfFatTissueTypeEnum;
  pleuralMassTypeEnum = PleuralMassTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW033: DropdownModel[];

  constructor(private translateService: TranslateService, public softPartsHelperService: SoftPartsHelperService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W033.options').subscribe((out: DropdownModel[]) => {
        this.ddlW033 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearDDLCheckboxes() {
    this.model.isSubordinated = false;
    this.model.isCloakPleuralEffusion = false;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
