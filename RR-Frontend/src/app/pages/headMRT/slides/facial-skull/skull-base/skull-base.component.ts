import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-skull-base',
  templateUrl: './skull-base.component.html',
  styleUrls: ['./skull-base.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SkullBaseComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  w045Options: DropdownGroupedModel[];
  w046Options: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w045.options').subscribe((out: DropdownGroupedModel[]) => (this.w045Options = out))
    );
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w046.options').subscribe((out: DropdownGroupedModel[]) => (this.w046Options = out))
    );
  }
}
