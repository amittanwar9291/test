import { forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/*
Generic base class for ngModel input.

Use with MakeProvider used as provider in @Component as below:
providers: [MakeProvider(ComponentType)]

([ngModel]) binds to ngValue which can be modified in component ts file.
Additionaly (ngModelChange) can be used to catch change event as below:
(ngModelChange) = "catchFunc($event)"

constructor callback can be used to initialize functions
*/

export abstract class NgModelAccessorBase<T> implements ControlValueAccessor {
  ngValue: T;
  private writeCallback: (m: T) => void;
  private writeCount = 0;
  nullableValue = false;

  get value(): T {
    return this.ngValue;
  }
  set value(v: T) {
    if (v !== this.ngValue && !v) {
      this.ngValue = v;
      this.onChange(v);
    }
  }

  protected assignWriteCallback(callback: (m: T) => void) {
    this.writeCallback = callback;
  }

  writeValue(value: T) {
    if (value === undefined || (!this.nullableValue && value === null)) {
      return;
    }

    this.ngValue = value;
    this.onChange(value);
    this.onTouched();

    if (this.writeCallback) {
      this.writeCallback(value);
    }
  }

  onChange = _ => {};
  onTouched = () => {};

  registerOnChange(fn: (_: T) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

export function MakeProvider(type: any) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}
