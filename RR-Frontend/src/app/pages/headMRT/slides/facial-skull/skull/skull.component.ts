import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-skull',
  templateUrl: './skull.component.html',
  styleUrls: ['./skull.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SkullComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  w060: DropdownGroupedModel[];
  w061: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w060.options').subscribe((out: DropdownGroupedModel[]) => (this.w060 = out)),
      this.translate.stream('headMRT.facialSkull.w061.options').subscribe((out: DropdownGroupedModel[]) => (this.w061 = out))
    );
  }
}
