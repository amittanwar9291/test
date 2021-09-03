import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { GastrointestinalTractFindingUiModel } from '@models/abdomenMRT/ui/gastrointestinal-tract/gastrointestinal-tract-finding-ui.model';

import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import {
  AbdominalWallHerniaTypeEnum,
  DetailsTypeEnum,
  HerniaLocalizationTypeEnum,
  MidlineHerniasTypeEnum,
  TypeTypeEnum
} from '@enums/abdomenMRT/gastrointestinal-tract/hernia';
import { HeightTypeEnum, SideTypeEnum } from '@enums/abdomenMRT/gastrointestinal-tract/common';

@Component({
  selector: 'rr-hernia-localization',
  templateUrl: './hernia-localization.component.html',
  styleUrls: ['./hernia-localization.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class HerniaLocalizationComponent implements OnInit, OnDestroy {
  @Input() model: GastrointestinalTractFindingUiModel;

  subscriptions: Subscription[] = [];
  midlineHerniasTypeOptions: DropdownModel[];
  herniaLocalizationType = HerniaLocalizationTypeEnum;
  sideType = SideTypeEnum;
  heightType = HeightTypeEnum;
  abdominalWallHerniaType = AbdominalWallHerniaTypeEnum;
  typeType = TypeTypeEnum;
  detailsType = DetailsTypeEnum;
  midlineHerniasType = MidlineHerniasTypeEnum;

  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.initTranslations();
  }
  private initTranslations(): void {
    this.subscriptions.push(
      this.translateService.stream('abdomenMRT.gastrointestinal.w044midlineHernias').subscribe((out: DropdownModel[]) => {
        this.midlineHerniasTypeOptions = out;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  extensionHerniaSacreset() {
    if (!this.model.extensionHerniaSacInMm) {
      this.model.secondPlaneInMm = null;
      this.model.thirdPlaneInMm = null;
    } else if (!this.model.secondPlaneInMm) {
      this.model.thirdPlaneInMm = null;
    }
  }
  extensionHernialOrificeReset() {
    if (!this.model.extensionHernialOrificeInMm) {
      this.model.extensionHernialOrificeSecondPlaneInMm = null;
      this.model.extensionHernialOrificeThirdPlaneInMm = null;
    } else if (!this.model.extensionHernialOrificeSecondPlaneInMm) {
      this.model.extensionHernialOrificeThirdPlaneInMm = null;
    }
  }

  get temporaryText(): string {
    switch (this.model.herniaLocalizationType) {
      case HerniaLocalizationTypeEnum.BochdalekHernia:
        return 'abdomenMRT.gastrointestinal.bochdalekHernia.value';
      case HerniaLocalizationTypeEnum.MorgagniHernia:
        return 'abdomenMRT.gastrointestinal.morgagniHernia.value';
      case HerniaLocalizationTypeEnum.HiatalHernia:
        return 'abdomenMRT.gastrointestinal.hiatalHernia.value';
    }
  }
}
