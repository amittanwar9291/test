import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomTranslateService {
  public language = new BehaviorSubject('de');

  constructor(private translate: TranslateService) {}

  getDefaultLanguage() {
    const language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang: string) {
    this.translate.use(setLang);
  }
}
