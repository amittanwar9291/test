import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-oral-cavity',
  templateUrl: './oral-cavity.component.html',
  styleUrls: ['./oral-cavity.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OralCavityComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  w055: DropdownGroupedModel[];
  w056: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w055.options').subscribe((out: DropdownGroupedModel[]) => (this.w055 = out)),
      this.translate.stream('headMRT.facialSkull.w056.options').subscribe((out: DropdownGroupedModel[]) => (this.w056 = out))
    );
  }
}
