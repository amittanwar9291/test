import { NavigationService } from '@services/shared/navigation/navigation.service';
import { SlideRequestService } from '@services/shared/slide-base/slide-request.service';
import { NavigationReportDataService } from '@services/shared/navigation/navigation-report-data.service';
import { NavigationRestoreService } from '@services/shared/navigation/navigation-restore.service';
import { ModuleLifecycleService } from '@services/shared/module-lifecycle/module-lifecycle.service';
import { HttpListService } from '@abstractions/abstract-classes/http-list-service';
import { UserBasicDataService } from '@services/shared/logged-user/user-basic-data.service';

export const SlideRequestFactory = (
  navService: NavigationService,
  navDataService: NavigationReportDataService,
  navRestoreService: NavigationRestoreService,
  moduleLifecycles: ModuleLifecycleService,
  httpListService: HttpListService,
  userDataService: UserBasicDataService
) => {
  return new SlideRequestService(navService, navDataService, navRestoreService, moduleLifecycles, httpListService, userDataService);
};
