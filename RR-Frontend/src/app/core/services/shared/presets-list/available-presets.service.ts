import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../../../../app.config';
import { ModulePresetsBase } from '@models/shared/presets-list/module-presets-base.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AvailablePresetsService {
  // todo temporary - in case problem with GET
  availableModulesTemp = [
    'CardioMRT',
    'AngiographyMRT',
    'FeetMRT',
    'ThoraxCT',
    'PelvisMRT',
    'HandMRT',
    'KneeMRT',
    'AbdomenMRT',
    'ElbowMRT',
    'SpineCT',
    'MammaMRT',
    'MammaMX',
    'HipMRT',
    'ShoulderMRT',
    'SpineMRT',
    'ThoraxMRT',
    'NeckMRT'
  ];

  constructor(private http: HttpClient) {}

  getModulePresetsConfig(): Observable<any> {
    // todo temporary - in case problem with GET
    // return new Observable<ModulePresetsBase>(s => s.next(this.setActivePreset(this.availableModulesTemp)));

    return this.getAvailablePresets().pipe(
      map(response => {
        return this.setActivePreset(response.availableModules);
      })
    );
  }

  private getAvailablePresets(): Observable<any> {
    return this.http.get(`${AppConfig.settings.baseUrl}/${AppConfig.settings.instituteManager.institutes}/GetAvailableModules`);
  }

  private setActivePreset(availableModules: string[]): ModulePresetsBase {
    const base = new ModulePresetsBase();
    base.presetsCT.forEach(item => {
      if (availableModules.includes(item.moduleName)) {
        item.isActive = true;
      }
    });
    base.presetsMRT.forEach(item => {
      if (availableModules.includes(item.moduleName)) {
        item.isActive = true;
      }
    });
    return base;
  }
}
