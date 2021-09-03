import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { HomogeneityTypeEnum } from '@enums/shared/homogeneity-type.enum';
import { DensityTypeEnum, SoftPartsCalcificationTypeEnum, SoftPartsSiteTypeEnum } from '@enums/thoraxCT/soft-parts';

import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SoftPartsHelperService } from '../../soft-parts-helper.service';
import { MarginTypeEnum } from '@enums/thoraxCT/common/margin-type.enum';
import { SpineSelectionAccessibilityModeEnum } from '@enums/shared/spine/spine-selection-accessibility-mode.enum';

@Component({
  selector: 'rr-chest-wall-main-characteristics',
  templateUrl: './chest-wall-main-characteristics.component.html',
  styleUrls: ['./chest-wall-main-characteristics.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChestWallMainCharacteristicsComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  isLargeLocalizerOpen: boolean;
  isCMYes: boolean;

  siteTypeEnum = SoftPartsSiteTypeEnum;
  marginTypeEnum = MarginTypeEnum;
  homogeneityTypeEnum = HomogeneityTypeEnum;
  densityTypeEnum = DensityTypeEnum;
  calcificationTypeEnum = SoftPartsCalcificationTypeEnum;
  selectionAccessibilityModeEnum = SpineSelectionAccessibilityModeEnum;

  subscriptions: Subscription[] = [];
  axialTypeOptions: DropdownModel[];
  ddlW037: DropdownModel[];

  constructor(private translateService: TranslateService, private softPartsHelperService: SoftPartsHelperService) {
    this.subscriptions.push(
      this.softPartsHelperService.isLargeLocalizerOpen.subscribe(value => {
        this.isLargeLocalizerOpen = value;
      })
    );
  }

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W036.options').subscribe((out: DropdownModel[]) => {
        this.axialTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W037.options').subscribe((out: DropdownModel[]) => {
        this.ddlW037 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearSubordinated() {
    this.model.isSubordinated = false;
  }

  openLargeLocalizer() {
    this.softPartsHelperService.isLargeLocalizerOpen.next(true);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
