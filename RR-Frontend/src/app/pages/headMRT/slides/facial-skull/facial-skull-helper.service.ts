import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FacialSkullHelperService {
  isDWI = new BehaviorSubject<boolean>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
}
