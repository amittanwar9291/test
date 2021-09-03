import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AbdomenLocalizationTypeEnum } from '@enums/thoraxCT/soft-parts';
import { GradingTypeEnum } from '@enums/thoraxCT/soft-parts/upper-abdomen-kidney-adrenal-gland';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-kidney-adrenal-gland',
  templateUrl: './kidney-adrenal-gland.component.html',
  styleUrls: ['./kidney-adrenal-gland.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class KidneyAdrenalGlandComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  abdomenLocalizationTypeEnum = AbdomenLocalizationTypeEnum;
  gradingTypeEnum = GradingTypeEnum;

  subscriptions: Subscription[] = [];
  classificationTypeOptions: DropdownModel[];
  massAdrenalGlandClassificationTypeOptions: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W043.options').subscribe((out: DropdownModel[]) => {
        this.classificationTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );

    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W044.options').subscribe((out: DropdownModel[]) => {
        this.massAdrenalGlandClassificationTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
