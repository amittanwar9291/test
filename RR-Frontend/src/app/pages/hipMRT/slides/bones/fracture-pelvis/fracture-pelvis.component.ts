import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IHipLocalizerEventEmitter } from '@interfaces/pages/hipMRT/bones/hip-localizer-event-emitter';
import { BonesFindingUiModel } from '@models/hipMRT/ui/bones/bones-finding-ui.model';
import {
  HipBonesLocalizerElementsEnum,
  FractureSpecificationTypeEnum,
  Fracture61A1TypeEnum,
  Fracture61A2TypeEnum,
  Fracture61ATypeEnum,
  Fracture61B1TypeEnum,
  Fracture61B2TypeEnum,
  Fracture61B3TypeEnum,
  Fracture61BTypeEnum,
  Fracture61C1TypeEnum,
  Fracture61C2TypeEnum,
  Fracture61C3TypeEnum,
  Fracture61CTypeEnum,
  FractureAO61ClassificationTypeEnum,
  SacralFractureTypeEnum
} from '@enums/hipMRT/bones';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { values } from 'lodash';

@Component({
  selector: 'rr-fracture-pelvis',
  templateUrl: './fracture-pelvis.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class FracturePelvisComponent implements OnInit, OnDestroy {
  @Input() model: BonesFindingUiModel;

  @Output() emitLocalizer = new EventEmitter<IHipLocalizerEventEmitter>();

  furtherImageFeaturesTypesSub: Subscription;
  furtherImageFeaturesTypeOptions: DropdownModel[];

  fractureSpecificationType = FractureSpecificationTypeEnum;
  fractureAO61ClassificationType = FractureAO61ClassificationTypeEnum;
  fracture61AType = Fracture61ATypeEnum;
  fracture61A1Type = Fracture61A1TypeEnum;
  fracture61A2Type = Fracture61A2TypeEnum;
  fracture61BType = Fracture61BTypeEnum;
  fracture61B1Type = Fracture61B1TypeEnum;
  fracture61B2Type = Fracture61B2TypeEnum;
  fracture61B3Type = Fracture61B3TypeEnum;
  fracture61CType = Fracture61CTypeEnum;
  fracture61C1Type = Fracture61C1TypeEnum;
  fracture61C2Type = Fracture61C2TypeEnum;
  fracture61C3Type = Fracture61C3TypeEnum;
  sacralFractureType = SacralFractureTypeEnum;

  constructor(private translate: TranslateService) {
    this.furtherImageFeaturesTypeOptions = [];
  }

  ngOnInit(): void {
    this.initTranslations();
  }

  openLargeLocalizer(): void {
    this.emitLocalizer.emit({
      elem: [
        HipBonesLocalizerElementsEnum.leftOsIlium,
        HipBonesLocalizerElementsEnum.leftOsIschium,
        HipBonesLocalizerElementsEnum.leftOsPubis,
        HipBonesLocalizerElementsEnum.rightOsIlium,
        HipBonesLocalizerElementsEnum.rightOsIschium,
        HipBonesLocalizerElementsEnum.rightOsPubis
      ],
      isExpansion: true
    });
  }

  private initTranslations(): void {
    this.furtherImageFeaturesTypesSub = this.translate
      .stream('hipMRT.bones.furtherImageFeaturesTypeOptions.options')
      .subscribe((out: DropdownModel[]) => (this.furtherImageFeaturesTypeOptions = values(out)));
  }

  ngOnDestroy(): void {
    this.furtherImageFeaturesTypesSub.unsubscribe();
  }

  get isFractAO61NotFurtherOrNone(): boolean {
    return (
      this.model.fractureAO61ClassificationType === FractureAO61ClassificationTypeEnum.NotFurtherSpecified ||
      this.model.fractureAO61ClassificationType === FractureAO61ClassificationTypeEnum.None
    );
  }

  get isFract61AFract61BFract61CNone(): boolean {
    return (
      this.model.fracture61AType === Fracture61ATypeEnum.None &&
      this.model.fracture61BType === Fracture61BTypeEnum.None &&
      this.model.fracture61CType === Fracture61CTypeEnum.None
    );
  }
}
