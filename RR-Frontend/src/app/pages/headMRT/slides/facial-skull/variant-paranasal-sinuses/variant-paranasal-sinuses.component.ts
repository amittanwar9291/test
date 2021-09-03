import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-variant-paranasal-sinuses',
  templateUrl: './variant-paranasal-sinuses.component.html',
  styleUrls: ['./variant-paranasal-sinuses.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VariantParanasalSinusesComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;
  subscriptions: Subscription[] = [];
  levelTypeOptions: DropdownModel[];
  assessmentTypeOptions: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  initTranslations() {
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.levelType').subscribe((out: DropdownModel[]) => {
        this.levelTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );
    this.subscriptions.push(
      this.translate.stream('headMRT.facialSkull.assessmentType').subscribe((out: DropdownModel[]) => {
        this.assessmentTypeOptions = Object.keys(out).map(e => out[e]);
      })
    );
  }
}
