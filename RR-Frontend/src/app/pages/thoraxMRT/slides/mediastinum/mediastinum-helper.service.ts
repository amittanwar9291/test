import { Injectable } from '@angular/core';
import { MediastinumLargeLocalizerConfigModel } from '@models/thoraxMRT/ui/mediastinum/mediastinum-large-localizer-config.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediastinumHelperService {
  largeLocalizerOpen = new BehaviorSubject<MediastinumLargeLocalizerConfigModel>(null);
  isCMYes = new BehaviorSubject<boolean>(null);
  isDWISelected = new BehaviorSubject<boolean>(null);
}
