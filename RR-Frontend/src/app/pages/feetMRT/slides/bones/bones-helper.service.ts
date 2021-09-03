import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComplexLocalizersTypes } from '@models/feetMRT/ui/bones/bones.enum';

export class ComplexLocalizerData {
  type: ComplexLocalizersTypes;
  selectionMode: 'single' | 'multi';
  dictionaryType: 'L005' | 'L006';
  isComplex: boolean;
  isMalleoli: boolean;
  headerKeys: string[];
  constructor(
    type: ComplexLocalizersTypes,
    selectionMode?: 'single' | 'multi',
    dictionaryType?: 'L005' | 'L006',
    isComplex?: boolean,
    isMalleoli?: boolean,
    headerKeys?: string[]
  ) {
    this.type = type;
    this.selectionMode = selectionMode;
    this.dictionaryType = dictionaryType;
    this.isComplex = isComplex;
    this.isMalleoli = isMalleoli;
    this.headerKeys = headerKeys;
  }
}

@Injectable({
  providedIn: 'root'
})
export class BonesHelperService {
  localizationSide = new BehaviorSubject<string>(null);
  largeLocalizerOpen = new BehaviorSubject<ComplexLocalizerData>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
}
