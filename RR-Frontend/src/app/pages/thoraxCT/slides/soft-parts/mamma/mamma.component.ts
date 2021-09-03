import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SoftPartsFormTypeEnum, SoftPartsSiteTypeEnum } from '@enums/thoraxCT/soft-parts';
import { VolumeTypeEnum } from '@enums/thoraxCT/soft-parts/mamma';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { BreastLocation } from '@models/shared/mamma/breast/breast-location.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { SoftPartsHelperService } from '../soft-parts-helper.service';
import { ContrastEnhancementQuantitativeTypeEnum } from '@enums/thoraxCT/common/contrast-enhancement-quantitative-type.enum';

@Component({
  selector: 'rr-mamma',
  templateUrl: './mamma.component.html',
  styleUrls: ['./mamma.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MammaComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  volumeTypeEnum = VolumeTypeEnum;
  siteTypeEnum = SoftPartsSiteTypeEnum;
  formTypeEnum = SoftPartsFormTypeEnum;
  contrastEnhancementQuantitativeTypeEnum = ContrastEnhancementQuantitativeTypeEnum;

  subscriptions: Subscription[] = [];
  limitationTypeOptions: DropdownModel[];
  ddlW040: DropdownModel[];
  isCMYes: boolean;

  constructor(
    private translateService: TranslateService,
    private softPartsHelperService: SoftPartsHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.initTranslations();
    this.softPartsHelperService.isCMYes.subscribe(v => (this.isCMYes = v));
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W039.options').subscribe((out: DropdownModel[]) => {
        this.limitationTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W040.options').subscribe((out: DropdownModel[]) => {
        this.ddlW040 = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  clearBreastLocation(modelProperty: string) {
    this.model[modelProperty] = new BreastLocation();
    this.validationHelperService.removeError(modelProperty);
  }
}
