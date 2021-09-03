import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MeningesHelperService {
  isCMYes = new BehaviorSubject<boolean>(null);
}
