import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { PelvisLegArteriesFindingUiModel } from '@models/angiographyCT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyCT/ui/abdomen/abdomen-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { SideTypeEnum } from '@enums/shared/side-type.enum';
import { LocalizationTypeEnum } from '@enums/angiographyCT/pelvis-leg-arteries/arteriosclerotic-pavk';
import {
  FollowUpTypeEnum,
  VascularDilatationTypeEnum,
  VascularDilatationCharacterizationTypeEnum
} from '@enums/angiographyCT/pelvis-leg-arteries/vascular-dilatation';
import { ShapeTypeEnum } from '@enums/angiographyCT/shape-type.enum';

@Component({
  selector: 'rr-vascular-dilatation',
  templateUrl: './vascular-dilatation.component.html',
  styleUrls: ['./vascular-dilatation.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VascularDilatationComponent implements OnInit, OnDestroy {
  @Input() model: PelvisLegArteriesFindingUiModel;
  sideTypeEnum = SideTypeEnum;
  localizationTypeEnum = LocalizationTypeEnum;
  followUpTypeEnum = FollowUpTypeEnum;
  vascularDilatationTypeEnum = VascularDilatationTypeEnum;
  vascularDilatationCharacterizationTypeEnum = VascularDilatationCharacterizationTypeEnum;
  shapeTypeEnum = ShapeTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW029: DropdownModel[];

  constructor(private translateService: TranslateService, private validationHelperService: ValidationHelperService) {}

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

  checkAndUpdateSideType() {
    this.model.isInfrarenal = false;
    this.model.isSuprarenal = false;
    this.model.isP1Segment = false;
    this.model.isP2Segment = false;
    this.model.isP3Segment = false;
    if (this.isSideTypeDisabled()) {
      this.model.sideType = SideTypeEnum.None;
      this.validationHelperService.removeError(nameof<AbdomenFindingUiModel>(m => m.sideType));
    }
  }

  isSideTypeDisabled(): boolean {
    return [LocalizationTypeEnum.AbdominalAorta, LocalizationTypeEnum.Bifurcation].includes(this.model.vascularDilatationLocalizationType);
  }
}
