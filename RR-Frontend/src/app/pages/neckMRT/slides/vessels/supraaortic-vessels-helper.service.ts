import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum SupraaorticVesselsLocalizerType {
  carotidArtery = 'carotidArtery',
  arteriesSegments = 'arteriesSegments'
}

@Injectable({
  providedIn: 'root'
})
export class SupraaorticVesselsHelperService {
  isLargeLocalizerOpened = new BehaviorSubject<SupraaorticVesselsLocalizerType>(null);
}
