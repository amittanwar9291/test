import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-temporal-bone',
  templateUrl: './temporal-bone.component.html',
  styleUrls: ['./temporal-bone.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class TemporalBoneComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  w047: DropdownGroupedModel[];
  w048: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w047.options').subscribe((out: DropdownGroupedModel[]) => (this.w047 = out)),
      this.translate.stream('headMRT.facialSkull.w048.options').subscribe((out: DropdownGroupedModel[]) => (this.w048 = out))
    );
  }
}
