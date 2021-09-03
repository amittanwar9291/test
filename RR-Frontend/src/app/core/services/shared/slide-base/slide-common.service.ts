import { Injectable } from '@angular/core';
import { SlideFormService } from './slide-form.service';
import { TranslateService } from '@ngx-translate/core';
import { CustomTranslateService, LoggingService } from '..';
import { TrackingService } from '@services/shared/tracking/tracking.service';
import { ValidationHelperService } from '@services/shared/validation/validation-helper.service';
import { ValidationDataService } from '@services/shared/validation/validation-data.service';

// holds all minor services
@Injectable()
export class SlideCommonService {
  constructor(
    public slideFormService: SlideFormService,
    public translate: TranslateService,
    public customTranslate: CustomTranslateService,
    public logger: LoggingService,
    public validationHelperService: ValidationHelperService,
    public validationDataService: ValidationDataService,
    public trackingService: TrackingService
  ) {}
}
