import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NavigationService } from '@services/shared/navigation/navigation.service';
import { AuthorizedComponent } from '../../../shared/authorized/authorized.component';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { IModuleTranslationsConfig } from '@interfaces/configs/module-translations-config.interface';
import { ReportListExternalCommunicationService } from '@services/shared/report-list/report-list-external-communication.service';
import { AvailablePresetsService } from '@services/shared/presets-list/available-presets.service';
import { IModulePresetsConfig } from '@interfaces/configs/module-presets-config.inteface';
import { IModulePresets } from '@interfaces/module-presets.interface';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

@Component({
  selector: 'rr-app-preset-list',
  templateUrl: './preset-list.component.html',
  styleUrls: ['./preset-list.component.scss']
})
export class PresetListComponent implements OnInit, OnDestroy {
  @Input() public isDialog: boolean;
  @Output() public presetSelected = new EventEmitter();

  subscriptions: Subscription[] = [];

  public presetsCT: IModulePresets[];
  public presetsMRT: IModulePresets[];
  public presets: IModulePresets[];

  constructor(
    parent: AuthorizedComponent,
    private navService: NavigationService,
    private http: HttpClient,
    private translate: TranslateService,
    private externalCommunicationService: ReportListExternalCommunicationService,
    private presetsService: AvailablePresetsService,
    private userBasicDataService: UserBasicDataService
  ) {
    this.subscriptions.push(
      this.translate.stream('layout.presetListHeader').subscribe((out: string) => {
        parent.header = out;
      })
    );
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.presetsService.getModulePresetsConfig().subscribe((availableModules: IModulePresetsConfig) => {
        this.presetsCT = availableModules.presetsCT;
        this.presetsMRT = availableModules.presetsMRT;
        this.presets = this.presetsCT.concat(this.presetsMRT);
        this.subscriptions.push(this.getModuleTranslations());

        if (this.userBasicDataService.userData.getValue().role === 'Viewer') {
          this.presetsCT.forEach(item => (item.isActive = false));
          this.presetsMRT.forEach(item => (item.isActive = false));
          this.presets.forEach(item => (item.isActive = false));
        }
      })
    );
  }

  onPresetSelected(preset: IModulePresets) {
    if (this.isDialog) {
      this.presets.forEach(p => (p.isSelected = false));
      preset.isSelected = true;
      this.presetSelected.emit(preset.moduleName);
    } else {
      this.externalCommunicationService.emitModuleName(preset.moduleName);
      this.navService.close();
    }
  }

  private getModuleTranslations(): Subscription {
    return this.translate.stream('routing.modules').subscribe((out: IModuleTranslationsConfig) => {
      const objectKeys = Object.keys(out);
      objectKeys.forEach(objectKey => {
        const modulePreset = this.presets.find(({ moduleName }) => moduleName === objectKey);
        if (modulePreset !== undefined) {
          modulePreset.displayName = out[objectKey];
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
