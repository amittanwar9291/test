import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { AortaCharacterizationTypeEnum } from '@enums/angiographyCT/aorta/aorta-characterization-type.enum';
import { DilatationDifferentialDiagnosisTypeEnum } from '@enums/angiographyCT/aorta/dilatation-aorta/dilatation-differential-diagnosis-type.enum';
import { FollowUpTypeEnum } from '@enums/angiographyCT/aorta/dilatation-aorta/follow-up-type.enum';
import { ShapeTypeEnum } from '@enums/angiographyCT/aorta/shape-type.enum';
import { TypeTypeEnum } from '@enums/angiographyCT/aorta/type-type.enum';
import { AortaFindingUiModel } from '@models/angiographyCT/ui/aorta/aorta-finding-ui.model';
import { Subscription } from 'rxjs';
import { AortaHelperService } from '../aorta-helper.service';

@Component({
  selector: 'rr-dilatation-aorta',
  templateUrl: './dilatation-aorta.component.html',
  styleUrls: ['./dilatation-aorta.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class DilatationAortaComponent implements OnInit, OnDestroy {
  @Input() model: AortaFindingUiModel;
  isLargeLocalizerOpenedSubsscription: Subscription;

  formTypeEnum = ShapeTypeEnum;
  typeType = TypeTypeEnum;
  characterizationTypeEnum = AortaCharacterizationTypeEnum;
  followUpTypeEnum = FollowUpTypeEnum;
  dilatationDifferentialDiagnosisType = DilatationDifferentialDiagnosisTypeEnum;

  constructor(private aortaHelperService: AortaHelperService) {}

  ngOnInit(): void {
    this.isLargeLocalizerOpenedSubsscription = this.aortaHelperService.isLargeLocalizerOpened.subscribe(v =>
      this.checkAndUpdateisLocalizersDependValues()
    );
  }

  checkAndUpdateisLocalizersDependValues() {
    if (!this.model.aortaLocations1.infrarenalAbdominalAorta) {
      this.model.proximalAneurysmaticNeckDiameterInMm = null;
    }
  }

  openLargeLocalizer(): void {
    this.aortaHelperService.isLargeLocalizerOpened.next({ isLocalizationReentry: false });
  }

  ngOnDestroy() {
    this.isLargeLocalizerOpenedSubsscription.unsubscribe();
  }
}
