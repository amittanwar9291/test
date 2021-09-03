import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderMapper {
  constructor() {}

  mapSignalToUI(map: Array<string>, input: string): number {
    return map.indexOf(input);
  }

  mapSignalToAPI(map: Array<string>, input: number): string {
    return map[input];
  }
}
