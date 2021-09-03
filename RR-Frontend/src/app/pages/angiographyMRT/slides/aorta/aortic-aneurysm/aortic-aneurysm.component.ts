import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { AortaFindingUiModel } from '@models/angiographyMRT/ui/aorta/aorta-finding-ui.model';
import { AortaHelperService } from '../aorta-helper.service';
import { ShapeTypeEnum } from '@enums/angiographyMRT/aorta/shape-type.enum';
import { FollowUpTypeEnum } from '@enums/angiographyMRT/aorta/follow-up-type.enum';
import { AorticAneurysmDifferentialDiagnosisTypeEnum } from '@enums/angiographyMRT/aorta/aortic-aneurysm-differential-diagnosis-type.enum';

@Component({
  selector: 'rr-aortic-aneurysm',
  templateUrl: './aortic-aneurysm.component.html',
  styleUrls: ['./aortic-aneurysm.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AorticAneurysmComponent implements OnInit, OnDestroy {
  @Input() model: AortaFindingUiModel;
  isLargeLocalizerOpenedSubsscription: Subscription;

  formTypeEnum = ShapeTypeEnum;
  followUpTypeEnum = FollowUpTypeEnum;
  aorticAneurysmDifferentialDiagnosisTypeEnum = AorticAneurysmDifferentialDiagnosisTypeEnum;

  constructor(private aortaHelperService: AortaHelperService) {}

  ngOnInit(): void {
    this.isLargeLocalizerOpenedSubsscription = this.aortaHelperService.isLargeLocalizerOpened.subscribe(v =>
      this.checkAndUpdateisLocalizersDependValues()
    );
  }

  ngOnDestroy() {
    this.isLargeLocalizerOpenedSubsscription.unsubscribe();
  }

  checkAndUpdateisLocalizersDependValues() {
    if (!this.model.aortaLocation.infrarenalAbdominalAorta) {
      this.model.proximalNeckLengthInMm = null;
    }
  }

  openLargeLocalizer(): void {
    this.aortaHelperService.isLargeLocalizerOpened.next({ isLocalizationReentry: false });
  }
}
