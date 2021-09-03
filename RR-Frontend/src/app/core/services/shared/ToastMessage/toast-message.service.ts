import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

import { ErrorToastComponent } from '@layout/error-toast/error-toast.component';
import { SuccessToastComponent } from '@layout/success-toast/success-toast.component';

// TODO consider showing success messages also
// TODO add translations

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  constructor(private toastr: ToastrService) {}

  showHttpError(httpError: HttpErrorResponse) {
    if (!httpError.error || httpError.error.length === 0) {
      this.showErrorToast(httpError.message, `${httpError.status} - ${httpError.statusText}`);
    }
  }

  showErrors(errors: HttpErrorResponse) {
    if (errors.error && Array.isArray(errors.error)) {
      errors.error.forEach(e => {
        this.showErrorToast(e.description);
      });
    }
  }

  /**
   * The whitespace ' ' passed as the first argument to this.toastr.error(...) method when the message argument is falsy (eg. null, '')
   * is necessary because it makes the 'preventDuplicates: true' config option to work. Otherwise, if there is a falsy message argument
   * passed to the 'toastr.error(...) the ngx-translate doesn't recognize the message as a duplicate of an already existing toast
   * and lets to display another identical toasts althoug the `preventDuplicates` config set to true.
   */
  showErrorToast(message: string, title?: string) {
    this.toastr.error(message ? message : ' ', title, {
      toastComponent: ErrorToastComponent
    });
  }

  showSuccessToast(message: string, title?: string) {
    this.toastr.success(message ? message : ' ', title, {
      toastComponent: SuccessToastComponent,
      timeOut: 3000
    });
  }

  clearAllToasts() {
    this.toastr.clear();
  }
}
