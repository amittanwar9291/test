import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headCT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'rr-ventricle-configuration-characterization-tab',
  templateUrl: './ventricle-configuration-characterization-tab.component.html',
  styleUrls: ['./ventricle-configuration-characterization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VentricleConfigurationCharacterizationTabComponent implements OnDestroy {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  w044: DropdownModel[];
  w044Subscription: Subscription;

  constructor(private translate: TranslateService) {
    this.w044Subscription = translate
      .stream('headCT.cerebrospinalFluidSpace.w044.options')
      .subscribe((out: DropdownModel[]) => (this.w044 = out));
  }

  ngOnDestroy() {
    this.w044Subscription.unsubscribe();
  }
}
