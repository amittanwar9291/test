import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BonesFindingUiModel } from '@models/pelvisMRT/ui/bones/bones-finding-ui.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { BonesLocalizerElementsEnum } from '@enums/pelvisMRT/bones/bones-localizer-elements.enum';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { AnfhCortexTypeEnum, ClassificationAccordingToARCOTypeEnum } from '@enums/pelvisMRT/bones/avascular-necrosis-of-the-femoral-head';

@Component({
  selector: 'rr-avascular-necrosis',
  templateUrl: './avascular-necrosis.component.html',
  styleUrls: ['./../bones.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AvascularNecrosisComponent implements OnInit {
  @Input() model: BonesFindingUiModel;
  @Input() differentialDiagnosisOptions: DropdownModel[];
  @Output() emitLocalizer = new EventEmitter<{
    elem: BonesLocalizerElementsEnum[];
    isExpansion: boolean;
  }>();

  anfhCortexTypeEnum = AnfhCortexTypeEnum;
  classificationAccordingToARCOTypeEnum = ClassificationAccordingToARCOTypeEnum;

  ngOnInit(): void {
    this.model.isSubchondralgeographicalDemarcationLine = true;
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [BonesLocalizerElementsEnum.RightFemoralHead, BonesLocalizerElementsEnum.LeftFemoralHead],
      isExpansion: false
    });
  }

  checkARCOIfActive() {
    if (this.model.anfhCortexType !== AnfhCortexTypeEnum.None) {
      this.checkARCO();
    }
  }

  checkARCO(): void {
    this.model.isClassificationAccordingToARCO = this.model.anfhCortexType !== AnfhCortexTypeEnum.None;
    if (this.model.anfhCortexType === AnfhCortexTypeEnum.Intact) {
      this.model.classificationAccordingToARCOType = this.classificationAccordingToARCOTypeEnum.ItoII;
    } else if (this.model.anfhCortexType === AnfhCortexTypeEnum.Collapse && !this.model.isCoexistenceCoaxarthosis) {
      this.model.classificationAccordingToARCOType = this.classificationAccordingToARCOTypeEnum.III;
    } else if (this.model.anfhCortexType === AnfhCortexTypeEnum.Collapse && this.model.isCoexistenceCoaxarthosis) {
      this.model.classificationAccordingToARCOType = this.classificationAccordingToARCOTypeEnum.IV;
    } else if (this.model.anfhCortexType === AnfhCortexTypeEnum.InsufficiencyFracture && !this.model.isCoexistenceCoaxarthosis) {
      this.model.classificationAccordingToARCOType = this.classificationAccordingToARCOTypeEnum.III;
    } else if (this.model.anfhCortexType === AnfhCortexTypeEnum.InsufficiencyFracture && this.model.isCoexistenceCoaxarthosis) {
      this.model.classificationAccordingToARCOType = this.classificationAccordingToARCOTypeEnum.IV;
    } else {
      this.model.classificationAccordingToARCOType = this.classificationAccordingToARCOTypeEnum.None;
    }
  }

  resetSubordinate() {
    if (this.model.anfhDifferentialDiagnosisType === 'None') {
      this.model.isSubordinated = false;
    }
  }
}
