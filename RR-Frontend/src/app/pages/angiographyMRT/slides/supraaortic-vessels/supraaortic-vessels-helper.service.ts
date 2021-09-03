import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum SupraaorticVesselsLoclizerType {
  carotidArtery = 'carotidArtery',
  arteriesSegments = 'arteriesSegments'
}

@Injectable({
  providedIn: 'root'
})
export class SupraaorticVesselsHelperService {
  isLargeLocalizerOpened = new BehaviorSubject<SupraaorticVesselsLoclizerType>(null);
}
