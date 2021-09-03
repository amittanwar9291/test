import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { DistributionTypeEnum, BoneMarrowDifferentialDiagnosisTypeEnum, HipBonesLocalizerElementsEnum } from '@enums/hipMRT/bones';
import { TranslateService } from '@ngx-translate/core';
import { values } from 'lodash';

@Component({
  selector: 'rr-bone-marrow-edema',
  templateUrl: './bone-marrow-edema.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class BoneMarrowEdemaComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;
  @Input() isContrastEnhanced: boolean;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  distributionType = DistributionTypeEnum;
  boneMarrowDifferentialDiagnosisType = BoneMarrowDifferentialDiagnosisTypeEnum;

  boneMarrowDifferentialDiagnosisTypeSub: Subscription;
  boneMarrowDifferentialDiagnosisTypeOptions: DropdownModel[];

  constructor(private translate: TranslateService) {
    this.boneMarrowDifferentialDiagnosisTypeOptions = [];
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        HipBonesLocalizerElementsEnum.rightOsIlium,
        HipBonesLocalizerElementsEnum.rightOsPubis,
        HipBonesLocalizerElementsEnum.rightOsIschium,
        HipBonesLocalizerElementsEnum.rightAcetabulum,
        HipBonesLocalizerElementsEnum.rightFemoralHead,
        HipBonesLocalizerElementsEnum.rightFemoralNeck,
        HipBonesLocalizerElementsEnum.rightFemoralShaft,
        HipBonesLocalizerElementsEnum.leftOsIlium,
        HipBonesLocalizerElementsEnum.leftOsPubis,
        HipBonesLocalizerElementsEnum.leftOsIschium,
        HipBonesLocalizerElementsEnum.leftAcetabulum,
        HipBonesLocalizerElementsEnum.leftFemoralHead,
        HipBonesLocalizerElementsEnum.leftFemoralNeck,
        HipBonesLocalizerElementsEnum.leftFemoralShaft
      ],
      isExpansion: true
    });
  }

  private initTranslations(): void {
    this.boneMarrowDifferentialDiagnosisTypeSub = this.translate
      .stream('hipMRT.bones.boneMarrowDifferentialDiagnosisTypeOptions.options')
      .subscribe((out: DropdownModel[]) => (this.boneMarrowDifferentialDiagnosisTypeOptions = values(out)));
  }

  ngOnDestroy(): void {
    this.boneMarrowDifferentialDiagnosisTypeSub.unsubscribe();
  }

  resetIsSecondary(): void {
    this.model.isSecondary = false;
  }
}
