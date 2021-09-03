import { Injectable } from '@angular/core';
import { BonesLargeLocalizerConfig } from '@models/spineCT/ui/bones/bones-large-localizer-config.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BonesHelperService {
  isCMYes = new BehaviorSubject<boolean>(null);
  largeLocalizerConfig = new BehaviorSubject<BonesLargeLocalizerConfig>(null);
  previousSpineLocalizerSelection: string;
}
