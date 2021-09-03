import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GenderTypeEnum } from '@enums/shared/gender-type.enum';
import { SharedUrinaryBladderColumnModel } from '@models/pelvisMRT/ui/bladder/shared-urinary-bladder-column.model';

@Injectable({
  providedIn: 'root'
})
export class BladderHelperService {
  gender = new BehaviorSubject<GenderTypeEnum>(GenderTypeEnum.None);
  isCM = new BehaviorSubject<boolean>(false);
  sharedUrinaryBladderColumnModel = new BehaviorSubject<SharedUrinaryBladderColumnModel>(new SharedUrinaryBladderColumnModel());
}
