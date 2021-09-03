import { Injectable } from '@angular/core';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';
import { BehaviorSubject } from 'rxjs';

export class ComplexLocalizerData {
  type: ComplexLocalizersTypes;
  selectionMode: 'single' | 'multi';
  dictionaryType: 'L005' | 'L006';
  isComplex: boolean;

  constructor(type: ComplexLocalizersTypes, selectionMode?: 'single' | 'multi', dictionaryType?: 'L005' | 'L006', isComplex?: boolean) {
    this.type = type;
    this.selectionMode = selectionMode;
    this.dictionaryType = dictionaryType;
    this.isComplex = isComplex;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SoftTissueHelperService {
  localizationSide = new BehaviorSubject<string>(null);
  largeLocalizerOpen = new BehaviorSubject<ComplexLocalizerData>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
  isContrastMediumType = new BehaviorSubject<boolean>(null);
}
