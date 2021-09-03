import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { PericardiumVesselsFindingUiModel } from '@models/cardioMRT/ui/pericardium-vessels/pericardium-vessels-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';

import {
  LocalizationDetailsEnum,
  OssLesionBenignTypeEnum,
  OssLesionLocalizationTypeEnum,
  OtherFocalTypeEnum
} from '@enums/cardioMRT/pericardium-vessels';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';

@Component({
  selector: 'rr-osseous-lesion',
  templateUrl: './osseous-lesion.component.html',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm
    }
  ]
})
export class OsseousLesionComponent implements OnInit, OnDestroy {
  @Input() model: PericardiumVesselsFindingUiModel;

  subscriptions: Subscription[] = [];
  vertebrealBodyLocalizationDetails: DropdownModel[];
  ribsLocalizationDetails: DropdownModel[];
  previousOssLesionLocalizationType: OssLesionLocalizationTypeEnum;
  ossLesionLocalizationType: typeof OssLesionLocalizationTypeEnum;
  locationType: typeof LocationTypeEnum;
  otherFocalType: typeof OtherFocalTypeEnum;
  ossLesionBenignType: typeof OssLesionBenignTypeEnum;

  constructor(private translate: TranslateService) {
    this.ossLesionLocalizationType = OssLesionLocalizationTypeEnum;
    this.locationType = LocationTypeEnum;
    this.otherFocalType = OtherFocalTypeEnum;
    this.ossLesionBenignType = OssLesionBenignTypeEnum;
  }

  ngOnInit(): void {
    this.initOsseousLesionLocalizationDropdown();
    this.previousOssLesionLocalizationType = this.model.ossLesionLocalizationType;
  }

  getLocalizationDetailsOptions(): DropdownModel[] {
    switch (this.model.ossLesionLocalizationType) {
      case OssLesionLocalizationTypeEnum.Ribs: {
        return this.ribsLocalizationDetails;
      }
      case OssLesionLocalizationTypeEnum.VertebralBody: {
        return this.vertebrealBodyLocalizationDetails;
      }
    }
  }

  clearLocalizationDetailsAndDignity(): void {
    if (this.model.ossLesionLocalizationType !== this.previousOssLesionLocalizationType) {
      this.model.upperAbdomenSide = LocationTypeEnum.None;
      this.model.ribsLocalizationDetails = LocalizationDetailsEnum.None;
      this.model.vertebralBodyLocalizationDetails = LocalizationDetailsEnum.None;
      this.model.maximumDiameterInMm = null;
      this.model.focalClavicleType = OtherFocalTypeEnum.None;
      this.model.ossLesionBenignType = OssLesionBenignTypeEnum.None;
    }

    this.previousOssLesionLocalizationType = this.model.ossLesionLocalizationType;
  }

  private isOsseusLesionPartEnabled(parts: OssLesionLocalizationTypeEnum[]): boolean {
    return parts.includes(this.model.ossLesionLocalizationType);
  }

  get isSideEnabled(): boolean {
    return this.isOsseusLesionPartEnabled([
      OssLesionLocalizationTypeEnum.Humerus,
      OssLesionLocalizationTypeEnum.Cavicula,
      OssLesionLocalizationTypeEnum.Ribs
    ]);
  }

  get isLocalizationDetailsEnabled(): boolean {
    return this.isOsseusLesionPartEnabled([OssLesionLocalizationTypeEnum.Ribs, OssLesionLocalizationTypeEnum.VertebralBody]);
  }

  private initOsseousLesionLocalizationDropdown(): void {
    this.subscriptions.push(
      this.translate.stream('cardioMRT.pericardiumVessels.ribsLocalizationDetails.options').subscribe(out => {
        this.ribsLocalizationDetails = Object.values(out);
      }),
      this.translate.stream('cardioMRT.pericardiumVessels.vertebrealBodyLocalizationDetails.options').subscribe(out => {
        this.vertebrealBodyLocalizationDetails = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s: Subscription): void => s.unsubscribe());
  }
}
