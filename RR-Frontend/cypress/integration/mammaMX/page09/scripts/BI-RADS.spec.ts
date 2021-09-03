import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { elementShouldBeEnabled, getAppConfig, selectSliderValueAndCheckIt } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';

context('Page 09 - Summary', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Summary.url + '/' + pageId);
        });
      });
    });
  });

  describe('BI-RADS ', () => {
    it('Move the right slide to 4', () => {
      selectSliderValueAndCheckIt('mam_mx_090109', 1, 5);
      elementShouldBeEnabled('mam_mx_090201');
      elementShouldBeEnabled('mam_mx_090202');
      elementShouldBeEnabled('mam_mx_090203');
      selectSliderValueAndCheckIt('mam_mx_090111', 1, 5);
      elementShouldBeEnabled('mam_mx_090204');
      elementShouldBeEnabled('mam_mx_090205');
      elementShouldBeEnabled('mam_mx_090206');
    });
  });
});
