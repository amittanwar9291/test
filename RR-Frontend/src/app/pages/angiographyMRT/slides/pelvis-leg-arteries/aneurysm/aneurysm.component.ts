import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CharacterizationTypeEnum, LocalizationTypeEnum, ShapeTypeEnum } from '@enums/angiographyMRT/pelvis-leg-arteries';
import { PelvisLegArteriesFindingUiModel } from '@models/angiographyMRT/ui/pelvis-leg-arteries/pelvis-leg-arteries-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { nameof } from 'ts-simple-nameof';
import { AbdomenFindingUiModel } from '@models/angiographyMRT/ui/abdomen/abdomen-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';

@Component({
  selector: 'rr-aneurysm',
  templateUrl: './aneurysm.component.html',
  styleUrls: ['./aneurysm.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AneurysmComponent implements OnInit, OnDestroy {
  @Input() model: PelvisLegArteriesFindingUiModel;

  shapeTypeEnum = ShapeTypeEnum;
  characterizationTypeEnum = CharacterizationTypeEnum;

  subscriptions: Subscription[] = [];
  ddlW019: DropdownModel[];

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
      this.translateService.stream('angiographyMRT.pelvisLegArteries.W019.options').subscribe((out: DropdownModel[]) => {
        this.ddlW019 = Object.keys(out).map(e => out[e]);
      })
    );
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
