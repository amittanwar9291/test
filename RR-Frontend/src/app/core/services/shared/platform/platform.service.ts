import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(private electronService: ElectronService) {}

  public isElectron(): boolean {
    return this.electronService.isElectronApp;
  }

  public isDesktop(): boolean {
    return !!window.navigator.userAgent.match(/RadioReport-Desktop/);
  }

  public isDocker(): boolean {
    return environment.name === 'docker';
  }

  public getElectronRenderer(): Electron.IpcRenderer {
    return this.electronService.ipcRenderer;
  }

  public getElectronMainProcess(): NodeJS.Process {
    return this.electronService.remote.process;
  }
}
