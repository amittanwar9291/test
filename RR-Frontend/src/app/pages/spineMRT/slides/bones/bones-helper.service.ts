import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SpineBonesLocalizerConfig } from '@models/spineMRT/ui/bones/spine-bones-localizer-config.model';

@Injectable({
  providedIn: 'root'
})
export class BonesHelperService {
  largeLocalizerOpenConfig = new BehaviorSubject<SpineBonesLocalizerConfig>(null);
  previousSpineLocalizerSelection: string;
}
