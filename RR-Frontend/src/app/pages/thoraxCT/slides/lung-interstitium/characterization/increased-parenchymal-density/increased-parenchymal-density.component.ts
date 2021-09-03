import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { LungsFlapsModel } from '@models/shared/thorax/localizers/lungs-flaps-model';
import { LungInterstitiumFindingUiModel } from '@models/thoraxCT/ui/lung-interstitium/lung-interstitium-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { Subscription } from 'rxjs';
import { LungInterstitiumHelperService, LungInterstitiumLargeLocalizerConfig } from '../../lung-interstitium-helper.service';

@Component({
  selector: 'rr-increased-parenchymal-density',
  templateUrl: './increased-parenchymal-density.component.html',
  styleUrls: ['./increased-parenchymal-density.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class IncreasedParenchymalDensityComponent implements OnInit, OnDestroy {
  @Input() model: LungInterstitiumFindingUiModel;
  translationSubscriptions: Subscription[] = [];

  quantityOptions: DropdownModel[];
  ratioReticularChangesOptions: DropdownModel[];

  constructor(
    private translate: TranslateService,
    private lungInterstitiumHelperService: LungInterstitiumHelperService,
    private validationHelperService: ValidationHelperService
  ) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.translationSubscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.W028.options').subscribe((out: DropdownModel[]) => {
        this.quantityOptions = Object.keys(out).map(e => out[e]);
      })
    );
    this.translationSubscriptions.push(
      this.translate.stream('thoraxCT.lungInterstitium.W029.options').subscribe((out: DropdownModel[]) => {
        this.ratioReticularChangesOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  openLargeLocalizer(modelPropName: string) {
    this.lungInterstitiumHelperService.largeLocalizerOpen.next(
      new LungInterstitiumLargeLocalizerConfig('flaps', false, modelPropName, true)
    );
  }

  clearLocalizer(modelPropName: string) {
    this.model[modelPropName] = new LungsFlapsModel();
    this.validationHelperService.removeError(modelPropName);
  }

  ngOnDestroy(): void {
    this.translationSubscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
