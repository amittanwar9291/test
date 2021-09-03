import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoftTissuesHelperService {
  isLargeLocalizerOpen = new BehaviorSubject<boolean>(false);
}
