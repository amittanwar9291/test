import { NgModelAccessorBase } from '@abstractions/ng-model/ngmodel-accessor-base';

import { DoCheck, KeyValueDiffers } from '@angular/core';

import { INoParamConstructor } from '@interfaces/no-param-constructor.interface';

export class ViewBase<TModel> extends NgModelAccessorBase<TModel> implements DoCheck {
  private differ: any;
  private propMap: Map<string, object>;
  private ngValueKey = 'ngValue';

  constructor(public differs: KeyValueDiffers, private ctor: INoParamConstructor<TModel>) {
    super();
    this.propMap = new Map();
    this.ngValue = this.getNewInstance();
    this.prepareMap(this.ngValue);
    this.buildDiffer();
  }

  ngDoCheck() {
    this.prepareMap(this.ngValue);
    if (this.isModelChanged()) {
      this.writeValue(this.ngValue);
    }
  }

  private buildDiffer(): void {
    this.differ = {};
    this.differ[this.ngValueKey] = this.differs.find({}).create();
    this.propMap.forEach((value: object, key: string) => {
      this.differ[key] = this.differs.find({}).create();
    });
  }

  private prepareMap(model: any): void {
    const keys = Object.keys(model).filter(key => typeof model[key] === 'object' && model[key] !== null);
    keys.forEach((value: string) => {
      this.propMap.set(value, model[value]);
      this.prepareMap(model[value]);
    });
  }

  private isModelChanged(): boolean {
    if (this.checkDifference(this.ngValueKey, this.ngValue)) {
      return true;
    }
    for (const entry of this.propMap) {
      if (this.checkDifference(entry[0], entry[1])) {
        return true;
      }
    }
    return false;
  }

  private checkDifference(key: string, value: any): boolean {
    let result = false;
    const changes = this.differ[key].diff(value);
    if (changes) {
      changes.forEachChangedItem((record: any) => {
        if (record.key !== 'id') {
          result = true;
        }
      });
    }
    return result;
  }

  private getNewInstance(): TModel {
    return new this.ctor();
  }
}
