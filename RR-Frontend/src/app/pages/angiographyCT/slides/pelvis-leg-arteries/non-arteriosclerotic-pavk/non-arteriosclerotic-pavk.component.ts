import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { PelvisLegArteriesHelperService } from '../pelvis-leg-arteries-helper.service';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import {
  EntrapmentSyndromeTypeEnum,
  NonArterioscleroticPAVKPathologyTypeEnum,
  PathologyStenosisTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/non-arteriosclerotic-pavk';
import { LocalizationTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';

@Component({
  selector: 'rr-non-arteriosclerotic-pavk',
  templateUrl: './non-arteriosclerotic-pavk.component.html',
  styleUrls: ['./non-arteriosclerotic-pavk.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class NonArterioscleroticPavkComponent implements OnInit, OnDestroy {
  @Input() model: PelvisLegArteriesFindingUiModel;
  isCMYes: boolean;
  sideTypeEnum = SideTypeEnum;
  nonArterioscleroticPAVKPathologyTypeEnum = NonArterioscleroticPAVKPathologyTypeEnum;
  entrapmentSyndromeTypeEnum = EntrapmentSyndromeTypeEnum;
  pathologyStenosisTypeEnum = PathologyStenosisTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;
  locationTypeEnum = LocationTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW029: DropdownModel[];

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
      this.translateService.stream('angiographyCT.pelvisLegArteries.W029.options').subscribe((out: DropdownModel[]) => {
        this.ddlW029 = Object.values(out);
      })
    );
  }

  isTypeVHidden(): boolean {
    return [
      this.entrapmentSyndromeTypeEnum.TypeI,
      this.entrapmentSyndromeTypeEnum.TypeII,
      this.entrapmentSyndromeTypeEnum.TypeIII,
      this.entrapmentSyndromeTypeEnum.TypeIV
    ].includes(this.model.entrapmentSyndromeType);
  }

  clearPathologyDetails(value: NonArterioscleroticPAVKPathologyTypeEnum): string {
    return this.model.nonArterioscleroticPAVKPathologyType !== value ? 'third-col fourth-col' : '';
  }

  checkAndUpdateSideType() {
    this.model.isSuprarenal = false;
    this.model.isInfrarenal = false;
    if (this.isSideTypeDisabled()) {
      this.model.sideType = SideTypeEnum.None;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.sideType));
    }
  }

  isSideTypeDisabled(): boolean {
    return [LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(this.model.embolismLocalizationType);
  }
  isSelectedThrombangiitisObliterans(): boolean {
    return this.model.nonArterioscleroticPAVKPathologyType === this.nonArterioscleroticPAVKPathologyTypeEnum.ThrombangiitisObliterans;
  }
}
