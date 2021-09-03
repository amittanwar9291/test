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

  describe('Intramammary Lymph Node', () => {
    it('Intramammary Lymph Node', () => {
      clickElement('mam_mx_080105', true, 'radio');
      elementShouldBeEnabled('mam_mx_080106-1');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('mam_mx_080107');
      elementShouldBeEnabled('mam_mx_080203');
      elementShouldBeEnabled('mam_mx_080312');

      clickElement('mam_mx_080203', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_080211');
      elementShouldBeEnabled('mam_mx_080214');
      elementShouldBeEnabled('mam_mx_080215');
      elementShouldBeEnabled('mam_mx_080218');
      elementShouldBeEnabled('mam_mx_080219');
      elementShouldBeEnabled('mam_mx_080220');

      clickElement('mam_mx_080215', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_080216');
      elementShouldBeEnabled('mam_mx_080217');

      clickElement('mam_mx_080312', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_080302');
      elementShouldBeEnabled('mam_mx_080304');
      elementShouldBeEnabled('mam_mx_080306');
      elementShouldBeEnabled('mam_mx_080309');
      elementShouldBeEnabled('mam_mx_080310');
      elementShouldBeEnabled('mam_mx_080311');

      clickElement('mam_mx_080306', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_080307');
      elementShouldBeEnabled('mam_mx_080308');
    });
  });
});
