import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { SummaryUiModel } from '@models/abdomenMRT/ui/summary/summary-ui.model';
import { LiRADSTreatmentResponseCategoryTypeEnum } from '@enums/abdomenMRT/summary';

@Component({
  selector: 'rr-lirads',
  templateUrl: './lirads.component.html',
  styleUrls: ['./lirads.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class LiradsComponent implements OnInit, OnDestroy {
  @Input() model: SummaryUiModel;
  subscriptions: Subscription[] = [];
  descriptionArray: string[];
  liRADSTreatmentResponseCategoryType = LiRADSTreatmentResponseCategoryTypeEnum;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('abdomenMRT.summary.categorySlider').subscribe((out: string[]) => {
        this.descriptionArray = Object.values(out);
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }
}
