import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { OsteomyelitisDifferentialDiagnosisTypeEnum } from '@enums/handMRT/bones/osteomyelitis/osteomyelitis-differential-diagnosis-type.enum';
import { OsteomyelitisStageTypeEnum } from '@enums/handMRT/bones/osteomyelitis/osteomyelitis-stage-type.enum';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { BonesHelperService, ComplexLocalizerData } from '../bones-helper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'rr-osteomyelitis',
  templateUrl: './osteomyelitis.component.html',
  styleUrls: ['./osteomyelitis.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class OsteomyelitisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  side: LocationTypeEnum;
  isCMYes: boolean;

  stageType = OsteomyelitisStageTypeEnum;
  osteomyelitisDifferentialDiagnosisType = OsteomyelitisDifferentialDiagnosisTypeEnum;

  subscriptions: Subscription[] = [];

  constructor(private bonesHelperService: BonesHelperService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.bonesHelperService.localizationSide.subscribe(value => {
        this.side = value;
      })
    );
    this.subscriptions.push(
      this.bonesHelperService.isCMYes.subscribe(value => {
        this.isCMYes = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subs => {
      subs.unsubscribe();
    });
  }

  resetNumberInputsIntraosseousAbscess(): void {
    if (this.model.intraosseousSize === null) {
      this.model.intraosseous2ndPlaneSize = null;
      this.model.intraosseous3rdPlaneSize = null;
    } else if (this.model.intraosseous2ndPlaneSize === null) {
      this.model.intraosseous3rdPlaneSize = null;
    }
  }

  resetNumberInputsSequester(): void {
    if (this.model.sequesterSize === null) {
      this.model.sequester2ndPlaneSize = null;
      this.model.sequester3rdPlaneSize = null;
    } else if (this.model.sequester2ndPlaneSize === null) {
      this.model.sequester3rdPlaneSize = null;
    }
  }

  openLargeLocalizer() {
    this.bonesHelperService.largeLocalizerOpen.next(new ComplexLocalizerData('bones', true));
  }
}
