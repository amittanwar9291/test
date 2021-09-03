import { Injectable } from '@angular/core';
import { ToastMessageService } from '@services/shared/ToastMessage/toast-message.service';
import { InstituteHttpService } from '@services/shared/settings/institute-http.service';
import { BehaviorSubject } from 'rxjs';
import { InstituteModel } from '@models/shared/settings/institute.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsHelperService {
  institute = new BehaviorSubject<InstituteModel>(null);

  constructor(private toastMessageService: ToastMessageService, public instituteHttpService: InstituteHttpService) {}

  fetchInstitute() {
    this.instituteHttpService.getInstitute().subscribe(
      (response: any) =>
        this.institute.next(
          new InstituteModel(response.id, response.name, response.instituteToken, response.connectionType, response.address.properties)
        ),
      () => this.toastMessageService.showErrorToast('settings.toastMessages.noInstituteUploaded')
    );
  }
}
