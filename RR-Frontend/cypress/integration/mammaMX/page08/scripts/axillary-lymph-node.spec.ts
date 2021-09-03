import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 08 - Lymph nodes', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_080107', 'mam_mx_080106-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_LymphNodes.url + '/' + pageId);
        });
      });
    });
  });

  describe('Axillary lymph node', () => {
    it('Axillary lymph node', () => {
      clickElement('mam_mx_080105', true, 'radio');
      elementShouldBeEnabled('mam_mx_080106-1');
      findingColumn.selectFindingOptionByAppearance(0);
      elementShouldBeEnabled('mam_mx_080107');
      elementShouldBeEnabled('mam_mx_080203');
      elementShouldBeEnabled('mam_mx_080401');

      clickElement('mam_mx_080203', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_080205');
      elementShouldBeEnabled('mam_mx_080206');
      elementShouldBeEnabled('mam_mx_080207');
      elementShouldBeEnabled('mam_mx_080208');
      elementShouldBeEnabled('mam_mx_080302');
      elementShouldBeEnabled('mam_mx_080304');
      elementShouldBeEnabled('mam_mx_080306');
      elementShouldBeEnabled('mam_mx_080309');
      elementShouldBeEnabled('mam_mx_080310');
      elementShouldBeEnabled('mam_mx_080311');

      clickElement('mam_mx_080306', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_080307');
      elementShouldBeEnabled('mam_mx_080308');

      clickElement('mam_mx_080401', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_080403');
      elementShouldBeEnabled('mam_mx_080404');
      elementShouldBeEnabled('mam_mx_080405');
      elementShouldBeEnabled('mam_mx_080406');
      elementShouldBeEnabled('mam_mx_080502');
      elementShouldBeEnabled('mam_mx_080504');
      elementShouldBeEnabled('mam_mx_080506');
      elementShouldBeEnabled('mam_mx_080509');
      elementShouldBeEnabled('mam_mx_080510');
      elementShouldBeEnabled('mam_mx_080511');

      clickElement('mam_mx_080506', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_080507');
      elementShouldBeEnabled('mam_mx_080508');
    });
  });
});
