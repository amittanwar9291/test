import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AbdomenLocalizationTypeEnum } from '@enums/thoraxCT/soft-parts';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SoftPartsFindingUiModel } from '@models/thoraxCT/ui/soft-parts/soft-parts-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-pancreas',
  templateUrl: './pancreas.component.html',
  styleUrls: ['./pancreas.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class PancreasComponent implements OnInit, OnDestroy {
  @Input() model: SoftPartsFindingUiModel;

  abdomenLocalizationTypeEnum = AbdomenLocalizationTypeEnum;

  subscriptions: Subscription[] = [];
  classificationTypeOptions: DropdownModel[];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('thoraxCT.softParts.W042.options').subscribe((out: DropdownModel[]) => {
        this.classificationTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
