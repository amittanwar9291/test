import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { ISimpleObject } from '@interfaces/shared/simple-object.interface';

@Injectable({
  providedIn: 'root'
})
export class SequencesService {
  private orientationTypeBits$: ReplaySubject<ISimpleObject>;
  private sequenceTypeBits$: ReplaySubject<DropdownModel[]>;

  constructor() {
    this.orientationTypeBits$ = new ReplaySubject();
    this.sequenceTypeBits$ = new ReplaySubject();
  }

  // TranslationsBits stream methods
  getOrientationTypeBitsStream(): ReplaySubject<any> {
    return this.orientationTypeBits$;
  }

  updateOrientationTypeBits(val: ISimpleObject): void {
    this.orientationTypeBits$.next(val);
  }

  // SequeceTypes stream methods
  getSequenceTypeBitsStream(): ReplaySubject<any> {
    return this.sequenceTypeBits$;
  }

  updateSequenceTypeBits(val: DropdownModel[]): void {
    this.sequenceTypeBits$.next(val);
  }
}
