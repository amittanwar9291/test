import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocalizationTypeEnum, PathologySubTypeEnum, PathologyTypeEnum, StenosisTypeEnum } from '@enums/angiographyMRT/pelvis-leg-arteries';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PelvisLegArteriesHelperService } from '../pelvis-leg-arteries-helper.service';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-non-arteriosclerotic-pavk',
  templateUrl: './non-arteriosclerotic-pavk.component.html',
  styleUrls: ['./non-arteriosclerotic-pavk.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NonArterioscleroticPavkComponent implements OnInit, OnDestroy {
  @Input() model: PelvisLegArteriesFindingUiModel;
  isCMYes: boolean;

  locationTypeEnum = LocationTypeEnum;
  pathologyTypeEnum = PathologyTypeEnum;
  stenosisTypeEnum = StenosisTypeEnum;
  pathologySubTypeEnum = PathologySubTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW019: DropdownModel[];

  constructor(
    private translateService: TranslateService,
    private pelvisLegArteriesHelperService: PelvisLegArteriesHelperService,
    private validationHelperService: ValidationHelperService
  ) {
    this.subscriptions.push(
      pelvisLegArteriesHelperService.isCMYes.subscribe(value => {
        this.isCMYes = value;
      })
    );
  }

  ngOnInit() {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('angiographyMRT.pelvisLegArteries.W019.options').subscribe((out: DropdownModel[]) => {
        this.ddlW019 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  isTypeVLikeTypesDisable(): boolean {
    return ![
      this.pathologySubTypeEnum.TypeI,
      this.pathologySubTypeEnum.TypeII,
      this.pathologySubTypeEnum.TypeIII,
      this.pathologySubTypeEnum.TypeIV
    ].includes(this.model.pathologySubType);
  }

  clearPathologyDetails(value: PathologyTypeEnum): string {
    return this.model.pathologyType !== value ? 'third-col fourth-col' : '';
  }

  checkAndUpdateSideType() {
    if (this.isSideTypeDisabled()) {
      this.model.sideType = LocationTypeEnum.None;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.sideType));
    }
  }

  isSideTypeDisabled(): boolean {
    return [LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(this.model.localizationType);
  }
}
