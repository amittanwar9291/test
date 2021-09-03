import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DropdownModel } from '@models/shared/dropdown/dropdown.model';
import { TranslateService } from '@ngx-translate/core';
import { InstituteHttpService } from '@services/shared/settings/institute-http.service';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { sortBy } from 'lodash';
import Ajv from 'ajv';
import ajvLocalize from 'ajv-i18n';
import { DialogService } from 'primeng/dynamicdialog';
import { SettingsHttpService } from '@services/shared/settings/settings-http.service';
import { Subscription } from 'rxjs';
import { mapValues, difference } from 'lodash';
import { DicomMapApiModel } from '@models/shared/settings/dicom-map-api.model';
import { DicomRetrieveLevel } from '@enums/settings/dicom-retrieve-level.enum';
import { FileUpload } from 'primeng/fileupload';
import dicomDataSchema from '@models/shared/settings/dicom-data-json-schema.json';
import { ExportSettingsSerivce } from '@services/shared/settings/export-settings.serivce';
import { DicomMapEntryUiModel } from '@models/shared/settings/dicom-map-entry-ui.model';
import { DeleteConfirmDialogComponent } from '../../../../shared/dialogs/settings/delete-confirm-dialog/delete-confirm-dialog.component';
import { AddOrEditDicomMapEntryDialogComponent } from '../../../../shared/dialogs/settings/add-or-edit-dicom-map-entry-dialog/add-or-edit-dicom-map-entry-dialog.component';
import { DicomMapEntryApiModel } from '@models/shared/settings/dicom-map-entry-api.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'rr-dicom-settings',
  templateUrl: './dicom-map-settings.component.html',
  styleUrls: ['./dicom-map-settings.component.scss'],
  providers: [DialogService]
})
export class DicomMapSettingsComponent implements OnInit, OnDestroy {
  private moduleNames: object;
  private availableModulse;
  private modulesOptionAdditional: DropdownModel;
  modulesOptions: DropdownModel[];
  retrieveLevelOptions: DropdownModel[] = Object.keys(DicomRetrieveLevel).map(item => new DropdownModel(item, item));

  selectedModule = 'None';
  selectedRetrieveLevel = 'None';

  private subscriptions: Subscription[] = [];

  @ViewChild('importDicom') importDicom: FileUpload;

  page = 1;

  dicomMap: DicomMapApiModel;
  dicomMapEntries: DicomMapEntryUiModel[] = [];

  constructor(
    public translate: TranslateService,
    private toastMessageService: ToastMessageService,
    private instituteHttpService: InstituteHttpService,
    public settingsHttpService: SettingsHttpService,
    public tokenHttpService: InstituteHttpService,
    private dialogService: DialogService,
    private exportSettingsSerivce: ExportSettingsSerivce,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translate.stream('routing.modules').subscribe(out => {
        this.moduleNames = mapValues(out, elem => elem.replace('\n', ''));
        this.prepareModulesOptions();
      })
    );
    this.subscriptions.push(
      this.translate.stream('settings.modulesOptionAdditional').subscribe(out => {
        this.modulesOptionAdditional = out;
        this.prepareModulesOptions();
      })
    );
    this.instituteHttpService.getAvailableModules().subscribe(modules => {
      this.availableModulse = modules?.availableModules;
      this.prepareModulesOptions();
    });
  }

  prepareModulesOptions() {
    if (!this.moduleNames || !this.availableModulse || !this.modulesOptionAdditional) {
      return [];
    }
    const options: DropdownModel[] = sortBy(
      this.availableModulse.map((module: string) => new DropdownModel(this.moduleNames[module], module)),
      ['label']
    );
    options.unshift(this.modulesOptionAdditional);
    this.modulesOptions = options;
  }

  onModuleSelectionChangeEvent() {
    if (this.selectedModule !== 'None') {
      this.fetchDicomMap();
    } else {
      this.dicomMap = null;
    }
  }

  private fetchDicomMap() {
    this.settingsHttpService.getDicomMap(this.selectedModule).subscribe(response => {
      this.dicomMap = JSON.parse(response.payload);
      if (this.showDicomMapEntries()) {
        this.dicomMapEntries = this.dicomMap[this.selectedRetrieveLevel].map(
          (item: DicomMapEntryApiModel) => new DicomMapEntryUiModel(item)
        );
      }
    });
  }

  onRetrieveLevelChangeEvent() {
    if (this.showDicomMapEntries()) {
      this.dicomMapEntries = this.dicomMap[this.selectedRetrieveLevel].map((item: DicomMapEntryApiModel) => new DicomMapEntryUiModel(item));
    }
  }

  setPage(event: any): void {
    this.page = event;
  }

  showDicomMapEntries(): boolean {
    return this.dicomMap && this.dicomMap.Module && this.dicomMap[this.selectedRetrieveLevel];
  }

  selectAllDicomMapEntries(event) {
    this.dicomMapEntries.forEach(item => (item.isSelected = event.checked));
  }

  getSelectedDicomMapEntries(): DicomMapEntryUiModel[] {
    return this.dicomMapEntries.filter(item => item.isSelected);
  }

  removeMapEntries(): void {
    if (this.getSelectedDicomMapEntries().length !== 0) {
      this.dialogService
        .open(DeleteConfirmDialogComponent, {
          showHeader: false,
          contentStyle: { padding: '0' },
          dismissableMask: false,
          data: { type: 'dicom' }
        })
        .onClose.subscribe(res => {
          if (res) {
            this.dicomMapEntries = difference(this.dicomMapEntries, this.getSelectedDicomMapEntries());
            this.dicomMap[this.selectedRetrieveLevel] = this.dicomMapEntries;
          }
        });
    }
  }

  editMapEntry() {
    if (this.getSelectedDicomMapEntries().length !== 1) {
      this.toastMessageService.showErrorToast('settings.toastMessages.onlyOneSelection');
      return;
    }

    this.dialogService
      .open(AddOrEditDicomMapEntryDialogComponent, {
        showHeader: false,
        contentStyle: { padding: '0' },
        dismissableMask: false,
        data: { dicomEntryToEdit: this.getSelectedDicomMapEntries()[0] }
      })
      .onClose.subscribe((editedOrAddedDicomEntry: DicomMapEntryUiModel) => {
        if (editedOrAddedDicomEntry) {
          Object.assign(
            this.dicomMapEntries.find(item => item.id === editedOrAddedDicomEntry.id),
            editedOrAddedDicomEntry
          );
          this.dicomMap[this.selectedRetrieveLevel] = this.mapToApi(this.dicomMapEntries);
        }
      });
  }

  resetDicomMap(): void {
    this.fetchDicomMap();
  }

  saveDicomMap(): void {
    this.setDicomMap(this.dicomMap);
  }

  addMapEntry() {
    if (this.dicomMapEntries.length >= 250) {
      // todo possibly change limit; limit not in documentation; set on BE as well
      this.toastMessageService.showSuccessToast('settings.toastMessages.tooManyDicomMapEntries');
      return;
    }
    this.dialogService
      .open(AddOrEditDicomMapEntryDialogComponent, {
        showHeader: false
      })
      .onClose.subscribe((newEntry: DicomMapEntryUiModel) => {
        if (newEntry) {
          this.dicomMapEntries.unshift(newEntry);
          this.dicomMap[this.selectedRetrieveLevel] = this.mapToApi(this.dicomMapEntries);
          this.page = 1;
        }
      });
  }

  exportDicomMap(): void {
    if (this.dicomMap && this.dicomMap.Module) {
      this.exportSettingsSerivce.exportJsonData(this.dicomMap);
    }
  }

  importDicomMap(file): void {
    const fileReader = new FileReader();
    fileReader.onload = _ => {
      if (typeof fileReader.result === 'string') {
        const dicomMap = JSON.parse(fileReader.result);
        const ajv = new Ajv({ allErrors: true, jsonPointers: true, inlineRefs: true });
        const validate = ajv.compile(dicomDataSchema);
        const valid = validate(dicomMap);
        if (!valid) {
          ajvLocalize[this.translate.currentLang](validate.errors);
          this.toastMessageService.showErrorToast(ajv.errorsText(validate.errors, { separator: '\n' }), '');
        } else {
          this.setDicomMap(dicomMap);
        }
        this.importDicom.clear();
      }
    };
    fileReader.readAsText(file.files[0]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  private setDicomMap(dicomMap: DicomMapApiModel): void {
    if (!dicomMap) {
      return;
    }
    this.settingsHttpService.setDicomMap(dicomMap).subscribe(response => {
      if (response.isSuccess) {
        this.toastMessageService.showSuccessToast('settings.toastMessages.fileSaved');
      } else {
        this.toastMessageService.showErrorToast(response.reason);
      }
    });
  }

  mapToApi(ui: DicomMapEntryUiModel[]): DicomMapEntryApiModel[] {
    return ui.map(item => new DicomMapEntryApiModel(item));
  }

  getPageLabel(page) {
    return page.label === '...' ? page.label : this.decimalPipe.transform(page.label, '');
  }
}
