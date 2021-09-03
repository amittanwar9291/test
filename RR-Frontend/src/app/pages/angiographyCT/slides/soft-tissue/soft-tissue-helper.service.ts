import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftTissueHelperService {
  largeLocalizerOpen = new BehaviorSubject<'spine' | 'rib'>(null);
}
