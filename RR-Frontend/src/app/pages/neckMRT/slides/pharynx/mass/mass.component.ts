import { OnDestroy, ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PharynxFindingUiModel } from '@models/neckMRT/ui/pharynx/pharynx-finding-ui.model';
import { DropdownGroupedModel } from '@models/shared/dropdown/dropdown-grouped.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CharacterizationOneComponent } from './characterization-one/characterization-one.component';

@Component({
  selector: 'rr-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class MassComponent implements OnDestroy {
  @ViewChild(CharacterizationOneComponent) characterizationOneComponent: CharacterizationOneComponent;
  @Input() model: PharynxFindingUiModel;
  @Input() isContrastEnhanced: boolean;
  @Input() isDWI: boolean;

  subscriptions: Subscription[] = [];
  differentialDiagnosisOptions: DropdownGroupedModel[];
  restrictedDifferentialDiagnosisOptions: DropdownModel[];
  orientationAxialOptions: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  private initTranslations(): void {
    this.subscriptions.push(
      this.translate.stream('neckMRT.pharynx.pharynxMassDifferentialDiagnosisOptions.options').subscribe((out: DropdownGroupedModel[]) => {
        this.differentialDiagnosisOptions = Object.values(out);
      }),
      this.translate
        .stream('neckMRT.pharynx.restrictedPharynxMassDifferentialDiagnosisOptions.options')
        .subscribe((out: DropdownModel[]) => {
          this.restrictedDifferentialDiagnosisOptions = Object.values(out);
        }),
      this.translate.stream('neckMRT.pharynx.orientationAxialOptions.options').subscribe((out: DropdownModel[]) => {
        this.orientationAxialOptions = Object.values(out);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
