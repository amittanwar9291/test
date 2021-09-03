import { FindingBase } from '@models/shared/finding/finding.base';

export class SideEffectApiBaseModel extends FindingBase {
  cmSideEffectType: string;
  minAfterCMinjection: number;
  durationAdverseReactionType: string;
  isCompletelyDeclining: boolean;
  isSeriousAdverseEvent: boolean;

  constructor() {
    super();
    this.cmSideEffectType = 'None';
    this.minAfterCMinjection = null;
    this.durationAdverseReactionType = 'None';
    this.isCompletelyDeclining = false;
    this.isSeriousAdverseEvent = false;
  }
}
