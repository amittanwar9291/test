import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-variant-paranasal-sinuses-characterization-two',
  templateUrl: './variant-paranasal-sinuses-characterization-two.component.html',
  styleUrls: ['./variant-paranasal-sinuses-characterization-two.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VariantParanasalSinusesCharacterizationTwoComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;

  w052: DropdownModel[];
  w052Subscriptions: Subscription;
  sideTypeEnum = SideTypeEnum;

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.w052Subscriptions.unsubscribe();
  }

  initTranslations() {
    this.w052Subscriptions = this.translate
      .stream('headMRT.facialSkull.w052.options')
      .subscribe((out: DropdownModel[]) => (this.w052 = out));
  }

  onAggerNasiCellsSizeChange() {
    if (!this.model.aggerNasiCellsSize) {
      this.model.aggerNasiCells2NdPlane = null;
      this.model.aggerNasiCells3RdPlane = null;
    }
  }

  onAggerNasiCells2NdPlaneChange() {
    if (!this.model.aggerNasiCells2NdPlane) {
      this.model.aggerNasiCells3RdPlane = null;
    }
  }
}
