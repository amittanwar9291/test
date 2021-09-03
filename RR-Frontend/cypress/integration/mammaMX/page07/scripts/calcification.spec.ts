import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { mammaMXRoutes } from '@environments/pages-routes';
import { clickElement, elementShouldBeEnabled, getAppConfig, selectLocalizerMultiple } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';

context('Page 09 - Ultrasound finding', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('mam_mx_080707', 'mam_mx_070106-');
  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'MammaMX', config).then(id => {
          pageId = id;
          cy.visit(mammaMXRoutes.MammaMX_Technology.url + '/' + pageId);
        });
      });
    });
  });

  describe('Calcification', () => {
    it('Calcifications', () => {
      elementShouldBeEnabled('mam_mx_030401');
      clickElement('mam_mx_030401', true, 'checkbox');
      elementShouldBeEnabled('mam_mx_030403');
      selectLocalizerMultiple('mam_mx_030403', 'g', 'tspan', 0, 1, true);

      cy.wait(4000);
      cy.get('rr-top-navigation')
        .contains('7')
        .click({ force: true });

      elementShouldBeEnabled('mam_mx_070105');
      elementShouldBeEnabled('mam_mx_070106-1');
      clickElement('mam_mx_070105', true, 'radio');
      findingColumn.selectFindingOptionByAppearance(1);
      elementShouldBeEnabled('mam_mx_070107');
      elementShouldBeEnabled('mam_mx_070219');
      elementShouldBeEnabled('mam_mx_070220');
      elementShouldBeEnabled('mam_mx_070221');
    });
  });
});
