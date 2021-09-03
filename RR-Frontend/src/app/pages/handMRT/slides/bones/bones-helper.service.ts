import { Injectable } from '@angular/core';
import { LocationTypeEnum } from '@enums/shared/location-type.enum';
import { BonesFindingUiModel } from '@models/handMRT/ui/bones/bones-finding-ui.model';
import { BehaviorSubject } from 'rxjs';

export class ComplexLocalizerData {
  type: 'bones' | 'joints';
  isSingleChoice: boolean;
  isComplex: boolean;
  wristOnly: boolean;
  isAdjacentSelection: boolean;
  cleanupCallback: (m: BonesFindingUiModel) => {};

  constructor(
    type: 'bones' | 'joints',
    isSingleChoice: boolean,
    isComplex = false,
    wristOnly = false,
    isAdjacentSelection = false,
    cleanupCallback = null
  ) {
    this.type = type;
    this.isSingleChoice = isSingleChoice;
    this.isComplex = isComplex;
    this.wristOnly = wristOnly;
    this.isAdjacentSelection = isAdjacentSelection;
    this.cleanupCallback = cleanupCallback;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BonesHelperService {
  localizationSide = new BehaviorSubject<LocationTypeEnum>(LocationTypeEnum.None);
  largeLocalizerOpen = new BehaviorSubject<ComplexLocalizerData>(null);
  isCMYes = new BehaviorSubject<boolean>(false);
}
