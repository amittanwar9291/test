import { Component, Input, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { FacialSkullFindingUiModel } from '@models/headMRT/ui/facial-skull/facial-skull-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { SideTypeEnum } from '@enums/headMRT/common/side-type.enum';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rr-variant-paranasal-sinuses-characterization-one',
  templateUrl: './variant-paranasal-sinuses-characterization-one.component.html',
  styleUrls: ['./variant-paranasal-sinuses-characterization-one.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class VariantParanasalSinusesCharacterizationOneComponent implements OnDestroy {
  @Input() model: FacialSkullFindingUiModel;

  w051: DropdownModel[];
  w051Subscriptions: Subscription;
  sideTypeEnum = SideTypeEnum;

  constructor(private translate: TranslateService) {
    this.initTranslations();
  }

  ngOnDestroy() {
    this.w051Subscriptions.unsubscribe();
  }

  initTranslations() {
    this.w051Subscriptions = this.translate
      .stream('headMRT.facialSkull.w051.options')
      .subscribe((out: DropdownModel[]) => (this.w051 = out));
  }

  onConchaBullosaSizeChange() {
    if (!this.model.conchaBullosaSize) {
      this.model.conchaBullosa2NdPlane = null;
      this.model.conchaBullosa3RdPlane = null;
    }
  }

  onConchaBullosa2NdPlaneChange() {
    if (!this.model.conchaBullosa2NdPlane) {
      this.model.conchaBullosa3RdPlane = null;
    }
  }

  onInfraorbitalHallerCellSizeChange() {
    if (!this.model.infraorbitalHallerCellSize) {
      this.model.infraorbitalHallerCell2NdPlane = null;
      this.model.infraorbitalHallerCell3RdPlane = null;
    }
  }

  onInfraorbitalHallerCell2NdPlaneChange() {
    if (!this.model.infraorbitalHallerCell2NdPlane) {
      this.model.infraorbitalHallerCell3RdPlane = null;
    }
  }

  onOnodiCellsSizeChange() {
    if (!this.model.onodiCellsSize) {
      this.model.onodiCells2NdPlane = null;
      this.model.onodiCells3RdPlane = null;
    }
  }

  onOnodiCells2NdPlaneChange() {
    if (!this.model.onodiCells2NdPlane) {
      this.model.onodiCells3RdPlane = null;
    }
  }
}
