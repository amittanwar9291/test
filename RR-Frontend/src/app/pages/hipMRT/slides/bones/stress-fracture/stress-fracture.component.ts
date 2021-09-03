import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import {
  HipBonesLocalizerElementsEnum,
  ClassificationRohenaQuinquillaTypeEnum,
  ExpansionCoronalTypeEnum,
  ExpansionTypeEnum,
  PartTypeEnum
} from '@enums/hipMRT/bones';
import { nameof } from 'ts-simple-nameof';
@Component({
  selector: 'rr-stress-fracture',
  templateUrl: './stress-fracture.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class StressFractureComponent implements OnInit {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  partType = PartTypeEnum;
  expansionType = ExpansionTypeEnum;
  expansionCoronalType = ExpansionCoronalTypeEnum;
  classificationRohenaQuinquillaType = ClassificationRohenaQuinquillaTypeEnum;

  constructor(private validationHelperService: ValidationHelperService) {}

  ngOnInit(): void {
    this.applyFemoralNeckLogic();
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        HipBonesLocalizerElementsEnum.rightAcetabulum,
        HipBonesLocalizerElementsEnum.rightFemoralHead,
        HipBonesLocalizerElementsEnum.rightFemoralNeck,
        HipBonesLocalizerElementsEnum.rightFemoralShaft,
        HipBonesLocalizerElementsEnum.leftAcetabulum,
        HipBonesLocalizerElementsEnum.leftFemoralHead,
        HipBonesLocalizerElementsEnum.leftFemoralNeck,
        HipBonesLocalizerElementsEnum.leftFemoralShaft
      ],
      isExpansion: false
    });
  }

  get isAnyFemoralNeckSelected(): boolean {
    return this.model.hipSpecificLocalizations.leftFemoralNeck === true || this.model.hipSpecificLocalizations.rightFemoralNeck === true;
  }

  applyFemoralNeckLogic(): void {
    if (!this.isAnyFemoralNeckSelected) {
      this.model.classificationRohenaQuinquillaType = ClassificationRohenaQuinquillaTypeEnum.None;
      this.model.partType = PartTypeEnum.None;
      this.model.expansionType = ExpansionTypeEnum.None;
      this.model.expansionCoronalType = ExpansionCoronalTypeEnum.None;

      this.validationHelperService.removeError(nameof<BonesFindingUiModel>(m => m.partType));
    }

    this.applyClassificationRohenaQuinquillaLogic();
  }

  applyClassificationRohenaQuinquillaLogic(): void {
    if (!this.model.isBoneMarrowEdema) {
      this.model.expansionType = ExpansionTypeEnum.None;
      this.model.classificationRohenaQuinquillaType = ClassificationRohenaQuinquillaTypeEnum.None;
    }
    if (!this.model.isT1wHypointenseLinePerpendicular) {
      this.model.expansionCoronalType = ExpansionCoronalTypeEnum.None;
      this.model.classificationRohenaQuinquillaType = ClassificationRohenaQuinquillaTypeEnum.None;
    }

    if (this.model.expansionCoronalType === ExpansionCoronalTypeEnum.EqualOver50) {
      this.model.classificationRohenaQuinquillaType = ClassificationRohenaQuinquillaTypeEnum.Grade4;
    } else if (this.model.expansionCoronalType === ExpansionCoronalTypeEnum.Below50) {
      this.model.classificationRohenaQuinquillaType = ClassificationRohenaQuinquillaTypeEnum.Grade3;
    } else if (this.model.expansionType === ExpansionTypeEnum.Over6Mm) {
      this.model.classificationRohenaQuinquillaType = ClassificationRohenaQuinquillaTypeEnum.Grade2;
    } else if (this.model.expansionType === ExpansionTypeEnum.BelowEqual6Mm) {
      this.model.classificationRohenaQuinquillaType = ClassificationRohenaQuinquillaTypeEnum.Grade1;
    }
  }
}
