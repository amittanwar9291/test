import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PelvisLegArteriesHelperService {
  isCMYes = new BehaviorSubject<boolean>(null);
}
