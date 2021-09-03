import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-salivary-glands',
  templateUrl: './salivary-glands.component.html',
  styleUrls: ['./salivary-glands.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SalivaryGlandsComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  w058: DropdownModel[];
  w059: DropdownModel[];
  subscriptions: Subscription[] = [];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.w058.options').subscribe((out: DropdownModel[]) => (this.w058 = out)),
      this.translate.stream('headMRT.facialSkull.w059.options').subscribe((out: DropdownModel[]) => (this.w059 = out))
    );
  }
}
