import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-paranasal-sinuses',
  templateUrl: './paranasal-sinuses.component.html',
  styleUrls: ['./paranasal-sinuses.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ParanasalSinusesComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  w053: DropdownGroupedModel[];
  w054: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w053.options').subscribe((out: DropdownGroupedModel[]) => (this.w053 = out)),
      this.translate.stream('headMRT.facialSkull.w054.options').subscribe((out: DropdownGroupedModel[]) => (this.w054 = out))
    );
  }
}
