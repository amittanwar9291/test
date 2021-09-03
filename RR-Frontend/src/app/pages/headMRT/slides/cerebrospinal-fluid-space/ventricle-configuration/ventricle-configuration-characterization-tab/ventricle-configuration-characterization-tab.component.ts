import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CerebrospinalFluidSpaceFindingUiModel } from '@models/headMRT/ui/cerebrospinal-fluid-space/cerebrospinal-fluid-space-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CerebrospinalFluidSpaceHelperService } from '../../cerebrospinal-fluid-space-helper.service';

@Component({
  selector: 'rr-ventricle-configuration-characterization-tab',
  templateUrl: './ventricle-configuration-characterization-tab.component.html',
  styleUrls: ['./ventricle-configuration-characterization-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VentricleConfigurationCharacterizationTabComponent implements OnInit, OnDestroy {
  @Input() model: CerebrospinalFluidSpaceFindingUiModel;
  subscriptions: Subscription[] = [];
  sideTypeOptions: DropdownModel[];

  isCMYesSubscription: Subscription;
  isCMYes: boolean;

  constructor(private translate: TranslateService, private cerebrospinalFluidSpaceHelperService: CerebrospinalFluidSpaceHelperService) {
    this.isCMYesSubscription = this.cerebrospinalFluidSpaceHelperService.isCMYes.subscribe(value => (this.isCMYes = value));
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('headMRT.cerebrospinalFluid.w069.options').subscribe((out: DropdownModel[]) => {
        this.sideTypeOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe);
  }
}
