import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { VesselsFindingUiModel } from '@models/headCT/ui/vessels/vessels-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SeverityTypeEnum } from '@enums/headCT/vessels/severity-type.enum';
import { FormTypeEnum } from '@enums/headCT/vessels/form-type.enum';
import { CollateralizationSeverityTypeEnum } from '@enums/headCT/vessels/circle-of-willis-cerebral-arteries/collateralization-severity-type.enum';
import { VesselsHelperService } from '../../vessels-helper.service';

@Component({
  selector: 'rr-stenosis-occlusion-characterization-one-tab',
  templateUrl: './stenosis-occlusion-characterization-one-tab.component.html',
  styleUrls: ['./stenosis-occlusion-characterization-one-tab.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StenosisOcclusionCharacterizationOneTabComponent implements OnInit, OnDestroy {
  @Input() model: VesselsFindingUiModel;
  w013: DropdownModel[];
  subscriptions: Subscription[] = [];

  formTypeEnum = FormTypeEnum;
  collateralizationSeverityTypeEnum = CollateralizationSeverityTypeEnum;

  constructor(private translate: TranslateService, private vesselsHelperService: VesselsHelperService) {}

  ngOnInit(): void {
    this.subscriptions.push(this.translate.stream('headCT.vessels.w013.options').subscribe((out: DropdownModel[]) => (this.w013 = out)));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  isHemodynamicallyRelevantDisable(): boolean {
    return [SeverityTypeEnum.None, SeverityTypeEnum.CompleteOcclusion].includes(this.model.severityType);
  }

  checkAndClearHemodynamicallyRelevant(): void {
    if (this.isHemodynamicallyRelevantDisable()) {
      this.model.isHemodynamicallyRelevant = false;
    }
  }

  calculate(): void {
    this.vesselsHelperService.calculateNASCET(this.model);
  }
}
