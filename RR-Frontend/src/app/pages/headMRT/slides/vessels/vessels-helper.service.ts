import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VesselsHelperService {
  largeLocalizerOpen = new BehaviorSubject<
    'arterialTerritories' | 'basalGanglia' | 'arteriesSegments' | 'cerebralVenousThrombosis' | 'arotidArtery' | 'cortex'
  >(null);
}
