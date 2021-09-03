import { EnumBase } from '@abstractions/enum-base/enum-base.model';

export class LiverPathologyUiModel extends EnumBase {
  segmentalInRightLiverLobe: boolean;
  segment5: boolean;
  segment6: boolean;
  segment7: boolean;
  segment8: boolean;
  rightHepaticDuct: boolean;
  intrahepatic: boolean;
  perihilar: boolean;
  extrahepatic: boolean;
  segmentalInLeftLiverLobe: boolean;
  segment1: boolean;
  segment2: boolean;
  segment3: boolean;
  segment4a: boolean;
  segment4b: boolean;
  leftHepaticDuct: boolean;
  commonHepaticDuct: boolean;
  cysticDuct: boolean;
  ductusCholedochus: boolean;
  ductusCholedochusCloseToLiver: boolean;
  ductusCholedochusCloseToPapilla: boolean;

  constructor() {
    super();
    this.segmentalInRightLiverLobe = false;
    this.segment5 = false;
    this.segment6 = false;
    this.segment7 = false;
    this.segment8 = false;
    this.rightHepaticDuct = false;
    this.intrahepatic = false;
    this.perihilar = false;
    this.extrahepatic = false;
    this.segmentalInLeftLiverLobe = false;
    this.segment1 = false;
    this.segment2 = false;
    this.segment3 = false;
    this.segment4a = false;
    this.segment4b = false;
    this.leftHepaticDuct = false;
    this.commonHepaticDuct = false;
    this.cysticDuct = false;
    this.ductusCholedochus = false;
    this.ductusCholedochusCloseToLiver = false;
    this.ductusCholedochusCloseToPapilla = false;
  }
}
