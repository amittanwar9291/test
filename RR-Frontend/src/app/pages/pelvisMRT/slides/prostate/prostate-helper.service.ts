import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProstateHelperService {
  sliderPiradasScoreTypeChanged = new BehaviorSubject<boolean>(null);
  indexLesionTypeChanged = new BehaviorSubject<boolean>(null);
}
