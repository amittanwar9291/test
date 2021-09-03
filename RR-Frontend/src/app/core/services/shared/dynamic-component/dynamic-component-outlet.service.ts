import { Injectable, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentOutletService {
  componentSource = new BehaviorSubject<Type<any>>(null);
}
