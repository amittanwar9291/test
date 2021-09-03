import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BoneMarrowEdemaDifferentialDiagnosisTypeEnum } from '@enums/handMRT/bones/bone-marrow-edema/bone-marrow-edema-differential-diagnosis-type.enum';
import { DistributionTypeEnum } from '@enums/handMRT/bones/bone-marrow-edema/distribution-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema.component.html',
  styleUrls: ['./bone-marrow-edema.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BoneMarrowEdemaComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  side: LocationTypeEnum;
  boneMarrowEdemaDifferentialDiagnosisType: DropdownModel[];
  subscriptions: Subscription[] = [];

  distributionType = DistributionTypeEnum;
  differentialDiagnosisType = BoneMarrowEdemaDifferentialDiagnosisTypeEnum;

  constructor(private translateService: TranslateService, private bonesHelperService: BonesHelperService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.bonesHelperService.localizationSide.subscribe(value => {
        this.side = value;
      })
    );
    this.initTranslations();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  private initTranslations() {
    this.subscriptions.push(
      this.translateService.stream('handMRT.bones.boneMarrowEdemaDifferentialDiagnosisType.options').subscribe((out: DropdownModel[]) => {
        this.boneMarrowEdemaDifferentialDiagnosisType = Object.keys(out).map(e => out[e]);
      })
    );
  }

  clearSecondary() {
    this.model.isSecondary = false;
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData('bones', true));
  }
}
