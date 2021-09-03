import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonesHelperService {
  isCMYes = new BehaviorSubject<boolean>(null);
  isLessThan18YearsOld = new BehaviorSubject<boolean>(null);
}
