import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class HandSoftTissueHandDetailsLocalizerConfig {
  isSingleselection: boolean;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SoftTissueHelperService {
  handDetailslocalizerConfig = new BehaviorSubject<HandSoftTissueHandDetailsLocalizerConfig>(null);
}
