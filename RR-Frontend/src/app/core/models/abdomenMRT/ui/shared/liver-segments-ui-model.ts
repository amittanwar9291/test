import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class LiverSegmentsUiModel extends EnumBase {
  segment1: boolean;
  segment2: boolean;
  segment3: boolean;
  segment4a: boolean;
  segment4b: boolean;
  segment5: boolean;
  segment6: boolean;
  segment7: boolean;
  segment8: boolean;

  constructor() {
    super();
    this.segment1 = false;
    this.segment2 = false;
    this.segment3 = false;
    this.segment4a = false;
    this.segment4b = false;
    this.segment5 = false;
    this.segment6 = false;
    this.segment7 = false;
    this.segment8 = false;
  }
}
