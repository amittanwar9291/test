import { Component, Input } from '@angular/core';
import { CapsuleAndRibbonsFindingUiModel } from '@models/handMRT/ui/capsule-and-ribbons/capsule-and-ribbons-finding-ui.model';
import { NgForm, ControlContainer } from '@angular/forms';
import { SectionTypeEnum } from '@enums/handMRT/capsule-and-ribbons/section-type.enum';
import { CapsuleAndRibbonsTypeEnum } from '@enums/handMRT/capsule-and-ribbons/capsule-and-ribbons-type.enum';

@Component({
  selector: 'rr-d2tod5',
  templateUrl: './D2toD5.component.html',
  styleUrls: ['./D2toD5.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class D2toD5Component {
  @Input() model: CapsuleAndRibbonsFindingUiModel;

  sectionType: typeof SectionTypeEnum;
  capsuleAndRibbonsType: typeof CapsuleAndRibbonsTypeEnum;

  constructor() {
    this.initializeEnums();
  }

  initializeEnums(): void {
    this.sectionType = SectionTypeEnum;
    this.capsuleAndRibbonsType = CapsuleAndRibbonsTypeEnum;
  }
}
