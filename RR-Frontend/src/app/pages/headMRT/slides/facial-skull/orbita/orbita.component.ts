import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';

@Component({
  selector: 'rr-orbita',
  templateUrl: './orbita.component.html',
  styleUrls: ['./orbita.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OrbitaComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  w049: DropdownGroupedModel[];
  w050: DropdownGroupedModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w049.options').subscribe((out: DropdownGroupedModel[]) => (this.w049 = out)),
      this.translate.stream('headMRT.facialSkull.w050.options').subscribe((out: DropdownGroupedModel[]) => (this.w050 = out))
    );
  }
}
