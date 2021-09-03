import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CerebrospinalFluidSpaceHelperService {
  isCMYes = new BehaviorSubject<boolean>(null);
}
