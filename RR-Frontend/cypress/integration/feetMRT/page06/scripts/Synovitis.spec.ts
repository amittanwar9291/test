import 'cypress-shadow-dom';
import { IAppConfig } from '@interfaces/configs';
import { Guid } from '@models/shared/guid/guid';
import { clickElement, elementShouldBeEnabled, getAppConfig } from '../../../../shared/service';
import { signIn } from '../../../../shared/requests';
import { createReport } from '../../../../shared/report-creation';
import { testUser } from '../../../../shared/test-usert';
import { FindingColumnPageObject } from '../../../../page objects/finding-column-page-object';
import { feetMRTRoutes } from '@environments/pages-routes';

context('Page 05 - FeetMRT', () => {
  let config: IAppConfig;
  let pageId: Guid = Guid.createEmpty();
  const findingColumn = new FindingColumnPageObject('none', 'none-');

  before('sign-in', () => {
    getAppConfig().then(result => {
      config = result;
      signIn(config).then(() => {
        createReport(testUser.firstName, 'FeetMRT', config).then(id => {
          pageId = id;
          cy.visit(feetMRTRoutes.FeetMRT_Technology.url + '/' + pageId);
        });
      });
    });
  });

  it('Synovitis', () => {
    clickElement('uni_x_030104', true, 'radio');

    cy.get('rr-top-navigation')
      .contains('6')
      .click({ force: true });

    clickElement('anc_m_060105', true, 'radio');

    findingColumn.selectFindingOptionByAppearance(6);
    elementShouldBeEnabled('none');

    elementShouldBeEnabled('anc_m_060240');
    elementShouldBeEnabled('anc_m_060241');

    elementShouldBeEnabled('anc_m_0604109');
    elementShouldBeEnabled('anc_m_0604110');
    elementShouldBeEnabled('anc_m_0604111');

    clickElement('anc_m_060241', true, 'radio');
    elementShouldBeEnabled('anc_m_0603138');
    elementShouldBeEnabled('anc_m_0603139');
  });
});
