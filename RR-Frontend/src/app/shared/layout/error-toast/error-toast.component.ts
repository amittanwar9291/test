import { Component } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'rr-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss'],
  animations: [
    trigger('flyInOut', [
      state(
        'inactive',
        style({
          opacity: 0
        })
      ),
      transition(
        'inactive => active',
        animate(
          '400ms ease-in',
          keyframes([
            style({
              transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
              opacity: 0
            }),
            style({
              transform: 'skewX(20deg)',
              opacity: 1
            }),
            style({
              transform: 'skewX(-5deg)',
              opacity: 1
            }),
            style({
              transform: 'none',
              opacity: 1
            })
          ])
        )
      ),
      transition(
        'active => removed',
        animate(
          '600ms ease-out',
          keyframes([
            style({
              opacity: 1
            }),
            style({
              transform: 'translate3d(100%, 0, 0) skewX(30deg)',
              opacity: 0
            })
          ])
        )
      )
    ])
  ]
})
export class ErrorToastComponent extends Toast {
  isFormError: boolean;
  constructor(protected toastrService: ToastrService, public toastPackage: ToastPackage) {
    super(toastrService, toastPackage);
    this.isFormError = this.title === 'errors.invalidForm.title';
  }
}
